"use strict";

const headerBurger = document.querySelector(".header__burger");
const headerNavigation = document.querySelector(".header-navigation");
if (headerBurger) {
  headerBurger.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    headerBurger.classList.toggle("_active");
    headerNavigation.classList.toggle("_active");
  });
}
const menuLinks = document.querySelectorAll(".list-navigation-item[data-goto");
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector("header").offsetHeight;

      if (headerBurger.classList.contains("_active")) {
        document.body.classList.remove("_lock");
        headerBurger.classList.remove("_active");
        headerNavigation.classList.remove("_active");
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}
