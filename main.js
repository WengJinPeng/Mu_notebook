import App from './App'
//import api request 
import '@/utils/request.js'
//import uView Ui component
import uView from '@/uni_modules/uview-ui'

// #ifndef VUE3
import Vue from 'vue'
Vue.use(uView)
Vue.config.productionTip = true
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif