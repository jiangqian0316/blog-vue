import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-plus'
import "element-ui/lib/theme-chalk/index.css"
import axios from 'axios'

const app = createApp(App) // 将默认改写为这样
app.provide('$axios', axios)


createApp(App).use(store).use(router).use(Element).mount('#app')
