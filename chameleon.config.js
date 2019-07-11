
import {HOST_IMG,HOST_BASE} from './src/utils/urls'

// 设置静态资源的线上路径
const publicPath = HOST_IMG;
// 设置api请求前缀
const apiPrefix = HOST_BASE;

cml.config.merge({
  templateLang: "cml",
  templateType: "html",
  // platforms: ["web","weex","wx","alipay","baidu"],
  platforms: ["web","wx","baidu"],
  buildInfo: {
    wxAppId: '123456'
  },
  wx: {
    dev: {
    },
    build: {
      apiPrefix
    }
  },
  web: {
    dev: {
      analysis: false,
      console: false,
      hot:true,
      apiPrefix
    },
    build: {
      analysis: false,
      publicPath: `${publicPath}/web/`,
      apiPrefix
    }
  },
  weex: {
    dev: {
    },
    build: {
      publicPath: `${publicPath}/weex/`,
      apiPrefix
    },
    custom: {
      publicPath: `${publicPath}/wx/`,
      apiPrefix
    }
  }
})

