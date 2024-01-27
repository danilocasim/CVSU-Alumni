if (localStorage.getItem("authenticated") !== "true") {
  window.location.href = "login.html";
}

function logout() {
  localStorage.setItem("authenticated", "false");
  window.location.href = "login.html";
}
