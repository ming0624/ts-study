//静态属性 ,方法  static 也可以加修饰符
class Person{
  // 静态属性
  static age: number = 10;

  //静态方法
  public static getAge(): string {
    return `my is result ${Person.age}`
  }

  //只读属性
  readonly name:string = 'baobao';

}
console.log(Person.age)
console.log(Person.getAge())
let aPerson = new Person();
// aPerson.name = '12';
/*
static 静态属性和方法
通过类似Person加方法名或者属性名来调用
默认声明为public 
如果是portected 或者 private ,当前类都不能调用，通过public的静态方法调用
如果父类是portected 或者 private ,子类也能继承所有的静态属性和方法，
    子类还是不能调用这portected 或者 private的方法或者属性，通过继承public的方法调用
    子类定义的public 方法只有是父类为public 或者 protected 的才能访问，private的不能访问，
*/

//只读属性 readonly, 不能修改