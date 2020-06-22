"use strict";
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
//面向对象 类是对象具体事物的一个抽象
//对象是类的具体表现
var Xjj = /** @class */ (function () {
    function Xjj(name, age) {
        //构造函数就是给类中的属性赋值
        this.name = name;
        this.age = age;
    }
    Xjj.prototype.say = function () {
        console.log('构成函数');
    };
    return Xjj;
}());
//public 公共修饰符
//protected 受保护的
//private 私有修饰符
var Xjjj = /** @class */ (function () {
    function Xjjj(sex, name, age) {
        this.sex = sex;
        this.name = name;
        this.age = age;
    }
    Xjjj.prototype.say = function () {
        console.log('公共的');
    };
    Xjjj.prototype.sayHi = function () {
        console.log('私有');
    };
    return Xjjj;
}());
//readonly 只读属性修饰符
var Man = /** @class */ (function () {
    function Man() {
        this.sex = '男';
    }
    return Man;
}());
var man = new Man();
// 类
var Js = /** @class */ (function () {
    function Js(name, age, skill) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
    Js.prototype.find = function () {
        console.log('找小朋友');
    };
    return Js;
}());
//继承 Ps继承了Js
var Ps = /** @class */ (function (_super) {
    __extends(Ps, _super);
    function Ps() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xixi = '气';
        return _this;
    }
    //重写
    Ps.prototype.find = function () {
        _super.prototype.find.call(this); //保持父类的结果
        console.log('帅气');
    };
    Ps.prototype.zq = function () {
        console.log('zq');
    };
    return Ps;
}(Js));
var myhb = { sex: '男', name: 'aa', age: 18 };
console.log(myhb);
