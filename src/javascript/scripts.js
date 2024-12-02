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

  // Select all elements with .c-animate-reveal and .c-animate-trigger classes
  const elementsToObserve = [
    ...document.querySelectorAll('.reveal'), // Select all .c-animate-reveal elements
    ...document.querySelectorAll('.animated') // Select all .c-animate-trigger elements
  ];

  const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Add 'visible' class when the element is in viewport
        projectObserver.unobserve(entry.target); // Stop observing the element after it becomes visible
      }
    });
  }, {
    threshold: 0.1 // Adjust the threshold as needed
  });

  // Observe each matching element
  elementsToObserve.forEach((element) => {
    projectObserver.observe(element);
  });


  // Cal.com
  (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "meet", {origin:"https://cal.com"});
  Cal.ns.meet("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
  
});
