var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var fn = function () { return 'response'; };
// 1定义变量
var a;
var b;
var c;
a = 1000;
// 2定义数组两种方式
// 方式一
var myArr = [1, 2, 3, 4];
// 方式二
var myArr2 = ['1', '2', '3'];
//定义混合类型数组方式
// tuple 元组 更数组差不多，里面元素可以是多个类型，编译出元素的个数和类型是不能改变的
var my_tuple = ['123', false];
//3定义函数function 参数类型
// function add(a:number,b:number){
//   return a+b;
// }
//箭头函数
// const add = (a:string,b:number) => {
//   return a+b;
// }
// let sum = add('10',230);
// console.log(sum)
//4function 定义返回值类型 可以让调用地方
var add = function (a, b) {
    return a + b;
};
var sum = add(10, 230);
console.log(sum.toFixed(2));
// const add1 = (a:string,b:number):string => {
//   return a+b;
// }
// let sum1 = add1('10',230);
// console.log(Number(sum1).toFixed(2))
// const add2 = (a:string,b:number):void => {
//   console.log(a+b)
// }
// add2('10',30);
//5 函数参数默认值 (b?: number) = 或者 ？
// const add1 = (a:string,b:number = 500):string => {
//   return a+b;
// }
// const add1 = (a:string,b = 500):string => {
//   return a+b;
// }
// const add1 = (a:string,b ?:number):number => {
//   if(b){
//     return a+b;
//   }else{
//     return a;
//   }
// }
// let sum1 = add1('500',900);
// console.log(Number(sum1).toFixed(2))
//6函数function 可选参数 rest parameters
var add1 = function (a) {
    var num = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        num[_i - 1] = arguments[_i];
    }
    var total = num.reduce(function (total, num) {
        return total + num;
    });
    return a + total;
};
var sum1 = add1(500, 900, 100, 300);
console.log(Number(sum1).toFixed(2));
//7 定义任意类型 any
var m;
m = 10;
m = '10px';
console.log(m);
function isString(value) {
    return typeof value == 'string';
}
function isNumber(value) {
    return typeof value == 'number';
}
//8 value :number | string  union type 定义参数类型
var log = function (value) {
    console.log(typeof value);
    // if(typeof value == 'number'){
    //   return `你的类型是number`
    // }else if(typeof value == 'string'){
    //   return `你的类型是string`
    // }else{
    //   return `你的类型是object`
    // }
    if (isNumber(value)) {
        return "\u4F60\u7684\u7C7B\u578B\u662Fnumber";
    }
    else if (isString(value)) {
        return "\u4F60\u7684\u7C7B\u578B\u662Fstring";
    }
    else {
        return "\u4F60\u7684\u7C7B\u578B\u662Fobject";
    }
};
console.log(log('[1,2]'));
//9面向对象 class 
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.greet = function () {
        console.log('你好世界！');
    };
    return Person;
}());
// let aPerson = new Person();
// //设置值
// aPerson.firstName = 'baobao';
// aPerson.lastName = 12;
//读取值
// console.log(aPerson.firstName)
// console.log(aPerson.lastName)
//10 class
var Movie = /** @class */ (function () {
    //指向objec本身
    function Movie(name) {
        this.name = name;
    }
    Movie.prototype.greet = function () {
        console.log('你好世界！');
    };
    return Movie;
}());
var p = new Movie('诱人的美食');
console.log(p.name);
p.greet();
//11 class 构造方法 constructor methods 继承 多态
//继承父类的属性和行为，就是属性和方法
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer(firstName, lastName) {
        var _this = 
        //super 调用父类的构造方法，传入参数
        _super.call(this, firstName, lastName) || this;
        console.log('programmer constructor');
        return _this;
    }
    Programmer.prototype.greet = function () {
        console.log('我是自己的方法');
    };
    Programmer.prototype.other = function () {
        this.greet();
    };
    Programmer.prototype.sayHi = function () {
        console.log(this.last);
    };
    Programmer.prototype.setLast = function (name) {
        this.last = name;
    };
    Programmer.prototype.getLast = function () {
        console.log(this.last);
        this.sayHi();
    };
    return Programmer;
}(Person));
// 定义类型aProgrammer:Programmer 不可aProgrammer:Person 因为 person 中没有 other方法
var aProgrammer = new Programmer('hahha', 'heihei');
// aProgrammer.greet()
// // aProgrammer.other()
// aProgrammer.setLast('baobao');
// aProgrammer.getLast();
//12 修饰符 public private protected
//类里定义的属性和方法默认都是公共的,可以在对象中调用，也可以在继承的对象中调用  public
// private 私有的 只有在内部对象没可以使用，外部无法使用，子类都无法直接访问，子类继承也可以继承私有属性和方法，也要通过继承来的public 的方法才能访问
//protected 受保护属性 子类可以访问，继承受保护的属性和方法，也要通过继承来的public 和自定义的public的方法才能访问
// 权限范围  public > portected > private 
//13
