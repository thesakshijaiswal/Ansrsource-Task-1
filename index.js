const btnOpen = document.querySelector("#btn-open");
const btnClose = document.querySelector("#btn-close");

//Show small screen menu to accessibility tools only when the below screen size matches
const media = window.matchMedia('(width < 900px)');
const navLinkContainer = document.querySelector('.nav-link-container');
const main = document.querySelector('main');

function setUpNav(e){
  if(e.matches){
    //is mobile
    console.log("Is mobile");
    navLinkContainer.setAttribute('inert', '');
    // set transition value to none when screen size changes
    navLinkContainer.style.transition = 'none';
  }
  else{
    //is tablet/desktop
    console.log("is desktop")
    navLinkContainer.removeAttribute('inert');
  }
}

// Open menu
function openMobileMenu() {
  btnOpen.setAttribute('aria-expanded', 'true');
  navLinkContainer.removeAttribute('inert');
  navLinkContainer.removeAttribute('style');
  main.setAttribute('inert', '');
}

// Close menu
function closeMobileMenu() {
  btnOpen.setAttribute('aria-expanded', 'false');
  navLinkContainer.setAttribute('inert', '');
  main.removeAttribute('inert');

  // set transition value to none when menu is closed
  setTimeout(() => {
    navLinkContainer.style.transition = 'none';
  },500)
}

setUpNav(media);

btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);

media.addEventListener('change', function (e) {
  setUpNav(e);
})