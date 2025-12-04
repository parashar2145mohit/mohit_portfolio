// Mobile Menu
const nav = document.getElementById("nav");
document.getElementById("menuBtn").onclick = () => nav.classList.toggle("show");

// Dark Mode
const darkToggle = document.getElementById("darkToggle");
darkToggle.onclick = () => {
  document.body.classList.toggle("dark");
  darkToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
};

// Scroll Animation
const elements = document.querySelectorAll(".fade");
window.addEventListener("scroll", () => {
  elements.forEach(el => {
    if(el.getBoundingClientRect().top < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
});
