// Handle header visibility on scroll
document.addEventListener('DOMContentLoaded', () => {
  let lastScrollTop = 0;
  const header = document.querySelector('.site-header');
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        // Toggle 'no-sticky' class based on scroll direction
        if (currentScroll > lastScrollTop) {
          header.classList.add('no-sticky'); // Scrolling down
        } else {
          header.classList.remove('no-sticky'); // Scrolling up
        }

        lastScrollTop = Math.max(0, currentScroll); // Prevent negative scroll values
        ticking = false;
      });

      ticking = true;
    }
  });

  // Observe elements and add 'visible' class when in viewport
  const bgImages = document.querySelectorAll('.project');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Mark element as visible
        observer.unobserve(entry.target); // Stop observing once visible
      }
    });
  });

  bgImages.forEach((bgImage) => observer.observe(bgImage));
});
