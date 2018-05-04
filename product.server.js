var express = require('express')
// var config = require('./config/index')

var port = process.env.PORT || 9090
var app = express()
var router = express.Router()
// router.get('/',function(req, res, next) {
//   console.log(req.url)
//   req.url  = '/index.html';
//   next()
// })
router.get('*',function(req, res) {
  console.log(req.url)
  console.log(__dirname)
  res.sendFile( __dirname + '/build/' + 'index.html' );
})
app.use(router)

//首先
var appData = require('./data.json') //加载本地文件
var seller = appData.seller //获取对应的本地数据
var goods = appData.goods
var ratings = appData.ratings

router.get('/api/seller', (req, res) => {
  res.json({
    errno: 0,
    data: seller
  })//接口返回json数据，上面配置的数据seller就赋值给data请求后调用
}),
router.get('/api/goods', (req, res) => {
  res.json({
    errno: 0,
    data: goods
  })
}),
router.get('/api/ratings', (req, res) => {
  res.json({
    errno: 0,
    data: ratings
  })
})

app.use('/api', router)
app.use(express.static('./build'))
module.exports = app.listen(port, function(err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
