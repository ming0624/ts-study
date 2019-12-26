var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//list
console.log('list');
// class Todo1{
//   userId:number;
//   id:number;
//   title:string;
//   completed:boolean;
// }
var todo = {
    "userId": 1,
    "id": 1,
    "title": "我是哈哈哈",
    "completed": false
};
var todos = [
    {
        "userId": 1,
        "id": 1,
        "title": "我是哈哈哈",
        "completed": false
    },
    {
        "userId": 2,
        "id": 2,
        "title": "我是哈哈哈2",
        "completed": false
    },
    {
        "userId": 3,
        "id": 3,
        "title": "我是哈哈哈3",
        "completed": true
    },
];
/*******************************abstract classes**********************/
//抽象类
//不能实例化
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.display = function () {
        console.log('display');
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, code) {
        var _this = _super.call(this, name) || this;
        _this.empCode = code;
        return _this;
    }
    Employee.prototype.find = function (name) {
        return new Employee(name, '2');
    };
    return Employee;
}(Person));
// let p:Person new Person("xxx")
var p = new Employee("xxx", "12");
var p1 = p.find('baoabo');
console.log(p1);
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
var Person1 = /** @class */ (function () {
    function Person1(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    return Person1;
}());
var p0 = new Person1('qingqing', 28);
console.log(p0);
/**************************'getter && setter'**************************************** */
var Person2 = /** @class */ (function () {
    function Person2(name, age) {
        this._name = name;
        this._age = age;
    }
    Person2.prototype.getName = function () {
        return this.name;
    };
    Person2.prototype.setName = function (name) {
        this.name = name;
    };
    Object.defineProperty(Person2.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    return Person2;
}());
var pm = new Person2('www', 10);
//输出
console.log(pm.name);
// console.log(pm.getName());
//修改name
pm.name = "baidu";
// pm.setName("baidu") ;
console.log(pm);
