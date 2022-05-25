const canvas = document.querySelector("canvas");
// console.log(canvas);

canvas.style.display = "block"; //类似于图片，转换为块状，防止高度上滑动
// canvas.style.border = "1px solid red";

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight; //必须初始时就设置好宽高，防止后期缩放比例，造成边界羽化

const context = canvas.getContext("2d");
context.lineCap = "round";
context.lineJoin = "round";
context.strokeStyle = "red";
context.lineWidth = "10"; //不需要带单位

let preCoords; //上一次的坐标

const isInTouch = "ontouchstart" in document.documentElement;
// console.log(isInTouch);

const drawLine = (coords, x, y) => {
  context.beginPath();
  context.moveTo(coords[0], coords[1]);
  context.lineTo(x, y);
  context.stroke();
};

if (isInTouch) {
  canvas.ontouchstart = (e) => {
    const p = e.touches[0];
    // console.log(p.clientX, p.clientY);

    preCoords = [p.clientX, p.clientY];
  };

  canvas.ontouchmove = (e) => {
    const p = e.touches[0];
    // console.log(p);
    drawLine(preCoords, p.clientX, p.clientY);
    preCoords = [e.clientX, e.clientY];
  };
} else {
  let isPainting = false;

  canvas.onmousedown = (e) => {
    isPainting = true;
    preCoords = [e.clientX, e.clientY];
  };

  canvas.onmousemove = (e) => {
    if (isPainting) {
      drawLine(preCoords, e.clientX, e.clientY);
      preCoords = [e.clientX, e.clientY];
    }
  };

  canvas.onmouseup = () => {
    isPainting = false;
  };
}
