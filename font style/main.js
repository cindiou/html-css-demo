const h1 = document.querySelector("h1");
console.log(h1);
h1.innerHTML = h1.textContent.replace(/\S/g, "<span>$&</span>");

document
  .querySelectorAll("span")
  .forEach((span, i) => span.style.setProperty("--delay", `${i * 0.1}s`));

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (e) => {
    h1.style.setProperty(
      "--animation",
      e.target.getAttribute("data-animation")
    );

    //JS引擎，渲染引擎，跨线程通信
    //为了避免某些无意义的跨线程通信，降低渲染频率，在一定频率内相反的操作DOM过程会被渲染引擎默认为不改变原有状态，相当于快速合并了状态前后的处理
    h1.classList.remove("animate");
    void h1.offsetHeight; //如果舍却这段代码，由于classList.add添加过快，浏览器为了提升渲染性能，默认classList.remove没有执行，
    //强迫浏览器查询DOM，Reflow操作
    h1.classList.add("animate"); //有这个class类动画才作用

    // setTimeout(() => {
    //   h1.classList.add("animate");
    // }, 0);
    // setTimeout(() => {
    //   h1.classList.remove("animate");
    // }, 4000);

    //也可以通过给最后一个span标签加animationend监听器，把class移除掉
  });
});
