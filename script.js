let currentIndex = 0;
const slides = document.querySelectorAll('.slides .slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = (i === index) ? '1' : '0';
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function startSlider() {
    showSlide(currentIndex);
    setInterval(nextSlide, 3000);
}

document.addEventListener('DOMContentLoaded', startSlider);

document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetContainer = document.getElementById(targetId);
        
        // Close all open containers
        document.querySelectorAll('.image-container').forEach(container => {
            if (container !== targetContainer) {
                container.style.display = 'none';
                container.querySelector('.see-more-link').style.display = 'none';
            }
        });
        
        // Toggle the clicked container
        if (targetContainer.style.display === 'none') {
            targetContainer.style.display = 'flex';
            targetContainer.querySelector('.see-more-link').style.display = 'block';
        } else {
            targetContainer.style.display = 'none';
            targetContainer.querySelector('.see-more-link').style.display = 'none';
        }
    });
});
// document.getElementById('reveal-button').addEventListener('click', function() {
//     document.querySelector('.image-container').style.display = 'flex';
//     document.querySelector('.see-more-link').style.display = 'block';
//     this.style.display = 'none'; // Hide the button after click
// });