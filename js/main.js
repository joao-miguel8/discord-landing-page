//<<<<<<<<< HTML ELEMENTS >>>>>>>
const mobileMenuBtn = document.querySelector('.menu');
const mobileMenuContainerEle = document.querySelector('.nav-mobile__nav-mobile-links-container-wrapper');
const mobileCloseMenuBtn = document.querySelector('.close-icon');

//<<<<<<<<< EVENT LISTENERS >>>>>>>
mobileMenuBtn.addEventListener('click', toggleMobileMenu);
mobileCloseMenuBtn.addEventListener('click', unToggleMobileMenu)

function toggleMobileMenu() {
  mobileMenuContainerEle.classList.toggle('js-show-menu-toggle');
  }
  
  function unToggleMobileMenu() {
    mobileMenuContainerEle.classList.toggle('js-show-menu-toggle');
}
