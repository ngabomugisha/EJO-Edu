var multer = require('multer');
var path = require('path')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/public-files/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname) //Appending extension
  }
})

var upload = multer({ storage: storage });

export default upload;