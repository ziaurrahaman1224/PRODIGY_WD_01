// Get the navbar element
const navbar = document.getElementById('navbar');

// Add an event listener for scrolling
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
