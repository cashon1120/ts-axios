import { AxiosRequestConfig } from './types'
function xhr(config: AxiosRequestConfig): void {
  const { url, method = 'get', data = null, params = null } = config
  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)
  request.send(data)
}

export default xhr
