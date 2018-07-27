import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui'
import router from './router'
import store from './store'
import Components from './components/install.js'
import 'mint-ui/lib/style.min.css'
import { InputNumber, Checkbox } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './server'
import VueQrcode from '@xkeshi/vue-qrcode'
import './utils'

Vue.component(VueQrcode.name, VueQrcode)
Vue.component(InputNumber.name, InputNumber)
Vue.component(Checkbox.name, Checkbox)

Vue.config.productionTip = false
Vue.use(Components)
Vue.use(Components)
Vue.use(Mint)
window.init(() => {
  window.server.login(() => {
    let vm = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
    window.console.log(vm)
  })
}
)
