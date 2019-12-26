//indextable 类型
interface States{
  //[state:string] 必须是string 或者 number
  //这种方法定义的数组，没有push length join等属性和方法
  [state:string]:boolean;
}

let s:States = {'enabled':true,'maximized':false}
console.log(s);
console.log(s['enabled'])
/************************************************** */
interface Status{
  [index:number]:boolean;
}
let ss:Status = [true,false,false,true];
console.log(ss);
console.log(ss[2])

interface State1{
  [ss:number]:number;
}

let s2:State1 = [1,2,3,4,5,6]
console.log(s2)
console.log(s2[3])
/************************************************** */
interface States2{
  [state:number]:boolean;
  length:number;
  pop():boolean;
}

let s3:States2 =[true,false,false,false];
console.log(s3);
console.log(s3.length);
console.log(s3.pop())
/************************************************** */
interface States3{
  [state:string]:string;
  mainScreen:string;
}

let s4:States3 ={mainScreen:'222'};
s4['enabled'] = '111';
s4['index'] = '333';
console.log(s4);

/************************************************** */
//嵌套类型

interface NestedCss{
  color?:string;
  next?:{
    [selector:string]:NestedCss
  }

}
let e:NestedCss ={
  color:'red',
  next:{
    '.sub':{
      color:'blue'
    }
  }
}