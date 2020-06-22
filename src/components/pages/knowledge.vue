<!-- 知识点 -->
<template>
  <div class='main'>
    <section class="knowledge">
      <div class="item" v-for="(item, index) in knowledge" :key="index">
        <h2 :class="['fontColor mb10', {activeBg : paramsIdx == index}]">{{item.title}}</h2>
        <p :class="['part fontColor', {activeBg : paramsIdx == index}]" ref="part">
          <i :class="[val.className]" v-for="(val, idx) in item.content" :key="idx">{{val.text}}</i>
        </p>
      </div>

    </section>
  </div>
</template>

<style lang='less'>
//@import url(); 引入公共css类

@import url('../../assets/css/public.css');

@pl10: 10px;
.loop(@n, @i:1) when (@i <= @n) {
  .part0@{i}{
    padding-left: @pl10*@i;
  }
  .loop(@n, (@i + 1));
}

.knowledge{
  width: 1100px;
  .item{
    margin-bottom: 20px;
    h2{
      text-align: left;
      font-size: 18px;
      background-color: #282B36;
      max-width: 300px;
      padding: 10px;
      display: block;
      margin-left: auto;
      margin-right: auto;
      border-radius: 10px;
    }
    p.part{
      max-width: 300px;
      padding: 10px;
      background-color: #282B36;
      border-radius: 10px;
      margin-left: auto;
      margin-right: auto;
      i{
        color: #F8F8F2;
        display: block;
        text-align: left;
        font-weight: 500;
        font-style:normal;
        font-size: 14px;
      }
      i.text{
        text-align: left;
      }
      .loop(10, 1);
    }
  }
}
</style>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import knowledge from '@/assets/js/knowledge-data.js'

export default {
//import引入的组件需要注入到对象中才能使用
  data() {
  //这里存放数据
    return {
      knowledge: knowledge,
      paramsIdx: null
    }
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
    this.paramsIdx = this.$route.params.idx //获取url传参

    let el = this.$refs.part[this.paramsIdx]
    let wInnerHeight = window.innerHeight //屏幕的高度
    let _offsetTop = el.offsetTop
    let _clientHeight = el.clientHeight

    
    if(wInnerHeight < (_offsetTop+_clientHeight)) {
      document.documentElement.scrollTop = ((_offsetTop + _clientHeight) - wInnerHeight)
    }
    
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