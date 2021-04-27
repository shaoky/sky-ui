import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
// import Sky from '@sky/button'
// import '../packages/sass/src/index.scss'
console.log(ElementPlus)
// console.log(Sky)
createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus)
  // .use(Sky)
  .mount('#app')
