import XEAjax from 'xe-ajax'
import XEAjaxMock, { setup, GET, POST, DELETE } from 'xe-ajax-mock'

// 安装
XEAjax.use(XEAjaxMock)
// 设置虚拟服务的全局参数
setup({
  //baseURL: 'http://xuliangzhan.com',
  template: true,
  pathVariable: 'auto',
  timeout: '100-600',
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  error: true,
  log: false
})

// 虚拟GET请求
GET('services/home', (request, response) => {
  response.status = 200
  response.body = require('./json/home/data.json')
  return response
})
GET('services/buy', (request, response) => {
  response.status = 200
  response.body = require('./json/buy/data.json')
  return response
})


// 虚拟POST请求
POST('services/home', (request, response) => {
  // 模拟后台逻辑
  if (request.body.id) {
    response.status = 200
  } else {
    response.status = 500
  }
  response.body = require('./json/home/data.json')
  return response
})

// 虚拟DELETE请求
DELETE('services/home', (request, response) => {
  response.status = 200
  response.body = require('./json/home/data.json')
  return response
})