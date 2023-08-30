/*
 * @Author       : 蔡诗涵
 * @Date         : 2023-07-06 10:31:52
 * @LastEditTime : 2023-07-06 16:40:24
 * @Description  :
 *
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/comment.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
