// Mobile nav toggle: shows/hides the link list on small screens.
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

// Close the mobile menu after a link is tapped.
navLinks.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    document.body.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

// Keep the footer year correct without editing it by hand every year.
document.getElementById("year").textContent = new Date().getFullYear();
