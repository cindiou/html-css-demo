window.onmousemove = (e) => {
  const percentage = 100 - (e.clientX / window.innerWidth) * 100;

  const sun = document.querySelector(".sun");

  sun.style.clipPath = `inset(0 ${percentage}% 0 0)`;
};
