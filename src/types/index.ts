export type Method =
  | 'get'
  | 'GET'
  | 'post'
  | 'POST'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'OPTIONS'
  | 'options'
  | 'put'
  | 'PUT'

export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
}
