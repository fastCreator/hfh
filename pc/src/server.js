import APIConnection from './APIConnection'
var apiInfoData = {}
var apiCallback = {}
window.apiconn = null

function getData (attr, callback) {
  // attr.person_id=person_id;
  window.console.info('send:', JSON.stringify(attr))
  // 发送信息
  apiCallback[attr.obj + '_' + attr.act] = function (data) {
    // window.console.log("获取信息:",data);
    if (callback) {
      callback(data)
    }
  }
  apiconn.send_obj(attr)
}

function startApiconn () {
  // 全局SDK用的变量 【初始化和登录 A】
  apiconn = new APIConnection()
  // 服务端连接状态改变了的通知 【初始化和登录 B】
  apiconn.state_changed_handler = function (ds) {
    window.console.log(ds, 'state: ' + apiconn.from_state, ' => ' + apiconn.conn_state)
    // 这时候成功进入登录状态了。没登录时候只是访客状态。
    if (apiconn.conn_state == 'IN_SESSION') {
      sessionStorage.setItem('login_name', apiconn.login_name)
      sessionStorage.setItem('login_passwd', apiconn.login_passwd)
      // 连接状态，表明SDK和服务端已经成功连上，获得了 server_info
      // 客户端可以允许用户输入密码（或从客户端保存密码）进行登录了
    } else if (apiconn.conn_state == 'LOGIN_SCREEN_ENABLED') {

      // 自动登录指定账户
      // apiconn.credential(login_name, login_passwd);
      // apiconn.connect();
      // auto re login after page refresh
      // 处理网页刷新自动登录的机制
    }
  }
  // SDK 说服务端有数据过来了，这可以是请求的响应，或推送 【初始化和登录 C】
  apiconn.response_received_handler = function (jo) {
    var key = jo.obj + '_' + jo.act
    window.console.log(key, 'JO:', jo)
    if (key == 'server_info') {
      apiInfoData = jo
    }
    if (apiCallback[key]) {
      apiCallback[key](jo)
    }
  }
}

var init = function (startCall) {
  startApiconn()
  apiconn.wsUri = 'ws://47.104.245.204:51717/hfh2' // "ws://116.62.127.156:51717/xgzx";
  var server_infoCall = function () {
    // 这是入口
    window.console.info('start!!')
    if (startCall) {
      startCall()
    }
  }

  apiCallback['server_info'] = function () {
    server_infoCall()
  }
  apiconn.connect()
}

var server = {

  // 登录
  login: function (account, code, call) {
    // var type = 1
    apiCallback['person_login'] = function (data) {
      // 这是入口
      window.console.info('login回调!!', data)
      if (call) {
        call(data)
      }
    }
    var attr = {
      'ctype': 'admin',
      'login_name': account,
      'login_passwd': code
    }
    apiconn.credentialx(attr)
    apiconn.connect()
    // var attr = {
    //   'access_token': access_token,
    //   'ctype': 'user',
    //   'openid': openid
    // }
    // apiconn.credentialx(attr)
    // apiconn.connect()
  },

  admin_accountlist: function (call) {
    // 账号列表
    var attr = {
      'obj': 'admin',
      'act': 'accountlist'
    }
    getData(attr, function (data) {
      if (call) {
        call(data)
      }
    })
  },
  search_tailored: function (name, call) {
    // 定制商城商品
    var attr = {
      'obj': 'product',
      'act': 'search_tailored',
      product_name: name
    }
    getData(attr, function (data) {
      if (call) {
        call(data)
      }
    })
  },
  product_search_point: function (name, call) {
    // 定制商城商品
    var attr = {
      'obj': 'product',
      'act': 'list_point ',
      product_name: name
    }
    getData(attr, function (data) {
      if (call) {
        call(data)
      }
    })
  },
  add_tailored: function (obj, call) {
    // 定制商城商品
    var attr = {
      'obj': 'product',
      'act': 'add_tailored'
    }
    getData(Object.assign(attr, obj), function (data) {
      if (call) {
        call(data)
      }
    })
  },
  edit_tailored: function (obj, call) {
    // 定制商城商品
    var attr = {
      'obj': 'product',
      'act': 'edit_tailored',
      product_id: obj._id
    }
    getData(Object.assign(attr, obj), function (data) {
      if (call) {
        call(data)
      }
    })
  },
  orderDetails: function (id, call) {
    // 详情
    var attr = {
      'obj': 'order',
      'act': 'details',
      order_id: id
    }
    getData(attr, function (data) {
      if (call) {
        call(data)
      }
    })
  },
  p_order_cancel: function (id, numb, call) {
    // 详情
    var attr = {
      'obj': 'order',
      'act': 'express',
      order_id: id,
      tracking_number: numb
    }
    getData(attr, function (data) {
      if (call) {
        call(data)
      }
    })
  },
  p_order_finish: function (id, call) {
    // 详情
    var attr = {
      'obj': 'order',
      'act': 'finish',
      order_id: id
    }
    getData(attr, function (data) {
      if (call) {
        call(data)
      }
    })
  },
  p_order_express: function (id, call) {
    // 详情
    var attr = {
      'obj': 'order',
      'act': 'cancel',
      order_id: id
    }
    getData(attr, function (data) {
      if (call) {
        call(data)
      }
    })
  },
  category_inquire: function (call) {
    // 商品分类列表
    var attr = {
      'obj': 'category',
      'act': 'inquire'
    }
    getData(attr, function (data) {
      if (call) {
        call(data.category_list)
      }
    })
  },
  category_add: function (title, call) {
    // 商品分类列表
    var attr = {
      'obj': 'category',
      'act': 'add',
      title: title
    }
    getData(attr, function (data) {
      if (call) {
        call(data.category_list)
      }
    })
  },
  category_del: function (title, call) {
    // 商品分类列表
    var attr = {
      'obj': 'category',
      'act': 'del',
      title: title
    }
    getData(attr, function (data) {
      if (call) {
        call(data.category_list)
      }
    })
  },
  orderclassify: function (classify, call) {
    // 商品分类列表
    var attr = {
      'obj': 'order',
      'act': 'classify',
      class_to_do: classify
    }
    getData(attr, function (data) {
      if (call) {
        call(data)
      }
    })
  },
  onoffsale_tailored: function (operate, id, call) {
    // 上下架
    var attr = {
      'obj': 'product',
      'act': 'onoffsale_tailored',
      operate_to_do: operate,
      _id: id
    }
    getData(attr, function (data) {
      if (call) {
        call(data)
      }
    })
  },
  ordersearch: function (name, call) {
    // 商品分类列表
    var attr = {
      'obj': 'order',
      'act': 'search',
      product_name: name
    }
    getData(attr, function (data) {
      if (call) {
        call(data)
      }
    })
  }
}
init()
// init(function () {
//   // apiInfoData.server_info.download_path
//   window.console.log(apiInfoData)
//   server.login('xwjc2018', 'aa', function (data) { })
// })

window.server = server
