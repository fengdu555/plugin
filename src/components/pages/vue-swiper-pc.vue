<template>
  <div class="hello">
    <h1>swiper-pc-01</h1>
    <div class="swiperGroup">
      <swiper :options="swiperOption01" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>I'm Slide 1</swiper-slide>
        <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
        <swiper-slide>I'm Slide 4</swiper-slide>
        <swiper-slide>I'm Slide 5</swiper-slide>
        <swiper-slide>I'm Slide 6</swiper-slide>
        <swiper-slide>I'm Slide 7</swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev swiper-button-prev-one" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-next-one" slot="button-next"></div>
      </swiper>
    </div>

    <h1>swiper-pc-02</h1>
    <div class="swiperGroup">
      <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
        <swiper-slide class="slide-1">1</swiper-slide>
        <swiper-slide class="slide-2">2</swiper-slide>
        <swiper-slide class="slide-3">3</swiper-slide>
        <swiper-slide class="slide-4">4</swiper-slide>
        <swiper-slide class="slide-5">5</swiper-slide>
        <div class="swiper-button-next swiper-button-next-top swiper-button-white" slot="button-next"></div>
        <div class="swiper-button-prev swiper-button-prev-top swiper-button-white" slot="button-prev"></div>
      </swiper>
    </div>
    <div class="swiperGroup-Thumbs">
      <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
        <swiper-slide class="slide-1">1</swiper-slide>
        <swiper-slide class="slide-2">2</swiper-slide>
        <swiper-slide class="slide-3">3</swiper-slide>
        <swiper-slide class="slide-4">4</swiper-slide>
        <swiper-slide class="slide-5">5</swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'HelloWorld',
  data () {
    return {
      swiperOption01:{
        // pagination:{//如果需要分页器
        //   el: '.swiper-pagination',
        //   clickable: false
        // },
         navigation: {// 如果需要前进后退按钮
          nextEl: '.swiper-button-next-one', 
          prevEl: '.swiper-button-prev-one'
        },
        slidesPerView: 3,
        spaceBetween: 0,//间距
        centeredSlides: true,
        grabCursor:true,//鼠标成手状
        loop: true,// 循环模式选项
        watchSlidesProgress : true,
        on: {
          progress: function(progress) {
          //可以调整 slidesPerView,_translateX,x,y来控制往外还是往里

            let _translateX = 220 //控制层叠长短
            let x = 0.1
            let y = 1

            for (let i = 0; i < this.slides.length; i++) {
              let slide = this.slides.eq(i);
              let slideProgress = this.slides[i].progress;
              let modify = 1;
              if (Math.abs(slideProgress) > 1) {
                modify = (Math.abs(slideProgress) - 1) * x + y;
              }

              let translate = slideProgress * modify * _translateX + 'px';
              let scale = 1 - Math.abs(slideProgress) / 5;
              let zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
              slide.transform('translateX(' + translate + ') scale(' + scale + ')');
              slide.css('zIndex', zIndex);
              slide.css('opacity', 1);
              if (Math.abs(slideProgress) > 3) {
                slide.css('opacity', 0);
              }
            }
          },
          setTransition: function(transition) {
            for (let i = 0; i < this.slides.length; i++) {
              let slide = this.slides.eq(i)
              slide.transition(transition);
            }
          }
        }
      },
      swiperOptionTop: {
          spaceBetween: 10,
          loop: true,
          loopedSlides: 5, //looped slides should be the same
          navigation: {
            nextEl: '.swiper-button-next-top',
            prevEl: '.swiper-button-prev-top'
          }
      },
      swiperOptionThumbs: {
          spaceBetween: 10,
          slidesPerView: 3,
          loop: true,
          loopedSlides: 5, //looped slides should be the same
          slideToClickedSlide: true,
        }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  methods:{},
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper
      const swiperThumbs = this.$refs.swiperThumbs.swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
div{
  margin: 0 auto;
}
.test{
  font-size: 30px;
  background-color: red;
}
.swiperGroup{
  width: 1000px;
  height: 300px;
  position: relative;
  .swiper-container{
    height: 300px;
  }
  .swiper-slide{
    width: 300px;
    color: #fff;
    text-align: center;
    line-height: 300px;
    // transition: 300ms;
    // transform: scale(0.8);
    z-index: 90;
    &:nth-child(odd){
      background-color: cadetblue
    }
    &:nth-child(even){
      background-color: #42b983
    }
  }
  // .swiper-slide-active,.swiper-slide-duplicate-active{
  //     transform: scale(1);
  //     z-index: 100;
	// }
}
.swiperGroup-Thumbs{
  width: 1000px;
  height: 300px;
  position: relative;
  .swiper-container{
    height: 300px;
  }
  .swiper-slide{
    width: 300px;
    color: #fff;
    text-align: center;
    line-height: 300px;
    // transition: 300ms;
    // transform: scale(0.8);
    z-index: 90;
    background-color: burlywood
  }
  // .swiper-slide-active,.swiper-slide-duplicate-active{
  //     transform: scale(1);
  //     z-index: 100;
	// }
}
</style>
