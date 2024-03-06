const slides = document.querySelector('.slides');
const slideWidth = document.querySelector('.slide').clientWidth;
let currentIndex = 0;

function slideTo(index) {
    currentIndex = index;
    slides.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

document.querySelectorAll('.radio-buttons input[type="radio"]').forEach((radio, index) => {
    radio.addEventListener('change', () => {
        slideTo(index);
    });
});

// Auto slide (optional)
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.children.length;
    document.getElementById(`radio${currentIndex + 1}`).checked = true;
    slideTo(currentIndex);
}, 3000); // Change slide every 3 seconds
