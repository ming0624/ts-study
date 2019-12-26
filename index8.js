// 如何定义函数类型的变量
var a;
// 方式一
a = function () {
    console.log('work');
};
function fun() {
    return function () {
        console.log('work2');
    };
}
//方式二
var c;
c = function () {
    console.log('work c');
};
//方式三
var d;
d = function (parmas) {
    return parmas;
};
var f = function (pass) {
    return pass;
};
var h = function (pass) { return pass; };
//上面的两种函数的组合
function sum(x, y, z) {
    if (typeof z === 'undefined') {
        return x + y;
    }
    else {
        return x + y + z;
    }
}
var n = sum(1, 2, 3);
console.log(n);
//*********************************************type 守卫************************************************* */
function show(x) {
    console.log(typeof x);
    if (typeof x === 'number') {
        console.log('x is number');
    }
    else {
        console.log('x is string');
    }
}
show('test');
show(4);
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var per = new Person();
console.log(typeof per);
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.start = function () {
        console.log('car start');
    };
    Car.prototype.drive = function () {
        console.log('car driving');
    };
    return Car;
}());
var Bike = /** @class */ (function () {
    function Bike() {
    }
    Bike.prototype.start = function () {
        console.log('bike start');
    };
    Bike.prototype.ride = function () {
        console.log('bike driving');
    };
    return Bike;
}());
//解决报错问题 方法一 使用断言解决
function move(vehicle) {
    vehicle.start();
    // if((vehicle as Car).drive) {
    //   (vehicle as Car).drive();
    // }else {
    //   (vehicle as Bike).ride();
    // }
    //方法二 解决报错
    if (isCar(vehicle)) {
        vehicle.drive();
    }
    else {
        vehicle.ride();
    }
    //方式三 instanceof
    if (vehicle instanceof Car) {
        vehicle.drive();
    }
    else {
        vehicle.ride();
    }
}
//boolean 返回值发挥的作用是在运行时
//vehicle is Car 发挥在编译时期
function isCar(vehicle) {
    return vehicle.drive !== undefined;
}
// function move(vehicle: Bike | Car): void {
//   vehicle.start();
//   if(vehicle.drive) {
//     vehicle.drive();
//   }else {
//     vehicle.ride();
//   }
// }
move(new Bike());
//************************************联合类型 uniontype null undefined****************************************** */
function display(x) {
    if (x === undefined) {
        console.log('value is undefined');
    }
    else if (x === null) {
        console.log('value is null');
    }
    else {
        console.log(x);
    }
}
var m = 10;
var y;
var z = null;
display(m);
display(y);
display(z);
//null undefined 分别有自己的类型是null undefined
//当运行tsc 加上 --strictNullChecks 选项，就会进行严格的空值检查
//******************************************tsc --strictNullChecks************************************************* */
// tsc ./index8.ts --strictNullChecks 严格模式的空值检查
//需要在变量后面加上 ！ 表示当前变量不能为空
function splitInHalf(str) {
    var checkString = function () {
        if (str === null || str === undefined) {
            str = 'test';
        }
    };
    checkString();
    return str.substring(0, str.length / 2);
}
var s = splitInHalf('hello');
console.log('s=', s);
