//泛型 Generice 是指在定义函数。接口或类的时候，不预先指定具体的类型，而在使用的时候在指定类型的一种特性
//可重复使用 reusable
//可以在任何类型中使用 ，不限于一种类型
// function getArray(items: any[]): any[] {
//   return new Array().concat(items);
// }

// let myNumArr = getArray([1,2,3,4]);
// let myStrArr = getArray(['hello', 'world']);
// console.log(myNumArr)
// console.log(myStrArr)

// myNumArr.push(5)
// myStrArr.push('baobao');

// console.log(myNumArr)
// console.log(myStrArr)

// myNumArr.push(false)
// myStrArr.push(100);

// console.log(myNumArr)
// console.log(myStrArr)
import sum from 'lodash-ts/sum';
//使用泛型
//可以使用很多类型来代替 T
//T[] 代表数组 每个元素都是 T 类型
function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

let myNumArr: number[] = getArray<number>([1,2,3,4]);
let myStrArr: string[] = getArray<string>(['hello', 'world']);

//当不传入T时，会推测出类型
let myBooleanArr = getArray([true, false]);

console.log(myNumArr)
console.log(myStrArr)

myNumArr.push(5)
myStrArr.push('baobao');
// myBooleanArr.push(2)

//类 使用泛型
class List<T> {
  private data: T[];
  constructor(elements: T[]) {
    this.data = elements;
  }
  add(t: T) {
    this.data.push(t);
  }
  remove(t: T) {
    let index = this.data.indexOf(t);
    if( index > -1) {
      this.data.splice(index, 1)
    }
  }
  asArray(): T[] {
    return this.data;
  }
}

let numbers = new List<number>([1,2,3,4,5]);
numbers.add(7);
numbers.remove(1)
let num = numbers.asArray();
console.log(num)

class Pair<F, S> {
  private _first: F;
  private _second: S;
  constructor(first: F, second: S) {
    this._first = first;
    this._second = second;
  }
  get first(): F {
    return this._first;
  }
  get second(): S {
     return this._second;
  }
}
let p = new Pair<boolean, string>(true, 'false');
// console.log(p.first)
// console.log(p.second)


//pairs 是个数组参数， 数组中每个元素时 Pair<F, S>类型
// function getFirstArray<F, S>(pairs:Pair<F, S>):F[] {
//   let arr: F[] = [];
//   for(let i = 0; i < pairs.length; i++) {
//     let first: F = pairs[i].first;
//     arr.push(first);
//   }
//   return arr;
// }

// 在 接口中 使用泛型**********************************************************************************************
interface OpenFire<F, S> {
  first: F;
  second: S;
}

let o:OpenFire<string, number> = {first:'baobao', second: 28};
console.log(o);

interface Command<T, R> {
  id: T;
  run(): R;
}

let c: Command<number, string> = {
  id: 12,
  run: function () {
    return '2323';
  }
}
console.log(c.id)
console.log(c.run())

interface ElementChecker {
  //函数
  <T>(items:T[], toBeChecked: T, atIndex: number): boolean;
}

function checkElementAt<T>(elements:T[], toBeChecked: T, atIndex: number): boolean {
  return elements[atIndex] === toBeChecked;
}

let checker: ElementChecker = checkElementAt;
let items = [1,2,3,4,5];
let b:boolean = checker<number>(items, 3, 2);
console.log(b);


//**************************************************************************************** */
function  createInstance<T>(t: new() => T):T {
  return new t();
}

class Test {
  x: number = 4;
}

// let test: Test = new Test();
let test: Test = createInstance<Test>(Test);
console.log(test)


// 泛型 与 类型别名
type ListType<T> = {elements: T[]};
let numList:ListType<number> = {elements:[1,2,3,4,5]};
console.log(numList)

let mm = [1,2,3,4];
let cc = sum(mm);
console.log(cc)
