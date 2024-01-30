function alertNavClick() {
  if (localStorage.getItem("authenticated") !== "true") {
    alert("Access requires authentication. Please log in.");
  }
}

const navClick = document.querySelector("#navClick");
navClick.addEventListener("click", alertNavClick);
