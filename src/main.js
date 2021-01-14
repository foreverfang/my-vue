import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/reset.css';
import 'element-ui/lib/theme-chalk/index.css';
import Print from 'vue-print-nb'

import 'babel-polyfill'


Vue.use(Print);

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
