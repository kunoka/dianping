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
var homeAdData = require('./home/ad');
router.get('/api/homead', async (ctx, next) => {
  ctx.response.body = homeAdData;
});
// 首页 --推荐列表（猜你喜欢）
var homeListData = require('./home/list');
router.get('/api/homelist/:city/:page', async (ctx, next) => {
  // 参数
  const params = ctx.params;
  const paramsCity = params.city;
  const paramsPage = params.page;
  console.log('当前城市: ' + paramsCity);
  console.log('当前页数: ' + paramsPage);
  ctx.response.body = homeListData;
})
router.get('/api/post', async (ctx, next) => {
  ctx.response.body = JSON.stringify(ctx);
});
// 商户详情
var shopDetailData = require('./detail/info');
router.get('/api/detail/info/:id', async (ctx, next) => {
  ctx.response.body = shopDetailData;
});
// 用户点评
var commentData = require('./detail/comment');
router.get('/api/detail/comment/:id/:page', async (ctx, next) => {
  ctx.response.body = commentData;
  // console.log(commentData);
});
// 订单列表
var orderList = require('./orderlist/orderList');
router.get('/api/orderlist/:username', async(ctx, next) => {
  ctx.response.body = orderList;
});
// 提交评论
router.post('/api/submitComment', async(ctx, next) => {
  console.log('提交评论');
  ctx.response.body =  {
    errno: 0,
    msg: 'ok'
  };
});
app.use(router.routes());
// 在端口3000监听:
app.listen(3003);
console.log('app started at port 3003...');