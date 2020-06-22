//面向对象 类是对象具体事物的一个抽象
//对象是类的具体表现
class Xjj{
  name: string
  age: number
  constructor(name:string, age:number) {
  //构造函数就是给类中的属性赋值
    this.name = name
    this.age = age
  }
  say() {
    console.log('构成函数')
  }
}

//public 公共修饰符
//protected 受保护的
//private 私有修饰符
class Xjjj{
  public sex: string
  protected name: string
  private age: number
  public constructor(sex:string, name:string, age:number){
    this.sex = sex
    this.name = name
    this.age = age
  }
  public say() {
    console.log('公共的')
  }
  private sayHi() {
    console.log('私有')
  }
}

//readonly 只读属性修饰符
class Man{
  public readonly sex:string = '男'
}

var man:Man = new Man()

// 类
class Js{
  public name: string
  public age: number
  public skill: string
  constructor(name: string, age: number, skill: string) {
    this.name = name
    this.age = age
    this.skill = skill
  }
  public find() {
    console.log('找小朋友')
  }
}
//继承 Ps继承了Js
class Ps extends Js{
  public xixi:string = '气'
  //重写
  public find() {
    super.find() //保持父类的结果
    console.log('帅气')
  }
  public zq() {
    console.log('zq')
  }
}

// interface 定义接口 就是规范
interface Hb{
  sex: string,
  name: string,
  age: number,
  sg?: string //可选参数加问号
}
let myhb:Hb = {sex: '男', name:'aa', age: 18}

console.log(myhb)