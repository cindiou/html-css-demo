export const str = `.pikachu .content .upPart .nose {
  width: 10px;
  height: 5px;
  border: 5px black solid;
  
  position: absolute;
  left: 50%;
  top: 200px;
  margin-left: -5px;
  border-color: black transparent transparent;
}

.pikachu .content .upPart .nose:hover {
  animation: shake 200ms infinite ease-in-out;
}

.pikachu .content .upPart .nose::after {
  content: "";
  display: block;
  height: 3px;
  width: 10px;
  border-top-right-radius: 5px 3px;
  border-top-left-radius: 5px 3px;
  background-color: #000;
  position: absolute;
  left: -5px;
  top: -8px;
}

.pikachu .content .upPart .eye {
  position: relative;
}

.pikachu .content .upPart .eye div {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #303031;
  border: 1px solid black;
  position: absolute;
  top: 180px;
  left: 50%;
  margin-left: -16px;
}

.pikachu .content .upPart .eye ::after {
  content: "";
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  left: 3px;
}

.pikachu .content .upPart .eye .left {
  transform: translateX(-100px);
}

.pikachu .content .upPart .eye .right {
  transform: translateX(100px);
}

.pikachu .content .downPart {
  width: 200px;
  height: 150px;
  position: absolute;
  left: 50%;
  top: 250px;
  margin-left: -100px;
}

.pikachu .content .downPart .dimple div {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 1px solid black;
  background-color: #ff5140;
  position: absolute;
  left: 50%;
  top: 0px;
  margin-left: -32px;
}

.pikachu .content .downPart .dimple .left {
  transform: translateX(-150px);
}

.pikachu .content .downPart .dimple .right {
  transform: translateX(150px);
}

.pikachu .content .downPart .mouth {
  position: absolute;
  width: inherit;
  height: inherit;
  overflow: hidden;
}

.pikachu .content .downPart .mouth .mouthCorner {
  position: absolute;
  z-index: -1;
}

.pikachu .content .downPart .mouth .mouthCorner div {
  width: 100px;
  height: 20px;
  background-color: #fee433;
  border: 2px solid black;
  border-top: none;
  border-right: none;
  border-bottom-left-radius: 50px 20px;
  position: absolute;
  left: 0;
  top: -20px;
  transform-origin: right top;
}

.pikachu .content .downPart .mouth .mouthCorner .left {
  transform: rotate(-15deg);
}

.pikachu .content .downPart .mouth .mouthCorner .right {
  transform: scaleX(-1) rotate(-15deg);
}

.pikachu .content .downPart .mouth .mouthUp {
  width: 150px;
  height: 500px;
  border: 1px solid black;
  border-bottom-left-radius: 75px 250px;
  border-bottom-right-radius: 75px 250px;
  background-color: #cc4143;
  z-index: -2;
  position: absolute;
  left: 25px;
  top: -380px;
  overflow: hidden;
}

.pikachu .content .downPart .mouth .mouthUp .mouthDown {
  width: 200px;
  height: 300px;
  background-color: #dd666a;
  position: absolute;
  left: -25px;
  top: 390px;
  border-top-left-radius: 100px 150px;
  border-top-right-radius: 100px 150px;
}

@keyframes shake {
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(10deg);
  }
  75% {
    transform: rotate(-10deg);
  }
}`;
