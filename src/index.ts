import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import buildURL from './utils/url'
import { transformRequest } from './utils/data'

function axios(config: AxiosRequestConfig) {
  processConfig(config)
  console.log(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config)
  config.data = transformRequestData(config)
}

function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

export default axios
