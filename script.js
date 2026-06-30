// Novalux Website JavaScript

console.log("Welcome to Novalux Herbal Care");

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Welcome Alert
window.onload = function () {
  console.log("Novalux Website Loaded Successfully");
};