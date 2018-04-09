// 'use strict';

var link = document.querySelector(".login-link");
var loginPopup = document.querySelector(".modal-login");
var close = document.querySelector(".modal-login-close");
var overlay = document.querySelector(".modal-overlay");
var login = loginPopup.querySelector("[name=login]");
var password = loginPopup.querySelector("[name=password");
var form = loginPopup.querySelector(".login-form");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch(err) {
  isStorageSupport = false;
}
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.add("modal-show");
  overlay.classList.add("modal-show");
  login.focus();
});

if (storage) {
  login.value = storage;
  password.focus();
} else {
  login.focus();
}

overlay.addEventListener("click", function (evt) {
  loginPopup.classList.remove("modal-show");
  mapPopup.classList.remove("modal-show");
  overlay.classList.remove("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.remove("modal-show");
  overlay.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    console.log("Нужно ввести логин и пароль");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (loginPopup.classList.contains("modal-show")) {
      loginPopup.classList.remove("modal-show");
      overlay.classList.remove("modal-show");
    }
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
      overlay.classList.remove("modal-show");
    }
  }
});

var mapLink = document.querySelector(".contacts-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-map-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
  overlay.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  console.log("!!!");
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
  overlay.classList.remove("modal-show");
});

