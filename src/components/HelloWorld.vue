<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <!-- 导航 -->
    <div class="wrapper" ref="navWrapper">
      <ul class="content" ref="content">
        <li v-for="(item, index) in navList" :key="index" ref="item" :class="{active:activeIndex === index}" @click="handleClick(index)">
          {{item.title}}
        </li>
      </ul>
    </div>

    <!-- 内容 -->
    <section style="border:1px solid darkorange; width: 300px">
      <div class="list" ref="listWrapper">
      <section class="listGroup" ref="listGroup">
        <div v-for="(item, index) in contentList" :key="index" ref="listItem" class="listItem">
          {{item.title}}
        </div>
      </section>
    </div>
    </section>
    
    
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.top{
  width: 400px;
  margin: 0 auto
}
.wrapper{
  width: 300px;
  overflow: hidden;
  
}
.wrapper a{
    display: block
  }
.active{
  color: brown;
  font-weight: 600;
}
ul {
  list-style-type: none;
  padding: 0;
  border: 1px solid darkorange;
  white-space: nowrap;
  cursor: pointer;
}
li {
  display: inline-block;
  padding: 0 10px;
}
a {
  color: #42b983;
}
.list{
  width: 300px;
  overflow: hidden;
  box-sizing:border-box;
}
.listGroup{
  white-space: nowrap;
}
.listItem{
  width: 300px;
  height: 400px;
  display: inline-block;
}
</style>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'swiper',
  data () {
    return {
      option:{
        scrollX: true,
        scrollY: false,
        click: true,
        startX: 0,
        momentum:false
      },
      contentOption: {
        scrollX: true,
        scrollY: false,
        click: true,
        eventPassthrough: 'vertical',
        snap: {
           threshold: 0.3,
           speed: 400
        },
        momentum:false,
        bounce: true,
        freeScroll: true,
      },
      navScroll: null,
      contentScroll: null,
      msg: '滑动',
      activeIndex: 0,
      contentActiveIndex: 0,
      navList: [
        {title: '栏目一',isActive:true},
        {title: '栏目二',isActive:false},
        {title: '栏目三',isActive:false},
        {title: '栏目四',isActive:false},
        {title: '栏目五',isActive:false},
        {title: '栏目六',isActive:false},
        {title: '栏目七',isActive:false},
        {title: '栏目八',isActive:false},
        {title: '栏目九',isActive:false}
      ],
      contentList: [
        {title: '111111'},
        {title: '222222'},
        {title: '333333'},
        {title: '444444'},
        {title: '555555'},
        {title: '666666'},
        {title: '777777'},
        {title: '8888888'},
        {title: '9999999'},
      ]
    }
  },
  watch:{},
  methods: {
    //需要算content的长度才会出现滚动，因为它滚动的是wrapper下的第一个子元素
    setScrollWidth() {

      // 导航的长度
      let elContent = this.$refs.content
      let singleWidth = this.$refs.item[0].clientWidth
      let _length = this.navList.length
      elContent.style.width = singleWidth * _length + 'px'

      // 下面内容的长度
      let elListGroup = this.$refs.listGroup
      let singListleWidth = this.$refs.listItem[0].clientWidth
      let _ListLength = this.contentList.length
      elListGroup.style.width = singListleWidth * _ListLength + 'px'
    },
    handleClick(index) {

      if (this.activeIndex == index) return
      this.activeIndex = index

      //点击导航切换内容
      this.contentScroll.goToPage(index, 0, 0)
    },
    initScroll() {
      let _this = this
      // 初始化

      if(!this.navScroll || !this.contentScroll) {

        this.navScroll = new Bscroll(this.$refs.navWrapper, this.option)
        this.contentScroll = new Bscroll(this.$refs.listWrapper, this.contentOption)
        this.contentScroll.on('scrollEnd', (pos) => {
          
          if (this.contentActiveIndex != this.contentScroll.currentPage.pageX) {
            this.contentActiveIndex = this.contentScroll.currentPage.pageX
            // 定位导航active
            this.activeIndex = this.contentActiveIndex
            
            this.$nextTick(() => {
              //获取navWrapper长度
              let _width = this.$refs.navWrapper.clientWidth

              //获取导航active距离左边的距离
              let _left = document.querySelector('.active').offsetLeft
              let _activeWidth = document.querySelector('.active').clientWidth

              //获取整个导航滑动的距离
              let _transformX = this.$refs.content.style.transform.replace(/[^0-9\-,]/g,'').split(',')[0]
              _transformX = Math.abs(_transformX) //绝对值

              if(_transformX > (_left)) {
                this.navScroll.scrollTo(-_left, 0,400)
                return
              }

              if ((_transformX+_width) > (_left+_activeWidth)) return

              if((_activeWidth+_left) >= _width) {
                this.navScroll.scrollTo(-((_activeWidth+_left) - _width), 0,400)
              }
            })
          }
        })
      } else{
        this.navScroll.refresh();
        this.contentScroll.refresh();
      }
      

    }
  },
  mounted () {
    this.$nextTick(() => {
      this.setScrollWidth()
      this.initScroll()
    })
  }
}
</script>
