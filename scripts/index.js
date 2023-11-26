// Scroll down effect for the skills section.
document.addEventListener("DOMContentLoaded", (event) => {
  const skillsSection = document.querySelector(".skills"); // Select the skills section
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("skills--visible"); // Add class when in view
          observer.unobserve(entry.target); // Optional: Stop observing after it becomes visible
        }
      });
    },
    { threshold: 0.1 }
  ); // Trigger when 10% of the skills section is visible

  skillsSection.style.opacity = 0; // Set initial opacity to 0 for fade-in effect
  observer.observe(skillsSection); // Observe the skills section
});

// Accordion Layout javascript code for the education section
document.addEventListener("DOMContentLoaded", function () {
  const accordionButtons = document.querySelectorAll(".accordion__button");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Toggle the "active" class on the button
      this.classList.toggle("active");

      // Select the next sibling element (the accordion content)
      const accordionContent = this.nextElementSibling;

      // Check if the accordion content is currently open
      if (accordionContent.style.maxHeight) {
        // Accordion is open, so close it
        accordionContent.style.maxHeight = null;
      } else {
        // Accordion is closed, so open it
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      }
    });
  });
});
