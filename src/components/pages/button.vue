<!-- 返回顶部 -->
<template>
  <div class='main'>
    <button class="btn">按钮</button>
  </div>
</template>

<style lang='less' scoped>
//@import url(); 引入公共css类
.main{
  margin-top: 50px;
  button{
    padding: 0;
    margin: 0;
    text-transform: none;
    border: none;
    background-color: #fff;
    outline: none;    //消除默认点击蓝色边框效果
  }
  .btn{
    cursor: pointer;
    padding: 10px 40px;
    color: #fff;
    background-color: #1ee29a;
    border-radius: 5px;
    border: none;
    box-shadow: 2px 3px #b4ece6;
    -webkit-transition: .5s;
    transition: .5s;
    font-size: 16px;
    -webkit-transition: .5s;
    transition: .5s;
  }
  .btn:active{
      -webkit-transform: translateX(3px) translateY(2px);
      transform: translateX(3px) translateY(2px);
      -webkit-transition: .25s;
      transition: .25s;
      box-shadow: none!important;
  }
}
</style>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
  data() {
  //这里存放数据
    return {}
  },
  components: {},
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>