# charger

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

1. 添加less: yarn add less less-loader
2. 安装sass-resources-loader: 全局注册less
3. 安装vuex
4. 路由使用懒加载功能（开发环境每次更改代码触发热更新都会变得非常的慢。所以建议只在生产环境之中使用路由懒加载功能。 安装cross-env，修改package.json及.babelrc）
5. 安装mockJs
6. 安装vue-i18n
7. 优雅使用icons
8. 全局捕获错误、路由守卫
9. 安装amfe-flexible及px2rem-loader自适应
10. 添加测试testing、预生产presentation、生产production环境
11. axios二次封装