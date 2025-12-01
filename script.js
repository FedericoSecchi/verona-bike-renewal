// Mobile navigation toggle
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".site-header");
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  // Header shadow / border on scroll
  function handleScroll() {
    if (!header) return;
    if (window.scrollY > 20) {
      header.classList.add("glass-header");
    } else {
      header.classList.remove("glass-header");
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  // Mobile menu toggle
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", function () {
      mobileMenu.classList.toggle("open");
      const expanded = mobileToggle.getAttribute("aria-expanded") === "true";
      mobileToggle.setAttribute("aria-expanded", expanded ? "false" : "true");
    });

    // Close mobile menu when clicking a nav link
    mobileMenu.addEventListener("click", function (event) {
      const target = event.target;
      if (target.tagName && target.tagName.toLowerCase() === "a") {
        mobileMenu.classList.remove("open");
        mobileToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Scroll animations using IntersectionObserver
  const animateElements = document.querySelectorAll(".animate-on-scroll");

  if ("IntersectionObserver" in window && animateElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    animateElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback: show all elements if IntersectionObserver is not supported
    animateElements.forEach((el) => el.classList.add("visible"));
  }

  // WhatsApp form builder for "Come richiedere" section
  const requestForm = document.getElementById("request-form");
  if (requestForm) {
    requestForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const tipoBici = requestForm.elements["tipoBici"]?.value || "";
      const usoPrincipale = requestForm.elements["usoPrincipale"]?.value || "";
      const budget = requestForm.elements["budget"]?.value || "";
      const altezza = requestForm.elements["altezza"]?.value || "";

      const message = `Ciao, sto cercando una bici ricondizionata. Tipo: ${
        tipoBici || "non specificato"
      }. Uso principale: ${
        usoPrincipale || "non specificato"
      }. Budget: ${budget || "non specificato"} euro. Altezza: ${
        altezza || "non specificata"
      }. Mi puoi dire quali bici hai disponibili oggi?`;

      const encodedMessage = encodeURIComponent(message);
      const url = `https://wa.me/393519621721?text=${encodedMessage}`;
      window.open(url, "_blank");
    });
  }
});



