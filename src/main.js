import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/reset.css';
import 'element-ui/lib/theme-chalk/index.css';
import Print from 'vue-print-nb'
import store from './store'

import 'babel-polyfill'


Vue.use(Print);

Vue.config.productionTip = false

// 设置自定义options合并策略
Vue.config.optionMergeStrategies.customOption = function (parentVal, childVal) {
    return parentVal ? (parentVal + childVal) : childVal
}

Vue.use(ElementUI)

new Vue({
    customOption: 2,
    router,
    store,
    render: h => h(App)
}).$mount('#app')
