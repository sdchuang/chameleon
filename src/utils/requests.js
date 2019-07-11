
import cml from 'chameleon-api'
import constants from './urls'
import { api } from './api'

const { HOST_BASE, APIKEY } = constants;
const baseUrl = HOST_BASE;


function checkStatus(status) {
  return status >= 200 && status < 300 || status === 304;
}
// 公共参数
function extra(options) {
  var token = {};
  options.params = { token, ...options.params };
}

// 
function request(method, options) {
  var newUrl = `${baseUrl}${api[options.url]}`;
  if (options.arg) newUrl = `${baseUrl}${api[options.url]}/${options.arg}`;

  return new Promise((resolve, reject) => {
    // extra(options);
    cml.request({
      url: newUrl,
      data: options.params,
      method: method,
      header: options.header || {
        'apikey': APIKEY
      }
    })
      .then(res => {
        // console.log(res);
        const isSuccess = checkStatus(res.code);
        if (isSuccess) {
          console.log('111')
          resolve(res.data)
        } else {
          cml.showToast({
            message: '网络错误',
            duration: 2000
          })
        }
      })
  })

}

export {
  request
}
