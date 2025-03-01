// SCROLL TO TOP
const scrollToTopButton = document.querySelector('.scroll-to-top');
// Add click event listener to scroll-to-top button
scrollToTopButton.addEventListener('click', function () {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Show or hide the scroll-to-top button based on the scroll position
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 0) {
        scrollToTopButton.style.display = 'grid';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// MODAL SHOWING MORE INFO
// JavaScript to handle modal open and close
const modal = document.getElementById('myModal');

    function openModal() {
      modal.style.display = 'flex';
    }

    function closeModal() {
      modal.style.display = 'none';
    }

    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });