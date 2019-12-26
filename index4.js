// 可选参数 ( ?: )
var person = {
    // first_name: 'baobao',
    last_name: 'mingbao'
};
var sayName = function (o) {
    console.log(o.last_name);
};
sayName(person);
//类的接口
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var u = new User();
u.last_name = 'hello world';
sayName(u);
//类型断言
// sayName({last_name:'qwe',age:'12'} as Person)
