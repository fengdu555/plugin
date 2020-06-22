<!-- 首页 -->
<template>
  <div class='main'>

    <div class="content">
      <!-- 导航 -->
      <section class="nav pt20">
        <ul>
          <li v-for="(item, index) in navData" :key="index" :class="['fontColor navHove', {active : activeIndex == index}]" @click=handleNav(index)>{{item.title}}</li>
        </ul>
      </section>

      <section class="list">
        <div :class="[item.className, 'item bgColor bgHove']" v-for="(item, index) in contentData" :key="index">
          <router-link :to="item.url">
            <img :src="item.img" alt="" v-if="item.img">
            <p class="fontColor">{{item.title}}</p>
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang='less'>
//@import url(); 引入公共css类

.content{
   display: flex;
}
.nav{
  width: 200px;
  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom: 30px;
    .active {
      background-color: #04334A;
    }
  }
  ul, li{
    list-style: none;
  }
  li{
    width: 100px;
    height: 45px;
    line-height: 45px;
  }
}
.list{
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 20px;
  .item{
    width:200px;
    padding: 10px;
    margin: 10px 20px;
    img{
      width: 100%;
      height: auto;
    }
    p{
      font-size: 16px;
      text-align: center;
    }
    a{
      text-decoration:none;
    }
  }
}
</style>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import contentData from '@/assets/js/content-data.js'

export default {
//import引入的组件需要注入到对象中才能使用
  data() {
  //这里存放数据
    return {
      contentData: contentData.listData.plugin,
      navData: contentData.nav,
      activeIndex: 0
    }
  },
  components: {},
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    activeIndex(val) {

      val = parseInt(val) //将字符串转成数字类型

      switch (val) {
        case 0:
          //特效
          this.contentData = contentData.listData.plugin;
          break;
        case 1:
          // 知识点
          this.contentData = contentData.listData.knowledge;
          break;
        default:
          //默认特效
          this.contentData = contentData.listData.plugin;
          break;
      }
    }
  },
  //方法集合
  methods: {
    //导航tab切换
    handleNav(index) {
      if(this.activeIndex == index) return

      this.activeIndex = index

      sessionStorage.setItem('ACTIVEINDEX-KEY', this.activeIndex) //储存导航点击的索引值
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    let _activeIndex = sessionStorage.getItem('ACTIVEINDEX-KEY')
    if (_activeIndex != null) {
      this.activeIndex = _activeIndex
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