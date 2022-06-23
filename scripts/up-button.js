let upButton = document.querySelector('.up_button');
window.onscroll = function () {
  if (window.pageYOffset < 1500) {
  upButton.classList.add('shown');
} else {
  upButton.classList.remove('shown');
}
}
upButton.onclick = function () {
  window.scrollTo(0, 0);
};