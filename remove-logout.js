// REMOVE LOGOUT
document.addEventListener("DOMContentLoaded", function () {
  const logoutLink = document.querySelector(".nav-links li:last-child");

  if (localStorage.getItem("authenticated") === "true") {
    logoutLink.style.display = "block";
  } else {
    logoutLink.style.display = "none";
  }
});
// LOGOUT
function logout() {
  localStorage.setItem("authenticated", "false");
  window.location.href = "login.html";
}

// REMOVE LOGIN
document.addEventListener("DOMContentLoaded", function () {
  const loginLink = document.querySelector("#login-head");

  if (localStorage.getItem("authenticated") === "true") {
    loginLink.style.opacity = 0;
  } else {
    loginLink.style.opacity = 1;
  }
});
