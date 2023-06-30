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



// FEATURES SECTION SCROLL ANIMATION:
const featuresContainer = document.querySelectorAll('.features-container__feature');

// Use IntersectionObserver WebAPI to track wether or not the element is in viewport(window) if so add animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    (entry.isIntersecting) ? entry.target.classList.add('showFeature') : "";
  })
});
// query all elements with hideFeature class 
const hiddenElements = document.querySelectorAll('.hideFeature'); 
// loop each element with class and set it to be observed
hiddenElements.forEach((ele) => {
  observer.observe(ele);
})


