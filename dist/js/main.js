//Select DOM items
const $menuBtn = document.querySelector(".menu-btn");
const $menu = document.querySelector(".menu");
const $menuBrand = document.querySelector(".menu-branding");
const $menuNav = document.querySelector(".menu-nav");
const $navItems = document.querySelectorAll(".nav-item");

//set initial stat of menu
let showMenu = false;
const toggleMenu = _ => {
  if (!showMenu) {
    $menuBtn.classList.add("close");
    $menu.classList.add("show");
    $menuNav.classList.add("show");
    $menuBrand.classList.add("show");
    $navItems.forEach(item => item.classList.add("show"));
    showMenu = true;
  } else {
    showMenu = false;
    $menuBtn.classList.remove("close");
    $menu.classList.remove("show");
    $menuNav.classList.remove("show");
    $menuBrand.classList.remove("show");
    $navItems.forEach(item => item.classList.remove("show"));
  }
};

$menuBtn.addEventListener("click", toggleMenu);
