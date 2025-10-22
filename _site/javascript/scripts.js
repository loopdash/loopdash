// Console callout for Loopdash
console.log(`
<!--
    0000  0000000000
    0000  0000000000
    0000  0000000000
    0000        0000
    0000        0000
    0000        0000    
    0000        0000
    0000
    0000000000000000
    0000000000000000

    We help nonprofits build better websites. We're probably hiring, so email us at hello@loopdash.com
-->
`);

// CTA Modal functionality
function initCTAModal() {
  const modal = document.getElementById('cta-modal');
  const closeButton = document.getElementById('cta-modal-close');
  const backdrop = document.querySelector('.cta-modal-backdrop');
  
  if (!modal || !closeButton) return;
  
  // Check if modal was previously closed or if we should exclude this page
  if (getCookie('cta-modal-closed') === 'true') {
    return;
  }
  
  // Check if current URL should be excluded
  const currentPath = window.location.pathname;
  const excludedPaths = ['/projects', '/proposals'];
  const shouldExclude = excludedPaths.some(path => currentPath.startsWith(path));
  
  if (shouldExclude) {
    return;
  }
  
  // Show modal after 8 seconds (8000ms)
  const showModal = () => {
    modal.style.display = 'flex';
    // Trigger opacity transition
    setTimeout(() => {
      modal.style.opacity = '1';
    }, 10);
  };
  
  // Hide modal function
  const hideModal = () => {
    modal.style.opacity = '0';
    setTimeout(() => {
      modal.style.display = 'none';
    }, 300); // Match CSS transition duration
  };
  
  // Set cookie to remember modal was closed (expires in 7 days)
  const setModalClosed = () => {
    setCookie('cta-modal-closed', 'true', 7);
  };
  
  // Event listeners
  closeButton.addEventListener('click', () => {
    hideModal();
    setModalClosed();
  });
  
  backdrop.addEventListener('click', () => {
    hideModal();
    setModalClosed();
  });
  
  // Escape key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      hideModal();
      setModalClosed();
    }
  });
  
  // Show modal after delay
  setTimeout(showModal, 8000);
}

// Banner close functionality
function initBannerClose() {
  const banner = document.querySelector('.banner');
  const closeButton = document.querySelector('.banner-close');
  
  if (!banner || !closeButton) return;
  
  // Check if banner was previously closed
  if (getCookie('banner-closed') === 'true') {
    // Completely hide the banner and remove from DOM immediately
    banner.style.display = 'none';
    banner.remove();
    document.body.classList.remove('has-banner');
    return;
  }
  
  // Add fade-in animation for banner appearance
  banner.style.opacity = '0';
  banner.style.transform = 'translateY(-100%)';
  banner.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  
  // Trigger fade-in after a brief delay
  setTimeout(() => {
    banner.style.opacity = '1';
    banner.style.transform = 'translateY(0)';
  }, 100);
  
  closeButton.addEventListener('click', function() {
    // Set cookie to remember that banner was closed (expires in 30 days)
    setCookie('banner-closed', 'true', 30);
    
    // Hide the banner with a smooth transition
    banner.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    banner.style.opacity = '0';
    banner.style.transform = 'translateY(-100%)';
    
    // Remove the banner from the DOM after animation
    setTimeout(() => {
      banner.remove();
      // Remove the banner class from body to trigger CSS changes
      document.body.classList.remove('has-banner');
      
      // Adjust the site header position since banner is gone
      const siteHeader = document.querySelector('.site-header');
      if (siteHeader) {
        siteHeader.style.top = '0';
      }
      
      // Adjust the home hero padding since banner is gone
      const homeHero = document.querySelector('.home-hero');
      if (homeHero) {
        homeHero.style.paddingTop = 'calc(var(--spacing) * 33)';
      }
    }, 300);
  });
}

// Cookie utility functions
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Add IDs to headings for table of contents
function addHeadingIds() {
  const headings = document.querySelectorAll('h2, h3, h4, h5, h6');
  headings.forEach(heading => {
    if (!heading.id) {
      const text = heading.textContent.trim();
      const id = text.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
      heading.id = id;
    }
  });
}

// Generate table of contents
function generateTableOfContents() {
  const tocList = document.getElementById('toc-list');
  if (!tocList) return;
  
  const headings = document.querySelectorAll('h2');
  
  if (headings.length === 0) {
    tocList.closest('.table-of-contents').style.display = 'none';
    return;
  }
  
  headings.forEach(heading => {
    const text = heading.textContent.trim();
    const id = text.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    
    heading.id = id;
    
    // Remove numbers from the display text
    const displayText = text.replace(/^\d+\.\s*/, '');
    
    const li = document.createElement('li');
    li.className = 'toc-item';
    
    const a = document.createElement('a');
    a.href = '#' + id;
    a.className = 'toc-link';
    a.textContent = displayText;
    
    li.appendChild(a);
    tocList.appendChild(li);
  });
}

// Handle table of contents scroll positioning
function handleTableOfContentsScroll() {
  const toc = document.querySelector('.table-of-contents');
  if (!toc) return;
  
  const blogHero = document.querySelector('.blog-hero');
  if (!blogHero) return;
  
  let isFixed = false;
  let ticking = false;
  
  function updateTocPosition() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const heroBottom = blogHero.offsetTop + blogHero.offsetHeight;
    
    // Check if we should make the TOC fixed
    if (scrollTop > heroBottom && !isFixed) {
      // Make TOC fixed
      toc.classList.add('fixed');
      isFixed = true;
    } else if (scrollTop <= heroBottom && isFixed) {
      // Remove fixed positioning
      toc.classList.remove('fixed');
      isFixed = false;
    }
    
    ticking = false;
  }
  
  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateTocPosition);
      ticking = true;
    }
  }
  
  // Initial check
  updateTocPosition();
  
  // Listen for scroll events with throttling
  window.addEventListener('scroll', requestTick);
  
  // Listen for resize events to recalculate positioning
  window.addEventListener('resize', requestTick);
}

// Handle header visibility on scroll
document.addEventListener('DOMContentLoaded', () => {
  // Check if banner is present and add class to body
  const banner = document.querySelector('.banner');
  if (banner) {
    // Only add the class if banner is not hidden by cookie
    if (getCookie('banner-closed') !== 'true') {
      document.body.classList.add('has-banner');
    } else {
      // If banner should be hidden, ensure it's completely hidden from the start
      banner.style.display = 'none';
    }
  }
  
  // Initialize banner close functionality
  initBannerClose();
  
  // Initialize CTA modal
  initCTAModal();
  
  // Add IDs to headings for table of contents
  addHeadingIds();
  
  // Generate table of contents
  generateTableOfContents();
  
  // Handle table of contents scroll positioning
  handleTableOfContentsScroll();

  // Initialize fullPage.js only when present and when #fullpage exists
  try {
    if (typeof window.fullpage !== 'undefined' && document.querySelector('#fullpage')) {
      new fullpage('#fullpage', {
        autoScrolling: true,
        scrollingSpeed: 600,
        navigation: false
      });
    }
  } catch (e) {
    console.warn('fullPage initialization skipped:', e);
  }
  
  // Navigation
  const menuToggle = document.querySelector('.menu-toggle');
  const body = document.querySelector('body');
  window.addEventListener('load', () => {
    body.classList.remove('nav-opened');
  });
  window.addEventListener('pageshow', () => {
    body.classList.remove('nav-opened');
  });
  menuToggle.addEventListener('click', () => {
    body.classList.toggle('nav-opened');
  });

  let lastScrollTop = 6;
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


  // Select all elements with .c-animate-reveal and .c-animate-trigger classes
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

  const elementsToObserve = [
    ...document.querySelectorAll('.reveal'), // Select all .c-animate-reveal elements
    ...document.querySelectorAll('.animated') // Select all .c-animate-trigger elements
  ];

  elementsToObserve.forEach((element) => {
    projectObserver.observe(element);
  });

  const video = document.querySelector(".video");
  const videoBkg = document.querySelector(".video-bkg");

  if (video) {
    video.addEventListener("canplay", function () {
      video.style.display = "block"; // Instantly switch to video
      if (videoBkg) videoBkg.style.display = "none"; // Hide the placeholder image if it exists
    });
  } else {
    console.warn("Video element not found.");
  }

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


  // Testimonial Carousel
  function initTestimonialCarousel() {
    const carousel = document.querySelector('.testimonial-carousel');
    if (!carousel) return;
    
    const slides = carousel.querySelectorAll('.testimonial-slide');
    if (slides.length <= 1) return;
    
    let currentIndex = 0;
    const intervalTime = 4000; // 4 seconds per slide
    
    function showSlide(index) {
      // Remove active class from all slides
      slides.forEach(slide => slide.classList.remove('active'));
      
      // Add active class to current slide
      slides[index].classList.add('active');
    }
    
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
    
    // Initialize with first slide
    showSlide(0);
    
    // Start the carousel
    setInterval(nextSlide, intervalTime);
  }
  
  // Initialize testimonial carousel
  initTestimonialCarousel();

  // Cal.com
  (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "meet", {origin:"https://cal.com"});
  Cal.ns.meet("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
  

  // FAQ accordion functionality - works on both FAQ page and homepage
  const cards = document.querySelectorAll(".card-question");
  cards.forEach((card) => {
    const header = card.querySelector(".card-header");
    const body = card.querySelector(".card-body");

    header.addEventListener("click", (e) => {
      e.preventDefault();
      
      const isOpen = card.classList.contains("opened");
      
      // Close all other FAQ items (accordion behavior)
      document.querySelectorAll(".card-question").forEach(item => {
        item.classList.remove("opened");
      });
      
      // Toggle current item
      if (!isOpen) {
        card.classList.add("opened");
      }
    });

    // Allow keyboard accessibility for toggling
    header.addEventListener("keypress", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        header.click();
      }
    });
  });

  // Handle hash in URL to open specific FAQ (from working FAQ page)
  const currentHash = window.location.hash;
  const articles = document.querySelectorAll('article');

  articles.forEach(article => {
    if (article.dataset.id === currentHash) {
      article.classList.add('opened');
    }
  });

  // Check if the current page is /support or /support/
  if (
    window.location.pathname === '/support' || 
    window.location.pathname === '/support/' ||
    window.location.pathname.endsWith('/support') || // For local testing paths
    window.location.pathname.endsWith('/support/')   // For local testing paths
  ) {
    const form = document.getElementById('contactForm');

    if (form) {
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const details = document.getElementById('details');

      const nameError = document.getElementById('nameError');
      const emailError = document.getElementById('emailError');
      const detailsError = document.getElementById('detailsError');

      // Helper function to check if a value is null, undefined, or empty
      function isEmpty(value) {
        return value === null || value === undefined || value.trim() === '';
      }

      // Helper function for showing errors
      function showError(input, errorElement, message) {
        if (isEmpty(input.value)) {
          errorElement.textContent = message;
          errorElement.style.display = 'block';
        } else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) {
          errorElement.textContent = 'Please enter a valid email.';
          errorElement.style.display = 'block';
        } else {
          errorElement.style.display = 'none';
        }
      }

      // Add blur event listeners to fields
      name.addEventListener('blur', () => {
        showError(name, nameError, 'Name is required.');
      });

      email.addEventListener('blur', () => {
        showError(email, emailError, 'Email is required.');
      });

      details.addEventListener('blur', () => {
        showError(details, detailsError, 'Details are required.');
      });

      // Add submit event listener to the form
      form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        let isValid = true;

        // Validate fields on submit
        showError(name, nameError, 'Name is required.');
        if (isEmpty(name.value)) isValid = false;

        showError(email, emailError, 'Email is required.');
        if (isEmpty(email.value) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) isValid = false;

        showError(details, detailsError, 'Details are required.');
        if (isEmpty(details.value)) isValid = false;

        // If the form is valid, submit it
        if (isValid) {
          form.submit();
        }
      });
    }
  }


async function checkServerStatus() {
    try {
        // Fetch server status from the API
        const response = await fetch('https://api.loopda.sh/get-server-status');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Parse the response and check the server status
        const isDown = data?.data?.isDown;
        const message = data?.data?.message || "Unknown status";

        // Get the server-status div and server-status-tag elements
        const serverStatusDiv = document.querySelector(".server-status");
        const statusTag = document.getElementById("server-status-tag");

        if (serverStatusDiv && statusTag) {
            // Remove any previous status classes
            serverStatusDiv.classList.remove('server-status-up', 'server-status-down', 'server-status-error');

            // Update the content and apply the appropriate class
            if (isDown) {
                statusTag.textContent = "Some servers down.";
                serverStatusDiv.classList.add("server-status-down");
            } else {
                statusTag.textContent = "All servers up.";
                serverStatusDiv.classList.add("server-status-up");
            }
        }
    } catch (error) {
        console.error("Error fetching server status:", error);
        // Get the server-status div and server-status-tag elements
        const serverStatusDiv = document.querySelector(".server-status");
        const statusTag = document.getElementById("server-status-tag");

        if (serverStatusDiv && statusTag) {
            // Remove any previous status classes
            serverStatusDiv.classList.remove('server-status-up', 'server-status-down', 'server-status-error');

            // Update the text and apply the error class
            statusTag.textContent = "Error fetching server status.";
            serverStatusDiv.classList.add("server-status-error");
        }
    }
}

// Call the function to check server status
checkServerStatus();

// Function to handle the copy action and modal display
function handleCopyAndShowModal(event) {
  const button = event.currentTarget;

  // Get the data-url attribute
  const urlToCopy = button.getAttribute('data-url');
  console.log(urlToCopy);

  // Use the Clipboard API to copy the URL
  navigator.clipboard.writeText(urlToCopy)
    .then(() => {
      // Display the modal after successful copy
      const title = button.getAttribute('data-title');
      const subText = button.getAttribute('data-subtext');
      window.showStateModal('.state-modal', title, subText);
    })
    .catch(err => {
      console.error('Failed to copy text: ', err);
    });
}

  // Attach click event to buttons with ID or class
  document.querySelectorAll('#copy-link').forEach(button => {
    button.addEventListener('click', handleCopyAndShowModal);
  });

function rotateElement(selector) {
  const elements = document.querySelectorAll(selector);
  if (!elements.length) {
    console.error("No elements found with selector:", selector);
    return;
  }

  let rotations = [2, -2, 3, -4, 3, 0]; // Define shake sequence

  elements.forEach((element) => {
    let index = 0;

    function applyRotation() {
      if (index >= rotations.length) {
        return; // Stop when all rotations are applied
      }

      element.style.transform = `rotate(${rotations[index]}deg)`;
      index++;
      setTimeout(applyRotation, 200); // Apply each shake with a delay
    }

    // Initial delay before the first shake (wait 2 seconds)
    setTimeout(() => {
      applyRotation();
      setInterval(() => {
        index = 0;
        applyRotation();
      }, 6000); // Repeat shake every 6 seconds
    }, 2000);
  });
}

// Call the function with the class selector
  rotateElement(".shake");


  // footer bounce
  const footer = document.querySelector(".site-footer");
  const shreds = document.querySelectorAll(".shred");
  let lastScrollY = window.scrollY;
  let lastTimestamp = Date.now();
  let hasBounced = false; // Prevents bounce from happening repeatedly

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    const currentTimestamp = Date.now();
    const timeDiff = currentTimestamp - lastTimestamp || 16; // Avoid division by zero

    let scrollSpeed = (currentScrollY - lastScrollY) / timeDiff; // Measure downward velocity
    lastScrollY = currentScrollY;
    lastTimestamp = currentTimestamp;

    const footerRect = footer.getBoundingClientRect();

    // Only trigger if scrolling down FAST and hitting the bottom of the footer
    if ((footerRect.bottom - 2) <= window.innerHeight && scrollSpeed > 0.4 && !hasBounced) {
      triggerBounce(scrollSpeed);
    }

    // Reset bounce trigger when scrolling back up
    if (currentScrollY < lastScrollY) {
      hasBounced = false;
    }
  });

  function triggerBounce(velocity) {
    shreds.forEach((shred) => {
      const velocityMultiplier = Math.min(Math.max(velocity * 8.5, 1), 6); // Control bounce intensity
      const bounceHeight = velocityMultiplier * 13 + 39; // Bounce height (10px to 30px)
      const rotationAmount = (Math.random() * 4 + 49) * (Math.random() < 0.5 ? -1 : 1); // Rotate 2-6 degrees randomly left or right
      const duration = Math.max(250 - velocity * 30, 150); // Faster animation if scroll speed is higher

      requestAnimationFrame(() => {
        shred.style.transform = `translateY(-${bounceHeight}px) rotate(${rotationAmount}deg)`;
        shred.style.transition = `transform ${duration}ms ease-out`;

        setTimeout(() => {
          shred.style.transform = `translateY(0) rotate(0deg)`;
          shred.style.transition = `transform ${duration}ms ease-in`;
        }, duration);
      });
    });
  }

    // Team Extension Stacked Carousel
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
      const carouselItems = carouselContainer.querySelectorAll('.carousel-item');
      let currentIndex = 0;
      
      function updateCarousel() {
        // Remove all classes from all items
        carouselItems.forEach(item => {
          item.classList.remove('active', 'prev', 'next', 'hidden');
        });
        
        // Add appropriate classes based on position
        carouselItems.forEach((item, index) => {
          const relativeIndex = (index - currentIndex + carouselItems.length) % carouselItems.length;
          
          if (relativeIndex === 0) {
            item.classList.add('active');
          } else if (relativeIndex === 1) {
            item.classList.add('prev');
          } else if (relativeIndex === 2) {
            item.classList.add('next');
          } else {
            item.classList.add('hidden');
          }
        });
      }
      
      function moveToNext() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel();
      }
      
      // Initialize carousel
      updateCarousel();
      
      // Start the carousel with 5-second intervals
      setInterval(moveToNext, 5000);
    }

    // Carousel
    const track = document.querySelector('.carousel-track');
    if (track) {
      const images = Array.from(track.children);
      const imageWidth = images[0].getBoundingClientRect().width;
    
      let currentIndex = 0;
    
      function moveToNextImage() {
          currentIndex = (currentIndex + 1) % images.length;
          track.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
      }
    
      setInterval(moveToNextImage, 2000);
    }
  
  // GSAP Notifications Scroll/Observer sequence
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && typeof Observer !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, Observer);

    // constants
    let allowScroll = true; // sometimes we want to ignore scroll-related stuff, like when an Observer-based section is transitioning.
    let scrollTimeout = gsap.delayedCall(0.3, () => (allowScroll = true)).pause(); // controls how long we should wait after an Observer-based animation is initiated before we allow another scroll-related action
    const time = 0.25; // animation duration (faster)
    let animating = false; // state

    // Ensure notifications are stacked on top of each other
    const notificationsWrapper = document.querySelector('.notifications');
    if (notificationsWrapper) {
      notificationsWrapper.style.position = 'relative';
      notificationsWrapper.style.overflow = 'hidden';
      const notificationItems = notificationsWrapper.querySelectorAll('.notification');
      notificationItems.forEach((el, i) => {
        el.style.position = 'absolute';
        el.style.left = '0';
        el.style.right = '0';
        el.style.top = '0';
        el.style.width = '100%';
        // Neutral base stacking; timeline will manage which item is on top
        el.style.zIndex = '1';
      });
      // Set container height to the first item's height so layout doesn't collapse
      const first = notificationItems[0];
      if (first) notificationsWrapper.style.height = first.offsetHeight + 'px';
    }

    // Progressive enhancement: initial offsets for subtle layering
    gsap.set(".notification", {
      y: (index) => 14 * index,
      transformOrigin: "center top"
    });

    //--------------------------------//
    // The timeline
    //--------------------------------//
    const tl = gsap.timeline({
      paused: true
    });

    tl.add("notification2");
    tl.to(".notification:nth-child(1)", {
      scale: 0.85,
      duration: time,
      ease: "power2.out"
    });
    // Demote previous, promote next so it fully covers
    tl.set(".notification:nth-child(1)", { zIndex: 1 });
    tl.set(".notification:nth-child(2)", { zIndex: 100 });
    tl.from(
      ".notification:nth-child(2)",
      {
        y: () => window.innerHeight,
        duration: time,
        ease: "power2.out"
      },
      "<"
    );

    tl.add("notification3");
    tl.to(".notification:nth-child(2)", {
      scale: 0.9,
      duration: time,
      ease: "power2.out"
    });
    // Demote previous, promote next so it fully covers
    tl.set(".notification:nth-child(2)", { zIndex: 1 });
    tl.set(".notification:nth-child(3)", { zIndex: 100 });
    tl.from(
      ".notification:nth-child(3)",
      {
        y: () => window.innerHeight,
        duration: time,
        ease: "power2.out"
      },
      "<"
    );

    tl.add("notification4");
    tl.to(".notification:nth-child(3)", {
      scale: 0.95,
      duration: time,
      ease: "power2.out"
    });
    // Demote previous, promote next so it fully covers
    tl.set(".notification:nth-child(3)", { zIndex: 1 });
    tl.set(".notification:nth-child(4)", { zIndex: 100 });
    tl.from(
      ".notification:nth-child(4)",
      {
        y: () => window.innerHeight,
        duration: time,
        ease: "power2.out"
      },
      "<"
    );
    tl.add("notification5");
    // END The timeline --------------//

    function tweenToLabel(direction, isScrollingDown) {
      if (
        (!tl.nextLabel() && isScrollingDown) ||
        (!tl.previousLabel() && !isScrollingDown)
      ) {
        notificationsObserver.disable(); // resume native scroll
        return;
      }
      if (!animating && direction) {
        // Check if we're already animating
        animating = true;
        tl.tweenTo(direction, { onComplete: () => (animating = false) });
      }
    }

    //--------------------------------//
    // Observer plugin
    //--------------------------------//
    const notificationsObserver = Observer.create({
      // type: "wheel,touch,pointer",
      wheelSpeed: -1, // increase scroll sensitivity
      onDown: (self) => tweenToLabel(tl.previousLabel(), false),
      onUp: (self) => tweenToLabel(tl.nextLabel(), true),
      tolerance: 2,
      preventDefault: true,
      onEnable(self) {
        allowScroll = false;
        scrollTimeout.restart(true);
        // when enabling, we should save the scroll position and freeze it. This fixes momentum-scroll on Macs, for example.
        let savedScroll = self.scrollY();
        self._restoreScroll = () => self.scrollY(savedScroll); // if the native scroll repositions, force it back to where it should be
        document.addEventListener("scroll", self._restoreScroll, {
          passive: false
        });
      },
      onDisable: (self) =>
        document.removeEventListener("scroll", self._restoreScroll)
    });

    notificationsObserver.disable(); // Disable on page load
    // END Observer plugin --------------//

    //--------------------------------//
    // ScrollTrigger that disables the scroll and has the Observer plugin take over
    //--------------------------------//
    ScrollTrigger.create({
      id: "STOP-SCROLL",
      trigger: ".notifications-section",
      pin: true,
      start: "top 50%", // start higher so content remains in frame
      markers: false,
      end: "+=0",
      pinSpacing: false, // prevent downward shift at the end
      onEnter: (self) => {
        if (notificationsObserver.isEnabled) return;
        notificationsObserver.enable(); // STOP native scrolling
      },
      onEnterBack: (self) => {
        if (notificationsObserver.isEnabled) return;
        notificationsObserver.enable(); // STOP native scrolling
      }
    });
  }
});

window.showStateModal = function (modalSelector, titleText, subText) {
  const modal = document.querySelector(modalSelector);

  if (!modal) {
    console.error(`Modal with selector "${modalSelector}" not found.`);
    return;
  }

  const titleElement = modal.querySelector('#modal-title');
  const subTextElement = modal.querySelector('#modal-subtext');

  if (titleElement) titleElement.textContent = titleText;
  if (subTextElement) subTextElement.textContent = subText;

  modal.style.display = 'block';
  setTimeout(() => {
    modal.style.opacity = '1'; 
  }, 10);

  const autoHideTimeout = setTimeout(() => {
    fadeOutModal();
  }, 7000);

  function fadeOutModal() {
    modal.style.transition = 'opacity 0.5s ease';
    modal.style.opacity = '0';
    setTimeout(() => {
      modal.style.display = 'none';
    }, 500);
  }

  const closeButton = modal.querySelector('.close-button');
  if (closeButton) {
    closeButton.addEventListener('click', () => {
      clearTimeout(autoHideTimeout);
      fadeOutModal();
    });
  }
};
