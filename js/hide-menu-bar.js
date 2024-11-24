const burger = document.getElementById("burger");
const menuPanel = document.getElementById("menu-panel-id");
const closeBtn = document.getElementById("btn-close");
const navLinks = document.querySelectorAll(".nav-link");

// Toggle the menu panel when the burger icon is clicked
burger.addEventListener("click", () => {
  menuPanel.classList.toggle("active");
});

// Close the menu panel when the close button is clicked
closeBtn.addEventListener("click", () => {
  menuPanel.classList.remove("active");
});

// Hide the menu panel and scroll to the section when a nav link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor link behavior

    // Hide the menu panel when a link is clicked
    menuPanel.classList.remove("active");

    // Get the target section from the href attribute of the clicked link
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    // Scroll smoothly to the target section
    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
