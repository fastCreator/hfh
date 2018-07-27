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
var search = decodeURI(location.search)
var searchObj = {}
if (search != '') {
  search.substr(1, search.length)
    .split('&').forEach(function (data) {
      var datas = data.split('=')
      searchObj[datas[0]] = datas[1]
    })
}
// if (searchObj.openid == undefined && !location.host.match('127.0.0.1')) {
//   location.href = 'http://47.104.245.204/cgi-bin/get.pl'
// }
searchObj = {'openid': 'o30hO0XNsn-AUaGSAI8-6Sjiq4fU', 'access_token': '12_ZUUdOUxkpnLxql85zxgVs1jKFbDjf2jn-9z8X1JvFHGekR3hnhOVYj9z1pzuHo20aW4eALPCoIoYxY0YiV5DAAContent-Type:%20text/html'}
var server = {

  // 登录
  login: function (call) {
    apiCallback['person_login'] = function (data) {
      // 这是入口
      if (call) {
        call(data)
      }
    }
    var openid = searchObj.openid
    var accessToken = searchObj.access_token
    var attr = {
      'access_token': accessToken,
      'ctype': 'user',
      'openid': openid
    }
    apiconn.credentialx(attr)
    apiconn.connect()
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
  to_cart_point: function (id, call) {
    var attr = {
      'obj': 'product',
      'act': 'to_cart_point',
      product_id: id,
      product_number: 1
    }
    getData(attr, function (data) {
      if (call) {
        call(data)
      }
    })
  },
  collection_delete_point: function (id, call) {
    var attr = {
      'obj': 'product',
      'act': 'collection_delete_point',
      collection_id: id
    }
    getData(attr, function (data) {
      if (call) {
        call(data)
      }
    })
  },
  collection_delete_tailored: function (id, call) {
    var attr = {
      'obj': 'product',
      'act': 'collection_delete_tailored',
      collection_id: id
    }
    getData(attr, function (data) {
      if (call) {
        call(data)
      }
    })
  },
  collection_display_point: function (call) {
    var attr = {
      'obj': 'product',
      'act': 'collection_display_point'
    }
    getData(attr, function (data) {
      if (call) {
        call(data)
      }
    })
  },
  fansShow: function (call) {
    var attr = {
      'obj': 'fans',
      'act': 'show'
    }
    getData(attr, function (data) {
      if (call) {
        call(data)
      }
    })
  },
  details_show: function (call) {
    var attr = {
      'obj': 'point',
      'act': 'details_show'
    }
    getData(attr, function (data) {
      if (call) {
        call(data)
      }
    })
  },
  collection_display_tailored: function (call) {
    var attr = {
      'obj': 'product',
      'act': 'collection_display_tailored'
    }
    getData(attr, function (data) {
      if (call) {
        call(data)
      }
    })
  },
  person_addr_add: function (obj, call) {
    var attr = {
      'obj': 'person',
      'act': 'addr_add'
    }
    getData(Object.assign(attr, obj), function (data) {
      if (call) {
        call(data)
      }
    })
  },
  person_addr_details: function (call) {
    var attr = {
      'obj': 'person',
      'act': 'addr_details'
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
  p_cart_number_edit_tailored: function (id, num, call) {
    var attr = {
      'obj': 'cart',
      'act': 'number_edit_tailored',
      cart_id: id,
      number: num + ''
    }
    getData(attr, function (data) {
      if (call) {
        call(data)
      }
    })
  },
  p_order_details: function (id, call) {
    var attr = {
      'obj': 'order',
      'act': 'details',
      'order_id': id
    }
    getData(attr, function (data) {
      if (call) {
        call(data)
      }
    })
  },
  p_cart_number_edit_point: function (id, num, call) {
    var attr = {
      'obj': 'cart',
      'act': 'number_edit_point',
      cart_id: id,
      number: num + ''
    }
    getData(attr, function (data) {
      if (call) {
        call(data)
      }
    })
  },
  product_collection_point: function (id, call) {
    var attr = {
      'obj': 'product',
      'act': 'collection_point',
      product_id: id,
      type: 'product_collection_point'
    }
    getData(attr, function (data) {
      if (call) {
        call(data)
      }
    })
  },
  product_collection_tailored: function (id, call) {
    var attr = {
      'obj': 'product',
      'act': 'collection_tailored',
      product_id: id,
      type: 'product_collection_tailored'
    }
    getData(attr, function (data) {
      if (call) {
        call(data)
      }
    })
  },
  list_create_point: function (call) {
    var attr = {
      'obj': 'order',
      'act': 'list_create_point'
    }
    getData(attr, function (data) {
      if (call) {
        call(data)
      }
    })
  },
  to_cart_tailored: function (id, call) {
    var attr = {
      'obj': 'product',
      'act': 'to_cart_tailored',
      product_id: id,
      product_number: 1
    }
    getData(attr, function (data) {
      if (call) {
        call(data)
      }
    })
  },
  product_list_tailored: function (id, call) {
    var attr = {
      'obj': 'product',
      'act': 'list_tailored',
      category_id: id,
      sale_state: ''
    }
    getData(attr, function (data) {
      if (call) {
        call(data)
      }
    })
  },
  product_list_point: function (id, call) {
    var attr = {
      'obj': 'product',
      'act': 'list_point',
      category_id: id,
      sale_state: ''
    }
    getData(attr, function (data) {
      if (call) {
        call(data)
      }
    })
  },
  cart_details_point: function (call) {
    var attr = {
      'obj': 'cart',
      'act': 'details_point'
    }
    getData(attr, function (data) {
      if (call) {
        call(data)
      }
    })
  },
  cart_details_tailored: function (call) {
    var attr = {
      'obj': 'cart',
      'act': 'details_tailored'
    }
    getData(attr, function (data) {
      if (call) {
        call(data)
      }
    })
  }
}

// init(function () {
//   // apiInfoData.server_info.download_path
//   window.console.log(apiInfoData)
//   server.login('xwjc2018', 'aa', function (data) { })
// })

window.server = server
window.init = init
