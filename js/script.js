  var link = document.querySelector('.map-contact .btn');
  var subm = document.querySelector('.feedback .submit');
  var popup = document.querySelector('.feedback');
  var inp_name = popup.querySelector('.fullname');
  var inp_email = popup.querySelector('.email');
  var close = popup.querySelector('.feedback-close');
  var form = popup.querySelector('form');
  var fullname = popup.querySelector('[name=fullname]');
  var email = popup.querySelector('[name=email]');
  var storagename = localStorage.getItem('fullname');
  var storageemail = localStorage.getItem('email');
  var message = popup.querySelector('[name=message]');
  var press = 0;

  link.addEventListener('click', function(event) {
    event.preventDefault();
    popup.classList.add('feedback-show');//открыли форму
    var temp = 0;
    if (storagename) {
      fullname.value = storagename;
      email.focus();
      temp = 1;
      } else {
      fullname.focus();
    };

    if (storageemail) {
      email.value = storageemail;
      if (temp == 1) { message.focus();}
      else {
        fullname.focus();
      };
    };
  });


  subm.addEventListener('click', function(ev) {
    press = 1; //чтобы при первом вводе не было класса modal-error на input-ах
  });

  close.addEventListener('click', function(event) {
    event.preventDefault();
    popup.classList.remove('feedback-show');
    popup.classList.remove('modal-error-form');
    inp_email.classList.remove('modal-error');
    inp_name.classList.remove('modal-error');
  });

  form.addEventListener('submit', function(event) {
    if (!fullname.value) {
      event.preventDefault();
      inp_name.classList.remove('modal-error');
      inp_name.classList.add('modal-error');
      popup.classList.remove('modal-error-form');
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add('modal-error-form');
      } else {
      localStorage.setItem('fullname', fullname.value);
    };

    if (!email.value) {
      event.preventDefault();
      inp_email.classList.remove('modal-error');
      inp_email.classList.add('modal-error');
      popup.classList.remove('modal-error-form');
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add('modal-error-form');
      }
    else {
      localStorage.setItem('email', email.value);
    };
  });

  inp_name.addEventListener('focusout', function(event) {
    if (press==1) {
      event.preventDefault();
      inp_name.classList.toggle('modal-error', !inp_name.value);
    };
  });

  inp_email.addEventListener('focusout', function(event) {
    if (press==1) {
      event.preventDefault();
      inp_email.classList.toggle('modal-error', !inp_email.value);
    };
  });


  window.addEventListener('keydown', function(event) {
    if (event.keyCode === 27) {
    if (popup.classList.contains('feedback-show')) {
      popup.classList.remove('feedback-show');
      popup.classList.remove('modal-error-form');
      inp_name.classList.remove('modal-error');
      inp_email.classList.remove('modal-error');
      };
    };
  });

  function initMap() {
    var centerLatLng = new google.maps.LatLng(59.938807, 30.323033);
    var mapOptions = {
        center: centerLatLng,
        zoom: 17
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    // Добавляем маркер
    var marker = new google.maps.Marker({
      position: centerLatLng,
      map: map,
      title: 'NЁRDS DESIGN STUDIO',
      icon: 'img/marker.png'
    });
  };
  google.maps.event.addDomListener(window, 'load', initMap);
