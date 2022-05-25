window.onscroll = function (e) {
  const noStickyOffset = document.documentElement.clientHeight * 2;

  /* const scrolled =
    document.documentElement.scrollTop /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight); */
  const scrolled = document.documentElement.scrollTop / noStickyOffset;

  // console.log(scrolled);
  const white = document.querySelector(".white");
  const red = document.querySelector(".red");
  const stickyContainer = document.querySelector(".sticky-container");

  white.style.clipPath = `inset(${((0.5 - scrolled) / 0.5) * 100}% 0 0 0)`;
  red.style.clipPath = `inset(${((1 - scrolled) / 0.5) * 100}% 0 0 0`;

  /*   if (scrolled >= 1) {
    stickyContainer.classList.add("no-sticky");
  } else {
    stickyContainer.classList.remove("no-sticky");
  } */
  stickyContainer.classList.toggle("no-sticky", scrolled >= 1);
};
