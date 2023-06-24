const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('show');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('show');
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

const nextButton = document.getElementById('nextButton');
nextButton.addEventListener('click', nextSlide);

const prevButton = document.getElementById('prevButton');
prevButton.addEventListener('click', prevSlide);

showSlide(currentSlide);

const productSlides = document.querySelectorAll('.product.slide');

productSlides.forEach(slide => {
    const buyLink = slide.querySelector('.buy-link');
    const buyText = slide.dataset.buyText;
    buyLink.textContent = buyText;
});