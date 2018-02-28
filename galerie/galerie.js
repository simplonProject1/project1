var slides = document.querySelectorAll('#owl .suite');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,3000);

function nextSlide() {
    slides[currentSlide].className = 'suite';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'suite showing';
}