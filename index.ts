var fn = () => 'response';
// 1定义变量
var a: number;
var b: boolean;
var c: string;
a =  1000;

// 2定义数组两种方式
// 方式一
var myArr:number[] = [1,2,3,4];
// 方式二
var myArr2:Array<string> = ['1','2','3'];

//定义混合类型数组方式
// tuple 元组 根数组差不多，里面元素可以是多个类型，编译出元素的个数和类型是不能改变的

var my_tuple: [string , boolean] = ['123',false];

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
const add = (a:number,b:number):number => {
  return a+b;
}
let sum = add(10,230);
console.log(sum.toFixed(2))
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
const add1 = (a: number, ...num: number[]): number => {
  let total = num.reduce(function(total,num){
    return total + num;
  })
  return a + total;
}
let sum1 = add1(500,900,100,300);
console.log(Number(sum1).toFixed(2))

//7 定义任意类型 any

let m:any;
m = 10;
m = '10px';
console.log(m)

function isString(value :any): value is string{
  return typeof value == 'string'
}
function isNumber(value: any): value is number{
  return typeof value == 'number'
}
//8 value :number | string  union type 定义参数类型
const log = (value: any) => {
  console.log(typeof value)
  // if(typeof value == 'number'){
  //   return `你的类型是number`
  // }else if(typeof value == 'string'){
  //   return `你的类型是string`
  // }else{
  //   return `你的类型是object`
  // }
  if(isNumber(value)){
    return `你的类型是number`
  }else if(isString(value)){
    return `你的类型是string`
  }else{
    return `你的类型是object`
  }
}
console.log(log('[1,2]'))

//9面向对象 class 
class Person {
  //数据内容
  public firstName: string;
  public lastName: string;
  public greet(){
    console.log('你好世界！')
  }
  protected constructor(firstName: string,lastName: string){
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// let aPerson = new Person();
// //设置值
// aPerson.firstName = 'baobao';
// aPerson.lastName = 12;
//读取值
// console.log(aPerson.firstName)
// console.log(aPerson.lastName)

//10 class

class Movie {
  name:string;
  play_count:number;
  created_at: string;
  time:string;
  //指向objec本身
  constructor(name: string){
    this.name = name;
  }
  greet(){
    console.log('你好世界！')
  }
}

let p = new Movie('诱人的美食');

console.log(p.name)
p.greet()

//11 class 构造方法 constructor methods 继承 多态
//继承父类的属性和行为，就是属性和方法
class Programmer extends Person{
  constructor(firstName: string, lastName: string){
    //super 调用父类的构造方法，传入参数
    super(firstName,lastName)
    console.log('programmer constructor')
  }
  public greet(){
    console.log('我是自己的方法')
  }
  public other(){
    this.greet()
  }
  private last: string ;
  private sayHi(){
    console.log(this.last)
  }
  public setLast(name){
    this.last = name;
  }
  public getLast(){
    console.log(this.last)
    this.sayHi()
  }
}
// 定义类型aProgrammer:Programmer 不可aProgrammer:Person 因为 person 中没有 other方法
let aProgrammer:Programmer = new Programmer('hahha','heihei')
// aProgrammer.greet()
// // aProgrammer.other()
// aProgrammer.setLast('baobao');
// aProgrammer.getLast();

//12 修饰符 public private protected
//类里定义的属性和方法默认都是公共的,可以在对象中调用，也可以在继承的对象中调用  public
// private 私有的 只有在内部对象没可以使用，外部无法使用，子类都无法直接访问，子类继承也可以继承私有属性和方法，也要通过继承来的public 的方法才能访问
//protected 受保护属性 子类可以访问，继承受保护的属性和方法，也要通过继承来的public 和自定义的public的方法才能访问
// 权限范围  public > portected > private 


//13 静态属性 static 
