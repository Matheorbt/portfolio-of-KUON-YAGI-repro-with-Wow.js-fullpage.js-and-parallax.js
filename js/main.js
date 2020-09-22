const navSlide = () => {
  var burger = document.querySelector(".hamburger");
  var navbar = document.querySelector(".fullNavbar");
  var homeNavlink = document.querySelector(".homeNavlink");
  var aboutNavlink = document.querySelector(".aboutNavlink");
  var worksNavLink = document.querySelector(".worksNavlink");
  var contactNavLink = document.querySelector(".contactNavlink");

  burger.addEventListener("click", () => {
    navbar.classList.toggle("fullNavbarActive");
    burger.classList.toggle("toggle");
  });

  homeNavlink.addEventListener("click", () => {
    navbar.classList.toggle("fullNavbarActive");
    burger.classList.toggle("toggle");
  });

  aboutNavlink.addEventListener("click", () => {
    navbar.classList.toggle("fullNavbarActive");
    burger.classList.toggle("toggle");
  });

  worksNavLink.addEventListener("click", () => {
    navbar.classList.toggle("fullNavbarActive");
    burger.classList.toggle("toggle");
  });

  contactNavLink.addEventListener("click", () => {
    navbar.classList.toggle("fullNavbarActive");
    burger.classList.toggle("toggle");
  });
};

const knowMore = () => {
  var buttonKnowMore = document.querySelector(".knowMoreAbout");
  var fullKnowMore = document.querySelector(".hiddenKnowMoreSection");
  var backAarrowMore = document.querySelector(
    ".hiddenKnowMoreSectionArrowBack"
  );

  buttonKnowMore.addEventListener("click", () => {
    fullKnowMore.classList.toggle("activeHiddenAbout");
  });

  backAarrowMore.addEventListener("click", () => {
    fullKnowMore.classList.toggle("activeHiddenAbout");
  });
};

const changeLanguage = (language) => {
  let descriptionHero = document.querySelector(".descriptionHero");
  let homeNavlink = document.querySelector(".homeNavlink");
  let aboutNavlink = document.querySelector(".aboutNavlink");
  let worksNavlink = document.querySelector(".worksNavlink");
  let contactNavlink = document.querySelector(".contactNavlink");
  let scrollDown = document.querySelector(".scrollDownVertical");
  let aboutTitle = document.querySelector(".aboutTitle");
  let subtitleAbout = document.querySelector(".subtitleAbout");
  let aboutDescription = document.getElementById("#aboutDescriptionLanguage");
  let knowMoreAbout = document.querySelector(".knowMoreAbout");
  let contactTitle = document.querySelector(".contactTitle");

  if (language === "french") {
    descriptionHero.innerHTML = "passioné par le web/frontend";
    homeNavlink.innerHTML = "<a href='" + "#aboutSection" + "'>ACCUEIL</a>";
    aboutNavlink.innerHTML = "<a href='" + "#aboutSection" + "'>A PROPOS</a>";
    worksNavlink.innerHTML = "<a href='" + "#worksSection" + "'>TRAVAIL</a>";
    contactNavlink.innerHTML =
      "<a href='" + "#contactSection" + "'>CONTACT</a>";
    scrollDown.innerHTML = "descendre";
    aboutTitle.innerHTML = "A propos de moi";
    subtitleAbout.innerHTML = "ce que j'aime / fais";
    knowMoreAbout.innerHTML = "En savoir plus >";
    contactTitle.innerHTML = "Contactez moi";
  } else {
    descriptionHero.innerHTML = "passionate about web/frontend";
    homeNavlink.innerHTML = "<a href='" + "#aboutSection" + "'>HOME</a>";
    aboutNavlink.innerHTML = "<a href='" + "#aboutSection" + "'>ABOUT</a>";
    worksNavlink.innerHTML = "<a href='" + "#worksSection" + "'>WORKS</a>";
    contactNavlink.innerHTML =
      "<a href='" + "#contactSection" + "'>CONTACT</a>";
    scrollDown.innerHTML = "scrolldown";
    aboutTitle.innerHTML = "About me";
    subtitleAbout.innerHTML = "what I like /" + "</br>" + "do";
    knowMoreAbout.innerHTML = "Know more >";
    contactTitle.innerHTML = "Contact me";
  }
};
changeLanguage();
knowMore();
navSlide();

//Initialisation de la fonction de l'API Javascript

//API mise en commentaire pour éviter l'excès de requete API avant la version build
function initMap() {
  var epitech = { lat: 45.74671126902152, lng: 4.834958581829663 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: epitech,
  });
  var marker = new google.maps.Marker({
    position: epitech,
    map: map,
  });
}

//Barba js initialization
