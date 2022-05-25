import { str } from "./data.js";

const style = document.querySelector("#style");

const desc = document.querySelector("#description");

let n = 1,
  timer,
  speed = 50;

const step = function (speed) {
  timer = setInterval(() => {
    if (n > str.length) {
      return;
    }
    // s += str[n++];

    style.innerHTML = str.slice(0, n);
    desc.innerText = str.slice(0, n);
    n++;
    desc.scrollTop = desc.scrollHeight;

    // step(speed);
  }, speed);
};

step(speed);

btnPause.onclick = () => {
  //   clearTimeout(timer);
  clearInterval(timer);

  alert("Pause!");
};

btnPlay.onclick = () => {
  //   clearTimeout(timer);
  clearInterval(timer);
  step(speed);

  alert("Play!");
};

btnNormal.onclick = () => {
  alert("正常！");
  speed = 50;
  //   clearTimeout(timer);
  clearInterval(timer);
  step(speed);
};

btnFast.onclick = () => {
  alert("快速！");
  speed = 0;
  //   clearTimeout(timer);
  clearInterval(timer);
  step(speed);
};

btnSlow.onclick = () => {
  alert("慢速！");
  speed = 200;
  //   clearTimeout(timer);
  clearInterval(timer);
  step(speed);
};
