// Handle header visibility on scroll
document.addEventListener('DOMContentLoaded', () => {
  let lastScrollTop = 0;
  const header = document.querySelector('.site-header');
  const animationDuration = 500; // Duration in milliseconds

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      // Scrolling down - hide immediately
      header.style.animation = 'hideHeader 0.5s forwards';
    } else {
      // Scrolling up - slowly hide
      header.style.animation = 'showHeader 0.5s forwards';
    }

    lastScrollTop = Math.max(0, currentScroll); // Prevent negative scroll values
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


  // Select all slideshow containers
  const slideshows = document.querySelectorAll(".slideshow");
  slideshows.forEach((slideshow) => {
    const slides = slideshow.querySelectorAll("picture");
    let currentIndex = 0;

    if (slides.length > 0) {
      // Initialize slides for this slideshow
      slides.forEach((slide, index) => {
      slide.style.opacity = index === 0 ? "1" : "0";
      slide.style.position = "absolute";
      slide.style.top = "0";
      slide.style.left = "0";
      slide.style.width = "100%";
      slide.style.height = "auto";
      });

      // Function to update container height
      const updateSlideshowHeight = () => {
        const activeSlide = slides[currentIndex].querySelector("img");
        slideshow.style.height = `${activeSlide.offsetHeight}px`;
      };

      // Initial height setup
      updateSlideshowHeight();
      window.addEventListener("resize", updateSlideshowHeight); // Adjust on window resize


      // Start the slideshow for this container
      setInterval(() => {
        const nextIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].style.opacity = "0";
        slides[nextIndex].style.opacity = "1";
        currentIndex = nextIndex;
      }, 875); // Adjust interval as needed
    }
  });


  // Cal.com
  (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "meet", {origin:"https://cal.com"});
  Cal.ns.meet("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
  

  const cards = document.querySelectorAll(".card-question");
  cards.forEach((card) => {
    const header = card.querySelector(".card-header");
    const body = card.querySelector(".card-body");

    header.addEventListener("click", () => {
      console.log('click');
      // Toggle the 'opened' class
      card.classList.toggle("opened");
    });

    // Allow keyboard accessibility for toggling
    header.addEventListener("keypress", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        card.classList.toggle("opened");
      }
    });
  });
});
