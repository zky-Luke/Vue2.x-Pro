import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/**
 * 元信息
 * meta
 * disAnimation 路由跳转是否需要动画
 */

const router = new Router({
  routes: [
    { path: '*', redirect: '/home', hidden: true },
    {
      path: '/home',
      component: () => import('@/views/home/index'),
      children: [
        {
          path: 'test',
          component: () => import('@/views/test'),
          meta: { disAnimation: false },
          children: [
            {
              path: 'demo',
              component: () => import('@/views/demo')
            }
          ]
        },
        {
          path: 'demo',
          component: () => import('@/views/demo')
        }
      ]
    },
    {
      path: '/test',
      component: () => import('@/views/test')
    }
  ]
})

// 根据具体的跳转类型更改跳转属性值，执行不同的动画
const nextDirection = (direction) => {
  let el = document.getElementById('app')
  if (el) el.setAttribute('transition-direction', direction)
}

router['_push'] = router['push']
router['_replace'] = router['replace']

// 重写路由跳转方法，设置跳转类型后跳转
router.forward = router['push'] = (target) => {
  nextDirection('forward')
  setTimeout(() => { router['_push'](target) })
}
router.replace = (target) => {
  nextDirection('forward')
  setTimeout(() => { router['_replace'](target) })
}

// 重写路由返回方法，设置跳转类型后跳转到上一页
router.back = (target) => {
  nextDirection('back')
  router.isBack = true
  if (target) {
    setTimeout(() => { router['_push'](target) })
  }
  history.go(-1)
}

export default router
