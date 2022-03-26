const showPassword = document.querySelector(".toggle-password");
const showCPassword = document.querySelector(".toggle-confirm-password");

const email = document.getElementById("email");
const emailError = document.getElementById("email-error");

const password = document.getElementById("password");
const passwordError = document.getElementById("password-error");
const number = document.getElementById("number");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const characters = document.getElementById("characters");

const cpassword = document.getElementById("confirm");
const cpasswordError = document.getElementById("confirm-error");

const btnLogin = document.getElementById("login");

const message = document.getElementById("message");

showPassword.addEventListener("click", () => {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
});

showCPassword.addEventListener("click", () => {
  var x = document.getElementById("confirm");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
});

const loginForm = (e) => {
  e.preventDefault();

  //email validation
  const emailId = email.value;
  at = emailId.indexOf("@");
  dot = emailId.lastIndexOf(".");

  if (at < 1 || dot - at < 2) {
    emailError.innerText = "Invalid email";
    email.classList.add("emailIn");
  } else {
    emailError.innerText = "";
    email.classList.remove("emailIn");
  }

  //password validation
  const lowerCaseLetters = /[a-z]/g;

  if (password.value.match(lowerCaseLetters)) {
    lowercase.classList.remove("invalid");
    lowercase.classList.add("valid");
    password.classList.remove("passwordIn");
  } else {
    lowercase.classList.remove("valid");
    lowercase.classList.add("invalid");
    password.classList.add("passwordIn");
  }

  const upperCaseLetters = /[A-Z]/g;
  if (password.value.match(upperCaseLetters)) {
    uppercase.classList.remove("invalid");
    uppercase.classList.add("valid");
    password.classList.remove("passwordIn");
  } else {
    uppercase.classList.remove("valid");
    uppercase.classList.add("invalid");
    password.classList.add("passwordIn");
  }

  const numbers = /[0-9]/g;
  if (password.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
    password.classList.remove("passwordIn");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
    password.classList.add("passwordIn");
  }

  if (password.value.length >= 8) {
    characters.classList.remove("invalid");
    characters.classList.add("valid");
    password.classList.remove("passwordIn");
  } else {
    characters.classList.remove("valid");
    characters.classList.add("invalid");
    password.classList.add("passwordIn");
  }

  //confirm password
  if (cpassword.value != password.value) {
    cpassword.classList.add("cPasswordIn");
    cpasswordError.innerText = "Password don't match,type correct password";
  } else {
    cpassword.classList.remove("cPasswordIn");
    cpasswordError.innerText = "";
  }

  if (
    email.classList.contains("emailIn") ||
    password.classList.contains("passwordIn") ||
    cpassword.classList.contains("cPasswordIn")
  ) {
    message.innerText = "Something went wrong";
    message.classList.add("invalid");
  } else {
    message.innerText = "You are logged in!";
    message.classList.remove("invalid");
    message.classList.add("valid");
  }
};

btnLogin.addEventListener("click", loginForm);

///City  Weather-API
const weatherForm = document.getElementById("weatherForm");
const city = document.getElementById("city");
const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const lat = document.getElementById("lat");
const long = document.getElementById("long");
const getdata = document.getElementById("getdata");

getdata.addEventListener("click", (e) => {
  e.preventDefault();

  const value = city.value;
  temp.innerText = "";
  lat.innerText = "";
  long.innerText = "";
  city.value = "";

  fetch(
    `https://api.weatherapi.com/v1/current.json?key=04f3a7fce113487abd2155828222503&q=${value}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      cityName.innerText = `${data.location.name}:`;
      temp.innerText = `Temperature: ${data.current.temp_c}°C`;
      lat.innerText = `Latitude: ${data.location.lat}`;
      long.innerText = `Longitude: ${data.location.lon}`;
    })
    .catch(() => {
      cityName.innerText = "Wrong city name!";
    });
});
