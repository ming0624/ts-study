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
//使用泛型
//可以使用很多类型来代替 T
//T[] 代表数组 每个元素都是 T 类型
function getArray(items) {
    return new Array().concat(items);
}
var myNumArr = getArray([1, 2, 3, 4]);
var myStrArr = getArray(['hello', 'world']);
//当不传入T时，会推测出类型
var myBooleanArr = getArray([true, false]);
console.log(myNumArr);
console.log(myStrArr);
myNumArr.push(5);
myStrArr.push('baobao');
// myBooleanArr.push(2)
//类 使用泛型
var List = /** @class */ (function () {
    function List(elements) {
        this.data = elements;
    }
    List.prototype.add = function (t) {
        this.data.push(t);
    };
    List.prototype.remove = function (t) {
        var index = this.data.indexOf(t);
        if (index > -1) {
            this.data.splice(index, 1);
        }
    };
    List.prototype.asArray = function () {
        return this.data;
    };
    return List;
}());
var numbers = new List([1, 2, 3, 4, 5]);
numbers.add(7);
numbers.remove(1);
var num = numbers.asArray();
console.log(num);
var Pair = /** @class */ (function () {
    function Pair(first, second) {
        this._first = first;
        this._second = second;
    }
    Object.defineProperty(Pair.prototype, "first", {
        get: function () {
            return this._first;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pair.prototype, "second", {
        get: function () {
            return this._second;
        },
        enumerable: true,
        configurable: true
    });
    return Pair;
}());
var p = new Pair(true, 'false');
// console.log(p.first)
// console.log(p.second)
//pairs 是个数组参数， 数组中每个元素时 Pair<F, S>类型
function getFirstArray(pairs) {
    var arr = [];
    for (var i = 0; i < pairs.length; i++) {
        var first = pairs[i].first;
        arr.push(first);
    }
    return arr;
}
var o = { first: 'baobao', second: 28 };
