//类型断言
console.log(5)
let x: any = 'this is three';
// x 可以是任何类型 编译器可能不能明确的知道，x是那种类型
// <string> 表示把x断言成字符串类型，就是告诉编译器，把x当成字符串
let s = (<string>x).substring(0,5)
console.log(s) 
// function getLength(someing:string | number):number {
//   return someing.length;
// } 错误的写法

function getLength(someing:string | number):number {
    if((<string>someing).length){
      return (<string>someing).length;
    } else{
      return someing.toString().length
    }
      
  } 

  interface Person{
    name:string,
    age:number
  }
  //断言的另一种方式 as
  let per = {} as Person;
  per.name ='hello';
  per.age =27;
  //另一种写法 
  let per1 = <Person>{
    name:'world',
    age:28
  }

  /********************************************接口的继承************************************************************* */

interface People{
  name:string
}

interface Employee{
  age:number
}

//继承另一个接口
//会继承people的属性
interface Programmer extends People{
  age:number
}
let p:Programmer ={
  name:'xinxin',
  age:2
}

//类不能继承多个类，也就是说不能有多个父类
//但可以实现多个接口
//每个接口的属性和方法都要实现
class P implements People,Employee{
  name:string;
  age:number
}

let p1:P = {
  name:'diandian',
  age:12
}

let p2:People = p1;

let p3:Employee = p1;

/************************************************接口继承-->类********************************************************* */
class Commponent{
  private width:number;
  private height:number;
  constructor(width:number,height:number){
    this.width = width;
    this.height = height;
  }
  display():void{
    console.log('displaying')
  }
}

//接口继承类
//继承类的方法和属性，但可以不用实现
//也可以定义自己的方法和属性

interface Widget extends Commponent{
  hide():void;
}

class Button extends Commponent implements Widget{
  hide():void{
    console.log('hide')
  }
}

let w:Widget = new Button(1,2);
console.log(w)
w.display();
w.hide();