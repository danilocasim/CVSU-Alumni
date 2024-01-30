// script.js

function login() {
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  const accounts = [
    { email: "angelicajoyce.tomas@cvsu.edu.ph", password: "tomas1" },
    { email: "adrianneil.bagnas@cvsu.edu.ph", password: "bagnas1" },
    { email: "francojay.bagaporo@cvsu.edu.ph", password: "Cvsu2024" },
    { email: "danilo.casim@cvsu.edu.ph", password: "danilojr" },
    { email: "addyson.diculen@cvsu.edu.ph", password: "diculen1" },
    { email: "milesian.tadas@cvsu.edu.ph", password: "tadas1" },
    { email: "allen.a.angeles@cvsu.edu.ph", password: "angeles1" },
    { email: "janrussell.aspan@cvsu.edu.ph", password: "aspan1" },
    { email: "mariukristian.tenerife@cvsu.edu.ph", password: "tenerife1" },
    { email: "joseph.baclayo@cvsu.edu.ph", password: "baclayo1" },
    { email: "jerlynjoy.pitcheller@cvsu.edu.ph", password: "pitcheller1" },
    { email: "ryan.saavedra@cvsu.edu.ph", password: "ryanpogi123" },
    { email: "rhanelstephen.buclares@cvsu.edu.ph", password: "buclares1" },
    { email: "katrinamae.perez@cvsu.edu.ph", password: "perez1" },
    { email: "leshlee.kadusale@cvsu.edu.ph", password: "kadusale1" },
    { email: "alessandra.herico@cvsu.edu.ph", password: "herico1" },
    { email: "chelseafranzine.zaragoza@cvsu.edu.ph", password: "zaragoza1" },
    { email: "lorencemiguel.arnedo@cvsu.edu.ph", password: "arnedo1" },
    { email: "danica.anyayahan@cvsu.edu.ph", password: "anyayahan1" },
    { email: "jason.ramirez@cvsu.edu.ph", password: "ramirez1" },
    { email: "jade.dejamco@cvsu.edu.ph", password: "dejamco1" },
    { email: "gerwin.barizo@cvsu.edu.ph", password: "barizo1" },
    { email: "john.mantilla@cvsu.edu.ph", password: "mantilla1" },
    { email: "aljon.vijungco@cvsu.edu.ph", password: "vijungco1" },
  ];
  // Check if the provided email and password match any account
  const foundAccount = accounts.find(
    (account) => account.email === email && account.password === password
  );

  if (foundAccount) {
    alert("Login successful!");
    localStorage.setItem("authenticated", "true");
    window.location.href = "index.html";
    return false;
  } else {
    alert("Invalid email or password. Please try again.");
    return false;
  }
}

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // toggle nav
    nav.classList.toggle("nav-active");

    // animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation =
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`;
      }
    });

    // burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

// VIDEO
let listVideo = document.querySelectorAll(".video-list .vid");
let mainVideo = document.querySelector(".main-video video");
let title = document.querySelector(".main-video .title");

listVideo.forEach((video) => {
  video.onclick = () => {
    listVideo.forEach((vid) => vid.classList.remove("active"));
    video.classList.add("active");
    if (video.classList.contains("active")) {
      let src = video.children[0].getAttribute("src");
      mainVideo.src = src;
      let text = video.children[1].innerHTML;
      title.innerHTML = text;
    }
  };
});

// login
// Get a NodeList of all elements with class ".nav-links .attempt"
const elements = document.querySelectorAll(".nav-links .attempt");

// Iterate through each element and attach the event handler
elements.forEach(function (element) {
  element.onclick = function () {
    alert("Access requires authentication. Please log in.");
  };
});

// 1d moments popup image
document.querySelectorAll(".pic-container img").forEach((image) => {
  image.onclick = () => {
    document.querySelector(".popup-image").style.display = "block";
    document.querySelector(".popup-image img").src = image.getAttribute("src");
  };
});

document.querySelector(".popup-image span").onclick = () => {
  document.querySelector(".popup-image").style.display = "none";
};
