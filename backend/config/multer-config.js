const multer = require('multer')
const fs = require('fs')
const path = require('path')

const storage = multer.diskStorage({
    //Setup upload destination
    destination:(req,file,cb)=>{
        let uploadPath;
        if(req.uploadType === "book"){
            uploadPath = 'uploads/books'
        }else if(req.uploadType === "user"){
            uploadPath = 'uploads/users'
        }else{
            uploadPath = 'uploads'
        }

        //Check wether the folder exists
        fs.mkdirSync(uploadPath, {recursive: true});
        cb(null, uploadPath)
    },
    //Setup unique filename
    filename: (req, file, cb)=>{
         const uniqueSuffix = Date.now() + path.extname(file.originalname);
         cb(null, file.fieldname + "-" + uniqueSuffix);
    }
})
const upload = multer({ storage })
module.exports = upload;