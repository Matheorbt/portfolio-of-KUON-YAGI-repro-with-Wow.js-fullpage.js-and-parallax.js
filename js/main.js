const navSlide = () => {
  var burger = document.querySelector(".hamburger");
  var navbar = document.querySelector(".fullNavbar");

  burger.addEventListener("click", () => {
    navbar.classList.toggle("fullNavbarActive");
    burger.classList.toggle("toggle");
  });
};

navSlide();
