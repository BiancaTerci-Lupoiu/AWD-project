document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  const images = document.querySelectorAll('.carousel img');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  let index = 0;

  // Automatically slide images every 4 seconds
  const slideInterval = setInterval(() => {
    moveCarousel(1);
  }, 2000);

  // Function to move carousel
  function moveCarousel(direction) {
    index = (index + direction + images.length) % images.length;
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }

  // Event listeners for arrows
  leftArrow.addEventListener('click', () => {
    clearInterval(slideInterval); // Stop auto-slide on manual interaction
    moveCarousel(-1);
  });

  rightArrow.addEventListener('click', () => {
    clearInterval(slideInterval); // Stop auto-slide on manual interaction
    moveCarousel(1);
  });
});
