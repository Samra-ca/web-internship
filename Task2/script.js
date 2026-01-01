const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const loginBtn = document.querySelector("#loginBtn");

loginBtn.addEventListener("click", function () {
  const email = emailInput.value;
  const password = passwordInput.value;

  if (email === "" || password === "") {
    alert("Please fill all fields");
  } else {
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    alert("Login data saved successfully");
  }
});

window.addEventListener("load", function () {
  const savedEmail = localStorage.getItem("userEmail");

  if (savedEmail) {
    emailInput.value = savedEmail;
  }
});

const logoutBtn = document.querySelector("#logoutBtn");

logoutBtn.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});
