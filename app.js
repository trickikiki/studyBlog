var path = require('path')
var bodyParser = require('body-parser');

var router=require(path.join(__dirname,'server/router'));
var express = require('express')
var app = express()
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//app.use(express.static(path.resolve(__dirname,'./dist')))
app.use('/',router);
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.listen(4444,function () {
    console.log('server running on http://localhost:4444')
})
