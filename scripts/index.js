// ES6+ syntax and modular organization

// Hamburger Menu Toggle
const toggleHamburgerMenu = () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    hamburger.innerHTML = navMenu.classList.contains("show")
      ? '<i class="fas fa-times"></i>' // X icon
      : '<i class="fas fa-bars"></i>'; // Hamburger icon
  });
};

// Slide-in Effect for Languages Section
const slideInLanguages = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("slideIn", entry.isIntersecting);
    });
  });

  document.querySelectorAll(".language").forEach((language) => {
    observer.observe(language);
  });
};

// Scroll Down Effect for Skills Section
const scrollDownSkills = () => {
  const skillsSection = document.querySelector(".skills");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("skills--visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  skillsSection.style.opacity = 0;
  observer.observe(skillsSection);
};

// Accordion Layout for Education Section
const setupAccordion = () => {
  document.querySelectorAll(".accordion__button").forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("active");
      const accordionContent = button.nextElementSibling;
      accordionContent.style.maxHeight = accordionContent.style.maxHeight
        ? null
        : `${accordionContent.scrollHeight}px`;
    });
  });
};

// Language Switcher Functionality
const setupLanguageSwitcher = () => {
  const selectElement = document.getElementById("language-select");

  selectElement.addEventListener("change", (event) => {
    const newLanguage = event.target.value;
    console.log("Update content to:", newLanguage);
    // Implementation to update the DOM elements with new language content goes here
  });
};

// Initialization Function
const initialize = () => {
  document.addEventListener("DOMContentLoaded", () => {
    toggleHamburgerMenu();
    slideInLanguages();
    scrollDownSkills();
    setupAccordion();
    setupLanguageSwitcher();
  });
};

initialize();
