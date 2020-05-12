// 匿名函数赋值
const squareFun1 = function (x) {
  return x * x;
};

// 箭头函数省略function关键字
const squareFun2 = (x) => {
  return x * x;
};

// 如果函数体中只有一句statement，可以省略大括号
const squareFun3 = (x) => x * x;

console.log(squareFun1(2)); // output: 4
console.log(squareFun2(2)); // output: 4
console.log(squareFun3(2)); // output: 4

const person = {
  name: "shiming",
  getName1: function () {
    return this.name;
  },
  getName2() {
    return this.name;
  },
  getName3: () => {
    return this.name;
  },
};

console.log(person.getName1()); // output: shiming
console.log(person.getName2()); // output: shiming
console.log(person.getName3()); // output: shiming
