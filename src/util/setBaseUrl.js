let baseUrl = "";     // 这里是一个默认的url，可以没有
switch (process.env.NODE_ENV) {
  case 'development':
    baseUrl = "http://localhost:8080"    // 这里是本地的请求
    break;
  case 'alpha':     // 注意这里的名字要和package.json添加  "alpha": "vue-cli-service build --mode alpha"设置的环境名字对应起来
    baseUrl = "http://www.xxx.com/xxx/xxx"    // 这里是测试环境中的url
    break
  case 'production':
    baseUrl = "https://www.xxx.com/xxx/xxx"   // 这里是生产环境url
    break
}

export default baseUrl;
