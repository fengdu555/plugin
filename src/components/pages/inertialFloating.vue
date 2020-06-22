<!-- 移动端圆形惯性浮动 -->
<template>
  <div class='main'>
    <div class="ball">拖动</div>
    这是移动端圆形惯性浮动
  </div>
</template>

<style lang='less' scoped>
//@import url(); 引入公共css类
.ball {
	position: fixed;
    line-height: 2.75rem;
    width: 2.75rem;
    height: 2.75rem;
    padding: .5rem;
    text-align: center;
    border-radius: 99px;
    color: #fff;
    /*border: 1rem solid transparent;*/
    background-color: #ed424b;
    background-clip: padding-box;
    text-decoration: none;
    top: 2em;
}
</style>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import IntertialFloating from '@/assets/js/inertial-floating.js'

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
  mounted() {
    new IntertialFloating('.ball')

    // new Inertia(ele);
    // new Inertia(ele, option);
    // ele表示拖移弹动的元素；
    // option为可选参数，包括：
    // edge，布尔值，表示是否吸附边缘，默认为true，也就是吸附。
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>