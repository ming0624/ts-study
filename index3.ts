//枚举类型
//他的值是数字序号，从 0 开始
enum DayOfTheWeek {
SUN,MON,TUE,WED,THU,FRI,SAT
}

let day:DayOfTheWeek;
day = DayOfTheWeek.MON;
if(day === DayOfTheWeek.MON){
  console.log('go to work work')
}
console.log(day)
// tsc 编译
// ts-node 自定编译ts
// nodemon --exec ts-node index3.ts热更新

// duck type 鸭子类型 看起来像鸭子 就是鸭子类型

//interface 接口

//接口规定了如何设置，就是一些规范，别人设计的接口都是差不多的
//

//接口
//传过来的的对象必须包含接口的属性和方法
interface Named {
  //属性
  name: string
  //方法
  //没有方法体

  print(name:string): void ;

}

const sayName = (o: Named) => {
  console.log(o.name)
}

const person = {
  age: 28,
  name: 'helloworld',
  print:(name): void => {
    console.log(name)
  }
}
const bootle = {
  litres: 1,
  name: '漂流瓶'
}
sayName(person);
// sayName(bootle)



// 类型别名 type

type MYNamed = string;
let my_name: MYNamed = 'hello';
// let my_name: string = 'world'
console.log(my_name)

type User = {
  name:string;
  age:number
}

const user: User = {
  name:'huawei',
  age:15
}

// const user :{name:string,age:number} = {
//   name:'dahua',
//   age:27
// }
interface IUser {
  name: string;
  age:number
}

// interface 可以定义重复的接口，然后合并
//type 不能定义重复的类型，

//类 实现接口。
interface Aminate{
  name:string;
  greet();
}
class Employee implements Aminate{
  name:string;
  greet():void {
    console.log('我是继承类')
  }
}
let em = new Employee()
em.greet()

//接口的使用
interface Pay{
   name:string;
   greet():void;
}
const sayGreet = (o: Pay) => {
  o.greet()
}

sayGreet(em)


//支付接口

interface PayOne {
  post():void;
}
//可能会发送http 请求 真实环境使用
const do_Pay = (pay: PayOne) => {
  pay.post()
}

//微信支付
class wayPay implements PayOne {
  post() {

  }
}

//支付宝支付
class aliPay implements PayOne {
  post() {

  }
}

let we_pay:PayOne = new wayPay();
let ali_pay: PayOne = new aliPay();

//实现支付
do_Pay(we_pay);
do_Pay(ali_pay)