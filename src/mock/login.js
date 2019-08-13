import Mock from 'mockjs'

const List = []
const count = 5

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    username: '@name()'
  }))
}

const userMap = {
  admin: {
    list: List
  },
  editor: {
    list: List
  }
}

export default {
  loginByUsername: config => {
    const { username } = JSON.parse(config.body)
    return userMap[username]
  }
}
