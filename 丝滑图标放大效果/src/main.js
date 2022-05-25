const lis = document.querySelectorAll(".dock li");

let count = 0;

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    // console.log("click");
    e.currentTarget.classList.add("loading");
  });

  li.addEventListener("mouseover", (e) => {
    const item = e.target;
    // alert(item);
    const itemRect = item.getBoundingClientRect();

    const scale = Math.abs(itemRect.left - e.clientX) / itemRect.width;

    const prev = item.previousElementSibling || null;

    const next = item.nextElementSibling || null;

    resetScale(); //重置上次移动后的图标大小

    //图标大小从左至右先递增后递减
    const factor = 0.6;
    if (prev) {
      //   console.log(count++, "left is magnify");
      prev.style.setProperty("--scale", 1 + factor * Math.abs(scale - 1));
      //   void prev.clientHeight;
    }

    item.style.setProperty("--scale", 1 + factor);

    if (next) {
      //   console.log(count++, "right is magnify");
      next.style.setProperty("--scale", 1 + factor * scale);
      //   void next.clientHeight;
    }
  });
});

//鼠标不在导航栏时，移开
document.querySelector(".dock").addEventListener("mouseleave", (e) => {
  resetScale();
});

function resetScale() {
  lis.forEach((li) => {
    li.style.setProperty("--scale", 1.0);
  });
}
