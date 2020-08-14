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
  let knowMoreAbout = document.getElementById("#knowMoreAbout");

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
    knowMoreAbout.innerHTML = "En savoir plus" + '<div class="arrowAbout">' + '<svg width="25" height="50" viewBox="0 0 50 100" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '< path d = "M49.2288 48.0065L4.57724 0.833028C3.52591 -0.277676 1.83982 -0.277676 0.788495 0.833028C-0.262832 1.94373 -0.262832 3.72505 0.788495 4.83575L43.5358 49.9974L0.788495 95.159C-0.262832 96.2697 -0.262832 98.051 0.788495 99.1617C1.30424 99.7066 1.99851 100 2.67295 100C3.34738 100 4.04166 99.7276 4.5574 99.1617L49.209 51.9883C50.2603 50.8985 50.2603 49.0962 49.2288 48.0065Z" fill = "#061D38" />' + '</div>';
    aboutDescription.innerHTML =
      "Étudiant à l'école d'ingénieurs Epitech en masterje suis passionné par la programmation et plus particulièrement par le développement web.";
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
    knowMoreAbout.innerHTML = "Know more about me" + '<div class="arrowAbout">' + '<svg width="25" height="50" viewBox="0 0 50 100" fill="none" xmlns="http://www.w3.org/2000/svg">' + 
      '< path d = "M49.2288 48.0065L4.57724 0.833028C3.52591 -0.277676 1.83982 -0.277676 0.788495 0.833028C-0.262832 1.94373 -0.262832 3.72505 0.788495 4.83575L43.5358 49.9974L0.788495 95.159C-0.262832 96.2697 -0.262832 98.051 0.788495 99.1617C1.30424 99.7066 1.99851 100 2.67295 100C3.34738 100 4.04166 99.7276 4.5574 99.1617L49.209 51.9883C50.2603 50.8985 50.2603 49.0962 49.2288 48.0065Z" fill = "#061D38" />' + '</div>';
</svg >
</div >';
    aboutDescription.innerHTML =
      '<mark class="aboutMark">"</mark >' +
      "Student at the Epitech engineering school in master's program I'm passionate about programming and more particularly by web development." +
      '<mark class="aboutMark"> "</mark>';
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
