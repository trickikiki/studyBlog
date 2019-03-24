var express = require('express')
var multer  = require('multer');
var fs = require('fs');
var router = express.Router()
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});
var upload = multer({ storage: storage });
router.post('/upload',upload.any(),function (req,res) {
    console.log(req.files.length)
})

router.post('/getimg',function (req,res) {
    fs.readdir('./upload',function (err,files) {
        console.log(files)
        res.send(files)
    })
})

module.exports=router