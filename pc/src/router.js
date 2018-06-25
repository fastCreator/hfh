import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import nav from './nav.js'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Home
    }
  ].concat(function () {
    let navs = []
    nav.forEach(it => {
      it.children.forEach(jt => {
        let path = `/${it.name}/${jt.name}`
        navs.push({
          path: path,
          component: require(`./views${path}.vue`).default
        })
      })
    })
    return navs
  }())
})
