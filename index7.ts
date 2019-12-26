//list
console.log('list')
interface Todo{
  userId:number;
  id:number;
  title:string;
  completed:boolean;
}
// class Todo1{
//   userId:number;
//   id:number;
//   title:string;
//   completed:boolean;
// }
let todo:Todo ={
  "userId": 1,
  "id":1,
  "title":"我是哈哈哈",
  "completed": false
}
//数组类型
let todos:Todo[] = [
  {
    "userId": 1,
    "id":1,
    "title":"我是哈哈哈",
    "completed": false
  },
  {
    "userId": 2,
    "id":2,
    "title":"我是哈哈哈2",
    "completed": false
  },
  {
    "userId": 3,
    "id":3,
    "title":"我是哈哈哈3",
    "completed": true
  },
]

/*******************************abstract classes**********************/
//抽象类
//不能实例化
//可以定义抽象方法，但是抽象方法必须实现
abstract class Person{
  name:string;
  constructor(name:string){
    this.name = name;
  }
  display():void{
    console.log('display');
  }

  //抽象方法，没有方法体
  abstract find(string):Person;
}

class Employee extends Person{
  empCode:string;
  constructor(name:string,code:string){
    super(name);//必须调用
    this.empCode = code;
  }
  find(name:string):Person{
    return new Employee(name,'2')
  }
}
// let p:Person new Person("xxx")
let p:Person = new Employee("xxx","12");
let p1:Person = p.find('baoabo')
console.log(p1)

/************************************************************** */

// class Person1{
//   private _name:string;
//   private _age:number;
//   constructor(name:string,age:number){
//     this._name = name;
//     this._age = age;
//   }
// }
//简写
class Person1{
  constructor(private _name:string,private _age:number){
    
  }
}
let p0 = new Person1('qingqing',28);
console.log(p0);

/**************************'class get && set'**************************************** */
class Person2{
  // name:string;
  // age:number;
  private _name:string;
  private _age:number;
  constructor(name:string,age:number){
    this._name = name;
    this._age = age;
  }
  getName():string{
    return this.name;
  }
  setName(name:string):void{
    this.name = name;
  }
  get name():string{
    return this._name;
  }
  set name(name:string){
    this._name = name;
  }
}

let pm:Person2 = new Person2('www',10);
//输出
console.log(pm.name);
// console.log(pm.getName());
//修改name
pm.name = "baidu";
// pm.setName("baidu") ;
console.log(pm)

/*************************************************************************** */

class REctangle{
  private w:number;
  private h:number;
  constructor(w:number,h:number){
    this.w = w;
    this.h = h;
  }

  getArea(){
    // return function():number{
    //   return this.w * this.h;
    // }
    return ():number => {
      return this.w * this.h;
    }
  }
}

let r:REctangle = new REctangle(2,5);
let area = r.getArea();
//this是指向REctangle这个对象，还是指向调用上下文
//需要把函数改为箭头函数,把this指向对象中
let size = area();
console.log(size)