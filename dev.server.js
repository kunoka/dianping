var express = require('express')
// var config = require('./config/index')

var port = process.env.PORT || 8080
var app = express()
const path = require('path')

console.log(__dirname + '/build')
app.use(express.static(__dirname + '/build'))

app.get('/', function (req, res) {
  console.log(req.url)
  console.log(__dirname)
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
})

app.get('/hot', function (req, res) {
  console.log(req.url)
  console.log(__dirname)
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
})


module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
