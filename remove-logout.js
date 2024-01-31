document.addEventListener("DOMContentLoaded", function () {
  const logoutLink = document.querySelector(".nav-links li:last-child");

  if (localStorage.getItem("authenticated") === "true") {
    logoutLink.style.display = "block";
  } else {
    logoutLink.style.display = "none";
  }
});
