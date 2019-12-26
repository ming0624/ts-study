// 可选参数 ( ?: )

// 匿名的函数
interface Person {
  first_name?: string;
  //readonly 只读属性
  // readonly last_name: string;
  print(callback: PrintCallback): void
  // [propName: string]:any
}

let person: Person = {
  // first_name: 'baobao',
  // last_name:'mingbao',
  print:(callback:PrintCallback): void => {
    callback(true)
  }

}

// const sayName = (o: Person) => {
//   console.log(o.last_name)
// }

// sayName(person)

//类的接口

// class User implements Person{
//   last_name: string;
// }

// let u  = new User();
// // let u :Person = new User(); //报错只读属性不能修改
// u.last_name = 'hello world';
// sayName(u)

//类型断言
// sayName({last_name:'qwe',age:'12'} as Person)

interface PrintCallback{
  //匿名函数 void 空
  (success: boolean): void
}

let PrintCallback: PrintCallback;
PrintCallback = (suc: boolean): void => {
  console.log('callback',suc)
}

person.print(PrintCallback)