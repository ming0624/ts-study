//扩展运算
function  foo(x: number, y: number, z: number) {
  console.log(x,y,z)
}
let args:number[] = [1,2,3];
//方式一
foo.apply(null, args);

//方式二
//断言
(<any>foo)(...args);

//方式三
function foo2(...args:number[]): void ;
function  foo2(x: number, y: number, z: number) {
  console.log(x,y,z)
}

foo2(...args)

let [x, y, ...remaining] = [1,2,3,4,5,6]
console.log(x)
console.log(y)
console.log(remaining)

//keyof 取值于类/对象的属性名

class A {
  x: number = 5;
}

let m: keyof A;
m = 'x';
console.log(m)

class Test {
  x:number = 8;
}

function  getProp(a:keyof Test, test:Test) {
  return test[a]
}

let t: Test = new Test();
let prop = getProp('x',t)

console.log(prop)


//********************************************************************************* */
interface Shape {
  draw(): void;
}
function  drawShapes<S extends Shape>(shapes:S[]): void {
  shapes.forEach(shape => shape.draw())
}

class Circle implements Shape {
  draw(): void {
    console.log('circle')
  }
}

class Rectangle implements Shape {
  draw(): void {
    console.log('Rectangle')
  }
}

let cirle = new Circle();
let rectangle = new Rectangle()
drawShapes([cirle, rectangle])


function getProp1<T, K extends keyof T>(key: K, obj: T): any {
  return obj[key]
}
let obj1 = {a: 2, b: 3, c:5}
let prop1 = getProp1('b',obj1)