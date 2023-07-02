//<<<<<<<<< HTML ELEMENTS >>>>>>>
const mobileMenuBtn = document.querySelector('.menu');
const mobileMenuContainerEle = document.querySelector('.nav-mobile__nav-mobile-links-container-wrapper');
const mobileCloseMenuBtn = document.querySelector('.close-icon');

// FEATURES SECTION SCROLL ANIMATION:
const featuresContainer = document.querySelectorAll('.features-container__feature');

// TOGGLE LANGUAGES CONTAINER
const languageSelectedButton = document.querySelector('.selected-dropdown-lang');
const languagesContainerEle = document.querySelector('.info-box-container__dropmenu');


//<<<<<<<<< EVENT LISTENERS >>>>>>>
mobileMenuBtn.addEventListener('click', toggleMobileMenu);
mobileCloseMenuBtn.addEventListener('click', unToggleMobileMenu)
languageSelectedButton.addEventListener('click', openLanguageMenu);

function toggleMobileMenu() {
  mobileMenuContainerEle.classList.toggle('js-show-menu-toggle');
  }
  
  function unToggleMobileMenu() {
    mobileMenuContainerEle.classList.toggle('js-show-menu-toggle');
}




// Use IntersectionObserver WebAPI to track wether or not the element is in viewport(window) if so add animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    (entry.isIntersecting) ? entry.target.classList.add('showContent') : "";
  })
});
// query all elements with hideFeature class 
const hiddenElements = document.querySelectorAll('.hideContent'); 
// loop each element with class and set it to be observed
hiddenElements.forEach((ele) => {
  observer.observe(ele);
})




// open and close language selection drop down menu
function openLanguageMenu() {
    languagesContainerEle.classList.toggle('languageMenuToggle');
}

// function to hide language drop down menu if user clicks on window
window.onclick = function (event) { 
  if(!event.target.matches(".selected-dropdown-lang")) {
languagesContainerEle.classList.add('languageMenuToggle');
  }
}

