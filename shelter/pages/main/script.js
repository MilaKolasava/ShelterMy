"use strict";

const headerBurger = document.querySelector(".header__burger");
const headerNavigation = document.querySelector(".header-navigation");

const closeMenu = () => {
  document.body.classList.remove("_lock");
  headerBurger.classList.remove("_active");
  headerNavigation.classList.remove("_active");
};

if (headerBurger) {
  headerBurger.addEventListener("click", function (event) {
    document.body.classList.toggle("_lock");
    headerBurger.classList.toggle("_active");
    headerNavigation.classList.toggle("_active");
  });
}
const menuLinks = document.querySelectorAll(".list-navigation-item[data-goto]");
const isNotEmptyMenuLinks = menuLinks.length > 0;

if (isNotEmptyMenuLinks) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(event) {
    const menuLink = event.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top;

      if (headerBurger.classList.contains("_active")) {
        closeMenu();
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      event.preventDefault();
    }
  }
}

headerNavigation.addEventListener("click", (event) => {
  if (headerNavigation.classList.contains("_active")) {
    closeMenu();
  }
});
