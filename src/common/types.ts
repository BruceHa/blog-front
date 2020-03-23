export type Method = "get" | "GET" | "delete" | "DELETE" | "head" | "HEAD" | "options" | "OPTIONS" | "post" | "POST" | "put" | "PUT" | "patch" | "PATCH" | "link" | "LINK" | "unlink" | "UNLINK" | undefined


export interface AxiosRequestConfig {
  url: string
  method?: Method,
  params?: any
  data?: any,
  [propName: string]: any
}


export interface login {
  userName: string
  password: string
}

export interface register {
  email: string
  password: string
}
