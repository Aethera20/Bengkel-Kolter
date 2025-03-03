// Toggle clas active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("hamburger-menu");

document.addEventListener("click", function (e) {
  if (hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Scroll animation functionality
const animateOnScroll = () => {
  const elements = document.querySelectorAll("h2, h3, p, ul");
  elements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    const elementBottom = el.getBoundingClientRect().bottom;
    const isVisible = elementTop < window.innerHeight && elementBottom >= 0;

    if (isVisible) {
      el.classList.add("visible");
    } else {
      el.classList.remove("visible"); // Remove class if not visible
    }
  });
};

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll); // Trigger on load to check initial visibility