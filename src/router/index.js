/*
 * @Author: your name
 * @Date: 2019-03-14 11:09:41
 * @LastEditTime : 2020-01-16 17:14:52
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /xw-plugin/src/router/index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import switchComponents from '@/components/pages/switch'
import suspensionBall from '@/components/pages/suspensionBall'
import inertialFloating from '@/components/pages/inertialFloating'
import backTop from '@/components/pages/backTop'
import inputBox from '@/components/pages/inputBox'
import knowledge from '@/components/pages/knowledge'
import test from '@/components/pages/test'
import savePicture from '@/components/pages/savePicture'
import moveButton from '@/components/pages/button'
import vueSwiperPc from '@/components/pages/vue-swiper-pc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/switchComponents',
      name: 'switchComponents',
      component: switchComponents
    },
    {
      path: '/suspensionBall',
      name: 'suspensionBall',
      component: suspensionBall
    },
    {
      path: '/inertialFloating',
      name: 'inertialFloating',
      component: inertialFloating
    },
    {
      path: '/backTop',
      name: 'backTop',
      component: backTop
    },
    {
      path: '/inputBox',
      name: 'inputBox',
      component: inputBox
    },
    {
      path: '/knowledge/:idx',
      name: 'knowledge',
      component: knowledge
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/savePicture',
      name: 'savePicture',
      component: savePicture
    },
    {
      path: '/moveButton',
      name: 'moveButton',
      component: moveButton
    },
    {
      path: '/vueSwiperPc',
      name: 'vueSwiperPc',
      component: vueSwiperPc
    }
  ]
})
