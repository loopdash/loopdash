// Handle header visibility on scroll
document.addEventListener('DOMContentLoaded', () => {

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
  const elementsToObserve = [
    ...document.querySelectorAll('.reveal'), // Select all .c-animate-reveal elements
    ...document.querySelectorAll('.animated') // Select all .c-animate-trigger elements
  ];

  const video = document.querySelector(".video");
  const videoBkg = document.querySelector(".video-bkg");

  video.addEventListener("loadeddata", function () {
    video.style.display = "block"; // Instantly switch to video
    videoBkg.style.display = "none"; // Hide the placeholder image
  });

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
