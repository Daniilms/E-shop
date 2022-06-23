let brandimg = document.querySelector(".brand-img");
let brandEl = document.querySelector(".brand__title-wrp");
let imgEl = document.querySelector(".header__switcher");
let headerBtn = document.querySelector(".header__btn");
let switcherEl = document.querySelector(".switcher");
headerBtn.onclick = function () {
  switcherEl.classList.toggle("switcher__dark");
  if (switcherEl.classList.contains("switcher__dark")) {
    switcherEl.href = "./css/dark-theme.css";
    imgEl.src = "./img/sun-svg.svg";
    brandimg.src = "./img/women-dark-theme.jpg";
  } else {
    brandimg.src = "./img/men.jpg";
    imgEl.src = "./img/moon-svg.svg";
    switcherEl.href = "./css/style.css";
  }
};
