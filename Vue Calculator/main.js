new Vue({
  el: "#app",
  data: {
    equation: "0",
    //小数点个数
    isDecimalAdded: false,
    //是否点击运算符
    isOperatedAdded: false,
    //判断是否开始输入数字
    isStarted: false,
  },
  methods: {
    //检测运算符类型
    isOperator(char) {
      return ["+", "-", "×", "÷"].includes(char);
    },
    //判断是否按下，运算符与数字
    append(char) {
      if (this.equation === "0" && !this.isOperator(char)) {
        if (char === ".") {
          this.equation += ".";

          //标记小数点已经添加
          this.isDecimalAdded = true;
        } else {
          this.equation = "" + char;
        }

        //初始数字已添加
        this.isStarted = true;
        return;
      }

      //初始状态以改变，equation非零；
      //此时输入的仍是数字
      if (!this.isOperator(char)) {
        if (char === "." && this.isDecimalAdded) return;

        if (char === ".") {
          this.isDecimalAdded = true;

          //避免输入小数点之后直接输入运算符号
          this.isOperatedAdded = true;
        } else {
          this.isOperatedAdded = false;
        }

        this.equation += "" + char;
      }

      //判读是否是进行运算
      if (this.isOperator(char)) {
        if (this.isOperatedAdded) return;

        this.equation += "" + char;
        this.isDecimalAdded = false;
        this.isOperatedAdded = true;
      }
    },
    //点击=
    calculate() {
      const result = this.equation
        .replace(new RegExp("×", "g"), "*")
        .replace(new RegExp("÷", "g"), "/");

      this.equation = parseFloat(eval(result).toFixed(9)).toString();

      if (this.equation.indexOf(".") === -1) {
        this.isDecimalAdded = false;
        this.isOperatedAdded = false;
      }
    },
    //点击+-
    calculateToogle() {
      if (this.isOperatedAdded || !this.isStarted) {
        return;
      }

      this.equation = this.equation + "* -1";
      this.calculate();
    },
    //点击%
    calculatePercentage() {
      if (this.isOperatedAdded || !this.isStarted) {
        return;
      }

      this.equation = this.equation + "* 0.01";
      this.calculate();
    },
    //点击AC
    clear() {
      this.equation = "0";
      //小数点个数
      this.isDecimalAdded = false;
      //是否点击运算符
      this.isOperatedAdded = false;
      //判断是否开始输入数字
      this.isStarted = false;
    },
  },
});
