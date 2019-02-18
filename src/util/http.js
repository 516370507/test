import axios from 'axios'
import baseURL from './setBaseUrl.js'

axios.defaults.timeout = 5000
axios.defaults.withCredentials = true
// axios.defaults.baseURL = 'http://localhost:8083/product_manage_admin/'
axios.defaults.baseURL = baseURL

// request请求拦截器
axios.interceptors.request.use(
  config => {
    // const token = getCookie('session')
    config.data = JSON.stringify(config.data)
    config.header = {
      'Content-Type': 'application/x-www-form-uriencoded'
    }
    // if (token) {
    //   config.params = { token: token }
    // }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// respone拦截器
// service.interceptors.response.use()

// GET
export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

// POST
export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(
      response => {
        resolve(response.data)
      },
      err => {
        reject(err)
      }
    )
  })
}

// patch
export function patch (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data).then(
      response => {
        resolve(response.data)
      },
      err => {
        reject(err)
      }
    )
  })
}

// put
export function put (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data).then(
      response => {
        resolve(response.data)
      },
      err => {
        reject(err)
      }
    )
  })
}
