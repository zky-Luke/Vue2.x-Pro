import axios from '../api' // 倒入 api

// 单独倒出
export const query = params => {
  return axios({
    url: '/data/sk/101010100.html',
    method: 'get',
    params
  })
}

// 测试
export const test = params => {
  return axios({
    url: '/test',
    method: 'get',
    params
  })
}

// 默认全部倒出
export default {
  query,
  test
}
