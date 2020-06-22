<!--滑动切换组件，已经封装好  -->
<template>
  <div class="sliding-switch">
    <!-- 导航 -->
    <div class="wrapper" ref="navWrapper">
      <ul class="content" ref="content">
        <li v-for="(item, index) in navList" :key="index" ref="item" :class="{active:navActiveIndex === index}" @click="handleClick(index)">
          <slot name="nav"></slot>
          {{item.title}}
        </li>
      </ul>
    </div>

    <!-- 内容 -->
    <section class="slideContent">
      <div class="list" ref="listWrapper">
        <section class="listGroup" ref="listGroup">
          <div v-for="(item, index) in navList" :key="index" ref="listItem" class="listItem" :style="{width:itemStyle}">
              <slot name="content"></slot>
          </div>
        </section>
    </div>
    </section>
    
    
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.wrapper{
  width: 100%;
  overflow: hidden;
}

.active{
  color: brown;
  font-weight: 600;
}
.slideContent{
  width: 100%
}
ul {
  list-style-type: none;
  padding: 0;
  white-space: nowrap;
  cursor: pointer;
    li {
    display: inline-block;
  }
}
.list{
  width: 100%;
  overflow: hidden;
  box-sizing:border-box;
}
.listGroup{
  white-space: nowrap;
}
.listItem{
  min-height: 300px;
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
        // startX: -100,
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
      itemStyle: '',
      navScroll: null,
      contentScroll: null,
      msg: '滑动',
      navActiveIndex: this.navActiveIndexProps,
      contentActiveIndex: 0,
      time: 400
    }
  },
  props:{
      //初始化导航显示的位置
      navActiveIndexProps:{
          default: 5
      },
      contentList: {
          default: () => {
              return [
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
      navList:{
          default: () => {
              return [
                {title: '栏目一'},
                {title: '栏目二'},
                {title: '栏目三'},
                {title: '栏目四'},
                {title: '栏目五'},
                {title: '栏目六'},
                {title: '栏目七'},
                {title: '栏目八'},
                {title: '栏目九'}
            ]
          }
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

      //设置每一个slide的长度
      let elListGroup = this.$refs.listGroup
      let _listWrapper = this.$refs.listWrapper.clientWidth
      this.itemStyle = _listWrapper + 'px'

      // 下面外层的长度
      let _ListLength = this.contentList.length
      elListGroup.style.width = _listWrapper * _ListLength + 'px'
    },
    handleClick(index) {

      if (this.navActiveIndex == index) return
      this.navActiveIndex = index

      //点击导航切换内容
      this.contentScroll.goToPage(index, 0, 0)

      this.$emit('switch', index)
    },
    initScroll() {
      let _this = this

      //_left获取导航active距离左边的距离,_width获取navWrapper长度
      let _left,_activeWidth,_width;
      // 初始化

      if(!this.navScroll || !this.contentScroll) {

        _left = document.querySelector('.active').offsetLeft
        _width = this.$refs.navWrapper.clientWidth
        _activeWidth = document.querySelector('.active').clientWidth

         //一进页面导航初始化位置
        if(_left >= _width) {
            this.option.startX = -(_left - _width + _activeWidth)
        }
        
        this.navScroll = new Bscroll(this.$refs.navWrapper, this.option)
        this.contentScroll = new Bscroll(this.$refs.listWrapper, this.contentOption)

        //一进页面下面内容初始化位置
        this.contentScroll.goToPage(this.navActiveIndex, 0, 0)

        this.contentScroll.on('scrollEnd', (pos) => {
          
          if (this.contentActiveIndex != this.contentScroll.currentPage.pageX) {
            this.contentActiveIndex = this.contentScroll.currentPage.pageX
            // 定位导航active
            this.navActiveIndex = this.contentActiveIndex

            this.$emit('switch', this.navActiveIndex)

            this.$nextTick(() => {
              //获取navWrapper长度
              _width = this.$refs.navWrapper.clientWidth

              //获取导航active距离左边的距离
              _left = document.querySelector('.active').offsetLeft
              _activeWidth = document.querySelector('.active').clientWidth

              //获取整个导航滑动的距离
              let _transformX = this.$refs.content.style.transform.replace(/[^0-9\-,]/g,'').split(',')[0]
              _transformX = Math.abs(_transformX) //绝对值

              if(_transformX > (_left)) {
                this.navScroll.scrollTo(-_left, 0, this.time)
                return
              }

              if ((_transformX+_width) > (_left+_activeWidth)) return

              if((_activeWidth+_left) >= _width) {
                this.navScroll.scrollTo(-((_activeWidth+_left) - _width), 0, this.time)
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
