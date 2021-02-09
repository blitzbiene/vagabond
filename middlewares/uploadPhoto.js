const multer = require("multer");
const {v4:uuid} = require("uuid")
const MIME_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg'
  };

const upload = multer({
    limits: 5,
    storage:multer.diskStorage({
        destination:(req,file,cb)=>{
             
            cb(null,`${__dirname}/../uploads/images`);
        },
        filename:(req,file,cb)=>{
             
            const ext = MIME_TYPE_MAP[file.mimetype];
            cb(null,uuid()+'.'+ext);
        }
    }),
    fileFilter:(req,file,cb)=>{
        const isvalid = !!MIME_TYPE_MAP[file.mimetype];
        cb(null,isvalid);
    },
});

module.exports = upload;