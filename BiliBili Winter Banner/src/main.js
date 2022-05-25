const header = document.querySelector("header");

let startPoint;

header.addEventListener("mouseenter", (e) => {
  startPoint = e.clientX;
  header.classList.add("moving");
});

header.addEventListener("mouseleave", (e) => {
  header.style.setProperty("--x", 0.5);

  header.classList.remove("moving");
});

header.addEventListener("mousemove", (e) => {
  const x = (e.clientX - startPoint) / window.outerWidth + 0.5;

  header.style.setProperty("--x", x);
});
