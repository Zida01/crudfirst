const cloudinary = require('cloudinary').v2;
require('dotenv').config()
const fs = require('fs');
const { Error } = require('mongoose');

cloudinary.config({

    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
});


module.exports = cloudinary

// exports.uploads = (file) => {
//     return new Promise(resolve => {
//         cloudinary.uploader.upload(file, (result) => {
//             resolve({
//                 url: result.url,
//                 id: result.public_id
//             })
//         }, { resource_type: "auto" })
//     })
// }



// exports.uploadToCloudinary = async (locaFilePath) => {

//     return cloudinary.uploader
//         .upload(locaFilePath)
//         .then((result) => {
//             fs.unlinkSync(locaFilePath);

//             return {
//                 message: "Success",
//                 url: result,

//             };

//         })
//         .catch((error) => {

//             // Remove file from local uploads folder
//             fs.unlinkSync(locaFilePath);
//             return { message: "Fail" };
//         });
// }



/**
 *
 * @CLOUDINARY WORKING
 */
// const upluoad = async (locaFilePath) => {

//     try {
//         cloudinary.uploader.upload(locaFilePath).then(result => {
//             fs.unlinkSync(locaFilePath)
//             return console.log(result)
//         }).catch(error => {

//             fs.unlinkSync(locaFilePath)
//             console.log(error);

//         })



//     } catch (error) {
//         console.log(error);

//     }
// }



// module.exports = {
//     upluoad


// } 

/**
 * CODED HOLA
 */
