import ajax from './ajax'
import { AxiosRequestConfig } from './types'
/**
 * 调用接口的基础方法
 * @param {string} url 接口地址
 * @param {string} method 方法
 * @param {Object} params get请求需要的参数列表
 * @param {Object} data post请求需要的参数列表
 */
export function sendRequest (config: AxiosRequestConfig): Promise<any> {
  const { url, method = 'get', params, data } = config
  return new Promise((resolve, reject) => {
    ajax({
      url,
      method,
      params,
      data
    }).then((res: any) => {
      if (res.data.code === 200) {
        resolve(res.data.data)
      } else {
        console.log(`${url} 接口报错: ${res.data.msg}`)
        reject(res.data)
      }
    }).catch((err: any) => {
      console.log(`${url} 接口报错: ${err.message}`)
      err.msg = err.message
      reject(err)
    })
  })
}
