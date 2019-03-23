var express = require('express')
var multer  = require('multer');
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

module.exports=router