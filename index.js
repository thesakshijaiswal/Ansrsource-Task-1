const btnOpen = document.querySelector("#btn-open");
const btnClose = document.querySelector("#btn-close");

function openMobileMenu() {
  btnOpen.setAttribute('aria-expanded', 'true');
}
function closeMobileMenu() {
  btnOpen.setAttribute('aria-expanded', 'false');
}

btnOpen.addEventListener('click', openMobileMenu)
btnClose.addEventListener('click', closeMobileMenu)