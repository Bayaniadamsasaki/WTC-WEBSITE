document.addEventListener("DOMContentLoaded", function() {
    const wrapper = document.getElementById('carouselWrapper');
    const articles = wrapper.querySelectorAll('.card__article');
    const totalItems = articles.length;
    let currentIndex = 0;
    const interval = 3000; // Interval in milliseconds

    setInterval(() => {
      currentIndex = (currentIndex + 1) % totalItems;
      updateCarousel();
    }, interval);

    function updateCarousel() {
      const position = -currentIndex * articles[0].offsetWidth;
      wrapper.style.transform = `translateX(${position}px)`;
    }
  });