const slides = document.querySelectorAll('.image-card');
let currentIndex = 0;
slides[0].classList.add('active');

function moveSlide(direction) {
    const moveIndex = currentIndex + direction;
    if (moveIndex < 0 || moveIndex > 4) {
        return;
    }
    slides[currentIndex].classList.remove('active');
    currentIndex = moveIndex;
    slides[currentIndex].classList.add('active');
}