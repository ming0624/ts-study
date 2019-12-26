// 如何定义函数类型的变量
let a: any;
// 方式一
a = function(): void{
  console.log('work')
}

function fun(): any{
  return function(): void {
    console.log('work2')
  }
}

//方式二
let c: Function;
c = function(): void {
  console.log('work c')
}

//方式三
let d: (params:string) => string;
d = function(parmas: string): string {
  return parmas;
}

//方式四 类型别名
type e = (pass: string) => string;
let f:e = function(pass: string):string {
  return pass;
}

//方式五
interface g {
  (params: string) :string;
}
const h:g = (pass: string) => pass;

//*************************************************定义函数类型的方式***************** */
// 函数重载允许使用相同的名字与不同的参数来创造多个函数
// 1 先提供没有实现的函数定义列表
// 2 必须提供所有函数组合的实现

//函数名相同，参数不同
function sum(x: number, y: number): number;
function sum(x: number, y: number, z: number): number;

//上面的两种函数的组合
function sum(x: number, y: number, z?: number): number {
  if(typeof z === 'undefined'){
    return x + y;
  }else{
    return x + y + z;
  }
  
}
let n = sum(1, 2, 3);
console.log(n)


//*********************************************type 守卫************************************************* */
function show(x:number | string): void {
  console.log(typeof x);
  if(typeof x === 'number'){
    console.log('x is number')
  }else {
    console.log('x is string')
  }

}
show('test')
show(4)

class Person{

}
let per = new Person();
console.log(typeof per)

class Car {
  start() {
    console.log('car start')
  }
  drive() {
    console.log('car driving')
  }
}

class Bike {
  start() {
    console.log('bike start')
  }
  ride() {
    console.log('bike driving')
  }
}

//解决报错问题 方法一 使用断言解决
function move(vehicle: Bike | Car): void {
  vehicle.start();
  // if((vehicle as Car).drive) {
  //   (vehicle as Car).drive();
  // }else {
  //   (vehicle as Bike).ride();
  // }
  //方法二 解决报错
  if(isCar(vehicle)) {
    vehicle.drive();
  }else {
    vehicle.ride();
  }

  //方式三 instanceof
  if(vehicle instanceof Car) {
    vehicle.drive();
  }else {
    vehicle.ride();
  }
}

//boolean 返回值发挥的作用是在运行时
//vehicle is Car 发挥在编译时期
function isCar(vehicle: Bike | Car): vehicle is Car {
  return (vehicle as Car).drive !== undefined;
}

// function move(vehicle: Bike | Car): void {
//   vehicle.start();
//   if(vehicle.drive) {
//     vehicle.drive();
//   }else {
//     vehicle.ride();
//   }
// }
move(new Bike())

//************************************联合类型 uniontype null undefined****************************************** */
function display(x: number | undefined | null):void {
  if(x === undefined) {
    console.log('value is undefined')
  }else if(x === null) {
    console.log('value is null')
  }else {
    console.log(x)
  }
}

let m = 10;
let y;
let z = null;
display(m);
display(y);
display(z);
//null undefined 分别有自己的类型是null undefined
//当运行tsc 加上 --strictNullChecks 选项，就会进行严格的空值检查

//******************************************tsc --strictNullChecks************************************************* */
// tsc ./index8.ts --strictNullChecks 严格模式的空值检查
//需要在变量后面加上 ！ 表示当前变量不能为空
function splitInHalf(str: string | null) {
  let checkString = function() {
    if(str === null || str === undefined) {
      str = 'test';
    }
  }
  checkString();
  return str!.substring(0, str!.length / 2)
}
let s: string = splitInHalf('hello');
console.log('s=:',s)

//*****************************************never type********************************************** */
function sayHi(): void {
  console.log('hi');
}

let ss: void = sayHi();
console.log(ss)

//never 类型 在没有返回值 或 终是抛出异常 或 无线循环的代码不可到达 地方使用 
//没有返回值，不期待

//void 可以理解为返回的类型为空 代码可能继续运行
//有返回值，期待返回

function loopForver(): never {
  //无限循环
  while(true) {

  }
}
// console.log(loopForver())

function withError($smg: string): never {
  throw new Error($smg)
}

function showTrueFalse(x: string | boolean): void {
  if(typeof x === 'string') {
     console.log('x is string')
  }else if( typeof x ==='boolean') {
     console.log('x is boolean')
  }else {
    //传入别的类型， 编译器会处理
    //x 可能是一个不可到达的类型，可以分配给never
    checkParams(x);
  }
}

//never 是很多类型的子类型
//不能把number string 等类型或值分配给never

function checkParams(x: never): never {
  throw new Error('check fails for :' + x)
}

showTrueFalse(true);
showTrueFalse('false');
// showTrueFalse([1,2])


class PrinterA {
  name: 'landscape';
  printLandscape():void {
    console.log('printing in landscape')
  }
}

class PrinterB {
  name: 'portrait';
  printPortrait(): void {
    console.log('printing in portrait')
  }
}

function doPrint(pt: PrinterA | PrinterB):void {
  if(pt.name === 'landscape') {
    pt.printLandscape()
  }else if(pt.name === 'portrait') {
    pt.printPortrait()
  }else {
    let unPrint: never = pt;
  }
}