var backdrop = document.querySelector('.backdrop');
var hamburgerMenu = document.querySelector('.toggle-button');
var mobile__nav = document.querySelector('.mobile-nav');
var sButtons = document.querySelectorAll('.Sponsors__button');


backdrop.addEventListener('click', function() {
    mobile__nav.style.display = 'none';
    backdropClose();
});


function backdropClose() {
    backdrop.style.display = 'none';

}


hamburgerMenu.addEventListener('click', function() {
    mobile__nav.style.display = 'block';
    backdrop.style.display = 'block';

});


sButtons.forEach(button => {
  button.addEventListener('click', () => {
    const offset = button.dataset.carouselButton === '.next' ? 1 : -1
    const slides = button
      .closest('.Sponsors')
      .querySelector('.Sponsors__list')

    var activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})
