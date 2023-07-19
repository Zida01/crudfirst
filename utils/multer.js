
/**
 * CHECK MULTER CODE 
 * 
 * 
 */


const multer = require('multer');
const path = require('path')
require('dotenv').config()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, './uploads');
        } else {
            cb({ message: 'this file is neither a video or image file' }, false)
        }
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})



module.exports = multer({ storage: storage })
















// const multer = require('multer');
// const path = require('path')
// const cloudinary = require("cloudinary").v2;
// const { CloudinaryStorage } = require("multer-storage-cloudinary");

// require('dotenv').config()







// const storage = new CloudinaryStorage({
//     allowedFormats: ["jpg", "png"],
//     // transformation: [{
//     //     width: 500,
//     //     height: 500,
//     //     crop: "limit"
//     // }],
//     cloudinary: cloudinary,
//     params: {
//         folder: (req, file) => 'playstop'
//     }
// });


// module.exports = multer({ storage: storage });



// // const storage = multer.diskStorage({
// //     filename: function (req, file, cb) {
// //         // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
// //         // cb(null, file.fieldname + '-' + uniqueSuffix)
// //         cb(null, file.originalname)
// //     }


// // })


// // const upload = multer({ storage: storage });

// // module.exports = upload;


// // conststorage = multer.diskStorage({
// //     destination: function (req, file, cb) {
// //         if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
// //             cb(null, './files/images/');
// //         } else {
// //             cb({ message: 'this file is neither a video or image file' }, false)
// //         }
// //     },
// //     filename: function (req, file, cb) {
// //         cb(null, file.originalname);
// //     }
// // // })


