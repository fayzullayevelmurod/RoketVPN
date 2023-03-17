let body = document.querySelector("body");
let bars = document.querySelector(".header-bars");
let Headerclose = document.querySelector(".header-close");
let headerNav = document.querySelector(".header-nav");

headerNavBar = true;

bars.addEventListener("click", () => {
  if (headerNavBar) {
    // headerNav.style.display = "block";
    headerNav.style.transform = "translateX(0px)";
    body.style.overflowY = "hidden";
    headerNavBar = false;
}
});
Headerclose.addEventListener("click", () => {
  if (headerNavBar != true) {
      headerNav.style.transform = "translateX(-1000px)";
      body.style.overflowY = "visible";
    }
    headerNavBar = true;
});

