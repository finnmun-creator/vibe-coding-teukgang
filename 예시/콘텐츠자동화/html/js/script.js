document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');
  const contentSections = document.querySelectorAll('.content-section');

  // Handle navigation clicks
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('data-target');

      // Update active nav link
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');

      // Show target content section
      contentSections.forEach(section => {
        section.classList.remove('active');
        if (section.id === targetId) {
          section.classList.add('active');
        }
      });

      // Update URL hash
      window.location.hash = targetId;

      // Scroll to top of content
      if (window.innerWidth <= 768) {
        document.querySelector('.main-content').scrollIntoView({ behavior: 'smooth' });
      } else {
        document.querySelector('.main-content').scrollTop = 0;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });

  // Handle initial hash
  function handleHash() {
    const hash = window.location.hash.slice(1) || 'overview';
    const targetLink = document.querySelector(`[data-target="${hash}"]`);
    if (targetLink) {
      targetLink.click();
    }
  }

  handleHash();
  window.addEventListener('hashchange', handleHash);
});
