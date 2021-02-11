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
  let aboutTitle = document.querySelector(".aboutTitle");
  let worksTitle = document.querySelector(".worksTitle");
  let contactTitle = document.querySelector(".contactTitle");
  let descriptionHero = document.querySelector(".descriptionHero");
  let homeNavlink = document.querySelector(".homeNavlink");
  let aboutNavlink = document.querySelector(".aboutNavlink");
  let worksNavlink = document.querySelector(".worksNavlink");
  let contactNavlink = document.querySelector(".contactNavlink");
  let scrollDown = document.querySelector(".scrollDownVertical");
  let subtitleAbout = document.querySelector(".subtitleAbout");
  let aboutDescription = document.getElementById("#aboutDescriptionLanguage");
  let knowMoreAbout = document.querySelector(".knowMoreAbout");
  let aboutKnowMoreDescription = document.querySelector(".aboutKnowMoreDescription");
  let subtitleWorks = document.querySelector(".subtitleWorks");

  if (language === "french") {
    descriptionHero.innerHTML = "passioné par le web/frontend";
    homeNavlink.innerHTML = "<a href='" + "#aboutSection" + "'>ACCUEIL</a>";
    aboutNavlink.innerHTML = "<a href='" + "#aboutSection" + "'>A PROPOS</a>";
    worksNavlink.innerHTML = "<a href='" + "#worksSection" + "'>TRAVAIL</a>";
    contactNavlink.innerHTML = "<a href='" + "#contactSection" + "'>CONTACT</a>";
    scrollDown.innerHTML = "descendre";
    aboutTitle.innerHTML = "A propos de moi";
    worksTitle.innerHTML = "Travail";
    subtitleAbout.innerHTML = "ce que j'aime / fais";
    knowMoreAbout.innerHTML = "En savoir plus >";
    contactTitle.innerHTML = "Contactez moi";
    aboutKnowMoreDescription.innerHTML = "Actuellement étudiant en première année au cursus PGE de l'école Epitech sur le campus de Lyon, j'ai décidé de suivre cette formation qui permet un apprentissage par soi-même, une organisation autonome de son emploi du temps et des projets en groupe.</br>De plus, je suis très intéressé par le développement web que j'ai découvert en dehors du cadre de mes études au collège, j'aime la créativité et le travail en groupe que ce domaine m'apporte.";
    subtitleWorks.innerHTML = "mon portfolio / </br>mes sites";
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
    aboutKnowMoreDescription.innerHTML = "Currently a first year student in the PGE course at the Epitech school on the Lyon campus, I decided to follow this training which allows self-study, autonomous organisation of one's schedule and group projects.</br>Moreover, I am very interested in web development which I discovered outside the framework of my studies at the college, I like the creativity and group work that this field brings me."
    worksTitle.innerHTML = "Works";
    subtitleWorks.innerHTML = "my portfolio / </br> my sites";
  }
};
changeLanguage();
knowMore();
navSlide();

//Initialisation de la fonction de l'API Javascript
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
