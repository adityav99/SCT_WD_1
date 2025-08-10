// Change navbar style on scroll and highlight hovered items
(function() {
  const navbar = document.getElementById('navbar');
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const links = navLinks.querySelectorAll('a');

  // Toggle scrolled state
  function updateNavbar() {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }
  updateNavbar();
  window.addEventListener('scroll', updateNavbar);

  // Mobile menu toggle
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close mobile menu when a link is clicked
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });

    // Add hover/focus visual accent (accessible)
    link.addEventListener('mouseenter', () => {
      link.style.transform = 'translateY(-2px)';
    });
    link.addEventListener('mouseleave', () => {
      link.style.transform = '';
    });
    link.addEventListener('focus', () => {
      link.style.outline = '2px solid rgba(255,215,0,0.25)';
      link.style.borderRadius = '6px';
    });
    link.addEventListener('blur', () => {
      link.style.outline = '';
    });
  });
})();
