// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Dynamic header background change on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  header.style.background = window.scrollY > 50 ? '#2575fc' : 'linear-gradient(to right, #6a11cb, #2575fc)';
});
