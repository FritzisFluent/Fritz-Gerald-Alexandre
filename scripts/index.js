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
