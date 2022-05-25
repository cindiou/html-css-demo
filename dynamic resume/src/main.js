const style = document.querySelector("#dress");
const text = document.querySelector(".text");
const TaiJi = document.querySelector(".TaiJi");

const article = `你好，我叫小宇，刚学前端不久，是一位前端萌新；
今天让大家看看我刚学的前端特效，你一定会感觉到有趣的；
首先，先介绍一下，我接下来要做的的事情；
我将动态地展示如何在页面中创建一个太极八卦图；
易经有云：“易有太极，是生两仪”；

1.先创建一个浑圆如一的圆容纳两仪，是为万物起始；
^.TaiJi{
    border: 1px solid gray;
    width: 240px;
    height: 240px;
    background: gray;
    border-radius: 50%;
    background-image: linear-gradient(
      to right,
      white 0%,
      white 50%,
      black 50%,
      black 100%
    );}
$
2.创建阴阳鱼
^.TaiJi::before{
    content:'';
    display:block;
    width:50%;
    height:50%;
    background-color:black;
    border-radius:50%;
    position:absolute;
    left:50%;
    top:0;
    transform:translateX(-50%)
}

.TaiJi::after{
    content:'';
    display:block;
    width:50%;
    height:50%;
    background-color:white;
    border-radius:50%;
    position:absolute;
    bottom:0;
    left:50%;
    transform:translateX(-50%)
}
$
3.创建阴阳鱼眼
^.TaiJi::before{
    background-image:radial-gradient(
        white 0%,
        white 16.5%,
        black 16.5%,
        black 100%)
}

.TaiJi::after{
    background-image:radial-gradient(
        black 0%,
        black 16.5%,
        white 16.5%,
        white 100%)
}
$
4.添加动画效果与暂停效果
^.TaiJi{
    animation:rotate 6s Infinite linear;
}
.TaiJi:hover{
    animation-play-state:paused;
}
$
`;
let index = 0,
  isInCode = false,
  pre = null,
  code = null;

const step = () => {
  setTimeout(() => {
    const curChar = article[index];
    if (curChar === "\n" && !isInCode) {
      text.innerHTML += "<br>";
    } else if (curChar === "$") {
      isInCode = false;
      pre = code = null;
    } else if (curChar === "^") {
      isInCode = true;
      pre = document.createElement("pre");
      code = document.createElement("code");
      //   pre.style.display = "inline-block";
      pre.appendChild(code);
      text.appendChild(pre);
    } else if (isInCode) {
      code.innerHTML += curChar;
      style.innerHTML += curChar;
    } else {
      text.innerHTML += curChar;
    }

    window.scrollTo(0, 9999);
    if (index < article.length - 1) {
      step();
      index++;
    }
  }, 0);
};

step();
