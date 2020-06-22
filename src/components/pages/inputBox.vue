<!-- input分开输入 -->
<template>
  <div class='main'>
    原理：label里的for, 绑定input里的id，只能从最后一个删起,点击label,input会焦点，需要隐藏input
    <div>
    <input type="tel" v-model="code" id="code" maxlength="6" @input="handleInput" @blur="handleBlur">
    </div>
    <div class="pt20">
    <label for="code" :class="isActivecount == index ? className : ''" v-for="(item,index) in codeLength" :key="index" @click="handleClick(index)">{{labelCode[index]}}</label>
    </div>
  </div>
</template>

<style lang='less' scoped>
//@import url(); 引入公共css类
.pt20{padding-top: 20px;}
label{
  width: 30px;
  height: 20px;
  background-color: #aaa;
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  margin-left: 10px;
  position: relative;
}
label.active::before{
  content: '';
  position: absolute;
  top: 2px;
  bottom: 2px;
  width: 1px;
  background-color: #ddd;
  animation-name: coruscate;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
}
label.lastActive::before{
  content: '';
  position: absolute;
  top: 2px;
  bottom: 2px;
  width: 1px;
  right: 30%;
  background-color: #ddd;
  animation-name: coruscate;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
}
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
      code: '', // input value
      labelCode: [],
      codeLength: 6, // 验证码长度
      telDisabled: false, // 判断是否输入完
      focused: false, // 让input焦点, 决定光标显示所在的位置
      isActivecount: null,
      className: null
    }
  },
  components: {},
  //监听属性 类似于data概念
  computed: {
    codeArr() {
        // 将 input value 分隔数组 [1, 2, 3]
        return this.code.split('')
    },
    cursorIndex() {
      // 判断code输入长度，光标显示在对应label上
      return this.code.length
    }
  },
  //监控data中的数据变化
  watch: {
    code(inputVal) {
        //限制 非数字
        this.code = inputVal.replace(/[^\d]/g,'')
        this.labelCode = this.codeArr
        
        this.isActivecount = this.labelCode.length

        this.className = 'active'
        if(this.labelCode.length == this.codeLength) {
          console.log(this.labelCode.length + 'a')
          console.log(this.codeLength + 'b')
          this.isActivecount = 5
          this.className = 'lastActive'
          console.log(this.isActivecount + 'd')

        }
        console.log(this.isActivecount+ 'c')
      }
  },
  //方法集合
  methods: {
    // 点击事件
    handleClick(index) {
      this.isActivecount = this.labelCode.length
      this.className = 'active'
      if (this.labelCode.length == this.codeLength) {
        this.isActivecount = this.codeLength -1
        this.className = 'lastActive'
      }
    },
    handleInput() {},
    // 失去焦点
    handleBlur() {
      this.isActivecount = null
    }
  },
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