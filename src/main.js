// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
// 引入路由
import router from './router';
// 引入状态管理
import store from './vuex/store';
// 引入icon
import './assets/icon/iconfont.css'
// 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';//样式文件
//引入echarts
import Echarts from 'echarts'
import axios from 'axios';
Vue.use(ElementUI);
Vue.use(Echarts);
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;


// 过滤器
// import * as custom from './utils/util'

// Object.keys(custom).forEach(key => {
//     Vue.filter(key, custom[key])
// })
// router.beforeEach((to, from, next) => {
//   let token = localStorage.getItem('mytoken')
//   // 如果已经登录，那我不干涉你，让你随便访问
//   if (token) {
//     next()
//   } else {
//     if (to.path !== '/login') {
//       // 如果没有登录，但你访问其他需要登录的页面，那我就让你跳到登录页面去
//       next({path: '/login'})
//     } else {
//       // 如果没有登录，但你访问的login，那就不干涉你，让你访问
//       next()
//     }
//   }
// })

new Vue({
   
    router,
    store, //使用store vuex状态管理
   
    data: {
        // 空的实例放到根组件下，所有的子组件都能调用
        Bus: new Vue()
    },
    render: h => h(App)
 
}).$mount("#app")