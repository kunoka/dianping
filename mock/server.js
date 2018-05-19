const Koa = require('koa');
const router = require('koa-router')();
const koaBody = require('koa-body')();
const app = new Koa();
// 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx, next) => {
  console.log(ctx.request.path + ':' + ctx.request.method);
  await next();
});

router.get('/', async (ctx, next) => {
  ctx.response.body = '<h1>Index</h1>';
});
router.get('/api', async (ctx, next) => {
  ctx.response.body = 'test data';
});
router.get('/api/1', async (ctx, next) => {
  ctx.response.body = 'test data 1';
});
router.get('/api/2', async (ctx, next) => {
  ctx.response.body = {
    a: 1,
    b: '123'
  };
});
// 首页 -- 广告(超值特惠)
var homeAdData  =require('./home/ad');
router.get('/api/homead', async (ctx, next) => {
  ctx.response.body = homeAdData;
});
// 首页 --推荐列表（猜你喜欢）
var homeListData = require('./home/list');
router.get('/api/homelist/:city/:page', async(ctx, next) => {
  // 参数
  console.log('---------------')
  console.log(ctx.req);
  console.log(ctx.response);
  const params = ctx.params;
  console.log('==============');
  console.log(params)
  const paramsCity = params.city;
  const paramsPage = params.page;
  console.log('当前城市: ' + paramsCity);
  console.log('当前页数: ' + paramsPage);
  ctx.response.body = homeListData;
})
router.get('/api/post', async (ctx, next) => {
  ctx.response.body = JSON.stringify(ctx);
});
app.use(router.routes());
// 在端口3000监听:
app.listen(3003);
console.log('app started at port 3003...');