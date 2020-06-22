<!-- 测试用 -->
<template>
  <div class='main'>
    <div class="v-code">
      <input
      ref="vcode"
      id="vcode"
      type="tel"
      maxlength="6"
      v-model="code"
      @focus="focused = true"
      @blur="focused = false"
      :disabled="telDisabled" />

      <label
        for="vcode"
        class="line"
        v-for="(item,index) in codeLength"
        :class="{'animated': focused && cursorIndex === index}"
        :key="index"
        v-text="codeArr[index]"
      >
      </label>
  </div>
  </div>
</template>

<style lang='less' scoped>
//@import url(); 引入公共css类
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #ffffff;
    font-family: -apple-system, PingFang SC, Hiragino Sans GB, Helvetica Neue, Arial;
    -webkit-tap-highlight-color: transparent;
  }
  .app {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 60px;
    max-width: 320px;
    margin-left: auto;
    margin-right: auto;
  }
  .heading-2 {
    color: #333333;
  }
  .v-code {
    margin-top: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    width: 280px;
    margin-left: auto;
    margin-right: auto;
  }
  .v-code input {
    position: absolute;
    top: -100%;
    left: -666666px;
    opacity: 0;
  }
  .v-code .line {
    position: relative;
    width: 40px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    font-size: 28px;
  }
  .v-code .line::after {
    display: block;
    position: absolute;
    content: '';
    left: 0;
    width: 100%;
    bottom: 0;
    height: 1px;
    background-color: #aaaaaa;
    transform: scaleY(.5);
    transform-origin: 0 100%;
  }
  .v-code .line.animated::before {
    display: block;
    position: absolute;
    left: 50%;
    top: 20%;
    width: 1px;
    height: 60%;
    content: '';
    background-color: #333333;
    animation-name: coruscate;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
  }
  /*.v-code .line.animated::before {
    display: block;
    content: '';
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 100%;
    height: 2px;
    background-color: #000000;
  }*/
  @keyframes coruscate {
    0% {
      opacity: 0
    }
    25% {
      opacity: 0
    }
    50% {
      opacity: 1
    }
    75% {
      opacity: 1
    }
    to {
      opacity: 0
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
    return {
      code: '',
      codeLength: 6,
      telDisabled: false,
      focused: false
    }
  },
  components: {},
  //监听属性 类似于data概念
  computed: {
    codeArr() {
        return this.code.split('')
      },
      cursorIndex() {
        return this.code.length
      }
  },
  //监控data中的数据变化
  watch: {
    code(newVal) {
        this.code = newVal.replace(/[^\d]/g,'')
      }
  },
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