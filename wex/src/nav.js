import Home from './views/Home.vue'
import Page from './views/Page.vue'
let nav = [
  {
    path: '/',
    component: Home,
    children: [
      {
        name: 'jfsc',
        meta: {
          title: '积分商城'
        }
      },
      {
        name: 'dzsc',
        meta: {
          title: '定制商城'
        }
      },
      {
        name: 'cart',
        meta: {
          title: '购物车'
        }
      },
      {
        name: 'my',
        meta: {
          title: '我的'
        }
      }
    ]
  },
  {
    path: '/page',
    component: Page,
    children: [
      {
        name: 'jfscd',
        meta: {
          title: '详情页'
        }
      },
      {
        name: 'dzscd',
        meta: {
          title: '详情页'
        }
      },
      {
        name: 'cartd',
        meta: {
          title: '确认订单'
        }
      },
      {
        name: 'share',
        meta: {
          title: '我要分享'
        }
      },
      {
        name: 'fans',
        meta: {
          title: '我的粉丝'
        }
      },
      {
        name: 'recharge',
        meta: {
          title: '充值'
        }
      },
      {
        name: 'jf',
        meta: {
          title: '积分'
        }
      },
      {
        name: 'zdmx',
        meta: {
          title: '账单明细'
        }
      },
      {
        name: 'jfzz',
        meta: {
          title: '积分转赠',
          right: {
            label: '收码',
            url: '/page/ewm'
          }
        }
      },
      {
        name: 'scewm',
        meta: {
          title: '生成二维码'
        }
      },
      {
        name: 'wdsc',
        meta: {
          title: '我的收藏'
        }
      },
      {
        name: 'jsdz',
        meta: {
          title: '寄送地址'
        }
      },
      {
        name: 'xjdz',
        meta: {
          title: '新建地址'
        }
      },
      {
        name: 'bzykf',
        meta: {
          title: '帮助与客服'
        }
      },
      {
        name: 'ewm',
        meta: {
          title: '二维码'
        }
      }
    ]
  }
]
nav[0].children.forEach(it => {
  it.component = require(`./views/home/${it.name}.vue`).default
  it.path = `/home/${it.name}`
})
nav[1].children.forEach(it => {
  it.component = require(`./views/page/${it.name}.vue`).default
  it.path = `/page/${it.name}`
})
nav[0].redirect = nav[0].children[0].path

export default nav
