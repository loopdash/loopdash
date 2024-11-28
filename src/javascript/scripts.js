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

 // Observe images inside the .project-wrapper container and add 'visible' class when in viewport
  const images = document.querySelectorAll('.c-animate-reveal');  // Select all images inside .project-wrapper
  const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Add 'visible' class when image is in viewport
        projectObserver.unobserve(entry.target); // Stop observing the image after it becomes visible
      }
    });
  }, {
    threshold: 0.1 // Adjust the threshold to control when the image is considered "in view" (0.1 means 10% of the image is in view)
  });

  // Start observing each image
  images.forEach((image) => {
    projectObserver.observe(image);
  });
});
