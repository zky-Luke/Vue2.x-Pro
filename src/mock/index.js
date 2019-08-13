import Mock from 'mockjs'
import loginAPI from './login'

// 登录相关
Mock.mock('/loginTest', 'post', loginAPI.loginByUsername)

export default Mock
