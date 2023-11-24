/*  Google Translate API when the user selects a language:
document
  .getElementById("language-select")
  .addEventListener("change", function () {
    var language = this.value;
    var textToTranslate = document.querySelector(
      ".header__description"
    ).innerText;

    fetch("https://translation.googleapis.com/language/translate/v2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + YOUR_API_KEY,
      },
      body: JSON.stringify({
        q: textToTranslate,
        target: language,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        document.querySelector(".header__description").innerText =
          data.data.translations[0].translatedText;
      })
      .catch((error) => console.error(error));
  });
*/

// Scroll down effect for the about section.
window.addEventListener("scroll", function () {
  const aboutElement = document.querySelector(".about");
  if (window.scrollY > 0) {
    aboutElement.classList.add("scrolled");
  } else {
    aboutElement.classList.remove("scrolled");
  }
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
