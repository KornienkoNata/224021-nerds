window.onload=function() {
  var link = document.querySelector(".map-contact .btn");
  var popup = document.querySelector(".feedback");
  var close = popup.querySelector(".feedback-close");
  var form = popup.querySelector("form");
  var fullname = popup.querySelector("[name=fullname]");
  var email = popup.querySelector("[name=email]");
  var storage = localStorage.getItem("fullname");

  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("feedback-show");
    if (storage) {
      fullname.value = storage;
      email.focus();
      } else {
      fullname.focus();
    }
  });

  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("feedback-show");
    popup.classList.remove("modal-error");
  });

  form.addEventListener("submit", function(event) {
    if (!fullname.value || !email.value) {
      event.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      localStorage.setItem("fullname", fullname.value);
    }
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
    if (popup.classList.contains("feedback-show")) {
      popup.classList.remove("feedback-show");
      popup.classList.remove("modal-error");
      }
    }
  });
}

 function initMap() {
    var centerLatLng = new google.maps.LatLng(59.938807, 30.323033);
    var mapOptions = {
        center: centerLatLng,
        zoom: 17
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);


    /// Добавляем маркер
var marker = new google.maps.Marker({
    position: centerLatLng,
    map: map,
    title: "NЁRDS DESIGN STUDIO",
    icon: "img/marker.png"
});
}

google.maps.event.addDomListener(window, "load", initMap);
