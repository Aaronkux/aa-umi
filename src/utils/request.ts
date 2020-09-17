import axios, {CancelToken, Canceler, Method} from 'axios'
import { cloneDeep } from 'lodash'
const { parse, compile } = require("path-to-regexp")
import { message } from 'antd'

// const { CancelToken } = axios

interface MyWindow extends Window {
  cancelRequest: Map<Symbol, { pathname: string; cancel: Canceler }>;
}
declare var window: MyWindow;
window.cancelRequest = new Map()

interface PropsType {
  data: any,
  url: string,
  method: Method,
  params?: any,
  cancelToken?: CancelToken 
}
export default function request(options: PropsType) {
  let { data, url, method = 'get' } = options
  const cloneData = cloneDeep(data)

  try {
    let domain = ''
    const urlMatch = url.match(/[a-zA-z]+:\/\/[^/]*/)
    if (urlMatch) {
      ;[domain] = urlMatch
      url = url.slice(domain.length)
    }

    const match = <any[]>parse(url)
    url = compile(url)(data)

    for (const item of match) {
      if (item instanceof Object && item.name in cloneData) {
        delete cloneData[item.name]
      }
    }
    url = domain + url
  } catch (e) {
    message.error(e.message)
  }

  options.url = url
  options.params = cloneData
  options.cancelToken = new axios.CancelToken(cancel => {
    window.cancelRequest.set(Symbol(Date.now()), {
      pathname: window.location.pathname,
      cancel,
    })
  })

  return axios(options)
    .then(response => {
      const { statusText, status, data } = response

      let result: any = {}
      if (typeof data === 'object') {
        result = data
        if (Array.isArray(data)) {
          result.list = data
        }
      } else {
        result.data = data
      }

      return Promise.resolve({
        success: true,
        message: statusText,
        statusCode: status,
        ...result,
      })
    })
    .catch(error => {
      const { response, message } = error

      if (String(message) === 'CANCEL_REQUEST_MESSAGE') {
        return {
          success: false,
        }
      }

      let msg
      let statusCode

      if (response && response instanceof Object) {
        const { data, statusText } = response
        statusCode = response.status
        msg = data.message || statusText
      } else {
        statusCode = 600 
        msg = error.message || 'Network Error'
      }

      /* eslint-disable */
      return Promise.reject({
        success: false,
        statusCode,
        message: msg,
      })
    })
}
