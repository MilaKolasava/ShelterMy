const headerBurger = document.querySelector(".header__burger");
const headerNavigation = document.querySelector(".header-navigation");
if (headerBurger) {
  headerBurger.addEventListener("click", function (event) {
    document.body.classList.toggle("_lock");
    headerBurger.classList.toggle("_active");
    headerNavigation.classList.toggle("_active");
  });
}
const menuLinks = document.querySelectorAll(".list-navigation-item[data-goto]");
//массив ссылок
if (menuLinks.length > 0) {
  // проверяется пустой массив или нет. Проверка на пустой массив
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(event) {
    console.log(event);
    const menuLink = event.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
      //происзодит проверка есть ли у элемента в target свойство dataset со значением goto
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top;
      //pageYOffset -
      //document.querySelector(".content-header").offsetHeight;

      if (headerBurger.classList.contains("_active")) {
        document.body.classList.remove("_lock");
        headerBurger.classList.remove("_active");
        headerNavigation.classList.remove("_active");
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      event.preventDefault();
    }
  }
}
