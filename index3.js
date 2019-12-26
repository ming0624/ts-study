//枚举类型
//他的值是数字序号，从 0 开始
var DayOfTheWeek;
(function (DayOfTheWeek) {
    DayOfTheWeek[DayOfTheWeek["SUN"] = 0] = "SUN";
    DayOfTheWeek[DayOfTheWeek["MON"] = 1] = "MON";
    DayOfTheWeek[DayOfTheWeek["TUE"] = 2] = "TUE";
    DayOfTheWeek[DayOfTheWeek["WED"] = 3] = "WED";
    DayOfTheWeek[DayOfTheWeek["THU"] = 4] = "THU";
    DayOfTheWeek[DayOfTheWeek["FRI"] = 5] = "FRI";
    DayOfTheWeek[DayOfTheWeek["SAT"] = 6] = "SAT";
})(DayOfTheWeek || (DayOfTheWeek = {}));
var day;
day = DayOfTheWeek.MON;
if (day === DayOfTheWeek.MON) {
    console.log('go to work work');
}
console.log(day);
var sayName = function (o) {
    console.log(o.name);
};
var person = {
    age: 28,
    name: 'helloworld',
    print: function (name) {
        console.log(name);
    }
};
var bootle = {
    litres: 1,
    name: '漂流瓶'
};
sayName(person);
var my_name = 'hello';
// let my_name: string = 'world'
console.log(my_name);
var user = {
    name: 'huawei',
    age: 15
};
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.greet = function () {
        console.log('我是继承类');
    };
    return Employee;
}());
var em = new Employee();
em.greet();
