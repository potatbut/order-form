import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TextareaAutosize from 'vue-textarea-autosize'
import Clipboard from 'v-clipboard'

Vue.use(TextareaAutosize)
Vue.config.productionTip = false
Vue.use(Clipboard)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
