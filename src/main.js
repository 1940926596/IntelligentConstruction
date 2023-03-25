import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入Element-Plus组件库
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import { s3Layer } from 'vue3-layer';
import 'vue3-layer/dist/s3Layer.css';

const app = createApp(App);

app.component('s3-layer', s3Layer);
app.use(ElementPlus)
app.use(store)
app.use(router)
app.config.globalProperties.$login=false;

app.mount('#app')
