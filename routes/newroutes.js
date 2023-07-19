// //const express = require('express');
// const router = require('express').Router();
// //const info = require('../models/user');
// const multer = require('multer');
// const flash = require('connect-flash')
// const session = require('express-session');
// const user = require('../models/user');
// const upload = require('../utils/multer');
// const { CloudinaryStorage } = require('multer-storage-cloudinary');
// const cloudinary = require('../utils/cloudinary').v2





// // const storage = multer.diskStorage({
// //     destination: function (req, file, cb) {
// //         cb(null, './uploads')
// //     },
// //     filename: function (req, file, cb) {
// //         const uniqueSuffix = Date.now() + '-' + file.originalname
// //         cb(null, file.fieldname + '-' + uniqueSuffix)
// //     }

// // })

// // const upload = multer({
// //     storage: storage
// // }).single('image');

// //post data routes

// //const rsult = await cloudinary.uploader.upload(req.file.path)



// router.get('/add', (req, res) => {
//     res.render('add')

// });

// router.post('/add', upload.single('image'), async (req, res) => {


//     try {

//         let { name, email, phone } = req.body

//         let createduser = await new user({
//             name,
//             email,
//             phone,
//             image: req.file.path
//         })
//         createduser.save().then(result => {
//             console.log(`${result.name} has been added`);
//             console.log(result);
//             console.log(req.file)
//             res.redirect('/all')



//         })
//             .catch(error => {
//                 console.log(error);
//             })

//     } catch (error) {

//     }




//     // try {

//     //     // var locaFilePath = req.file.path;
//     //     // var result = await upload(locaFilePath)
//     //     // console.log(result);

//     //     // res.json({
//     //     //     result: result
//     //     // })



//     //     // const user = new info({
//     //     //     name: req.body.name,
//     //     //     email: req.body.email,
//     //     //     phone: req.body.phone,
//     //     //     image: rsult.secure.url

//     //     // });
//     //     // user.save()
//     //     //     .then((result) => {
//     //     //         console.log(`${result.name} has been added`);
//     //     //         res.redirect('./add')
//     //     //         req.flash('error', 'user added');
//     //     //     }).catch(err => {
//     //     //         console.log(err);
//     //     //     })




//     // } catch (error) {

//     //     console.log(error)

//     // }




// })



// router.get('/all', (req, res) => {
//     user.find()
//         .then(result => {
//             res.render('index', { result: result })
//         })
//         .catch(err => {
//             res.json({
//                 message: " unable to load data"
//             })
//             console.log(err);
//         })
//     //res.render('index',)

// });

// router.get('/edit/:id', async (req, res) => {
//     let id = req.params.id
//     // res.render('edituser', { user: user })
//     user.findById(id).then((result) => {
//         if (result) {
//             res.render('edituser', { result: result })
//         } if (result == null) {
//             res.redirect('index')
//         }

//     })


// })

// router.post('/update/:id', async (req, res) => {
//     // upload.single('image'),

//     try {
//         let id = req.params.id
//         const userOldImage = await user.findById(id)
//         const imageId = userOldImage.image
//         cloudinary.uploader.destroy(imageId).then(result => {
//             res.status(200).json({
//                 message: "deleted old image from cloudinary"
//             })
//             console.log("deleted");
//         }).catch(error => {
//             res.status(500).json({
//                 message: 'error occured'

//             })
//             console.log(error)

//         })
//         const data = {
//             name: req.body.name,
//             email: req.body.email,
//             phone: req.body.phone,
//             image: req.file.path
//         }

//         const people = user.findByIdAndUpdate(id, data, { new: true }).then(result => {
//             console.log(result)
//         })
//         res.redirect('/all')





//         // let id = req.params.id
//         // await user.findById(id).then(result => {

//         //     await cloudinary.uploader.destroy(req.file.filename).then(result => {
//         //         res.status(200).json({
//         //             message: "deleted old image from cloudinary"
//         //         })
//         //         console.log("deleted");
//         //     }).catch(error => {
//         //         res.status(500).json({
//         //             message: 'error occured'
//         //         })
//         //         console.log(error);
//         //     })
//         //     // CloudinaryStorage.uploader.upload.destroy(result.image)

//         //     const data = {
//         //         name: req.body.name,
//         //         email: req.body.email,
//         //         phone: req.body.phone,
//         //         image: req.file.path
//         //     }

//         //     const people = user.findByIdAndUpdate(id, data, { new: true }).then(result => {
//         //         console.log(result)
//         //     })
//         //     res.redirect('/all')


//         // })





//     }

//     catch (error) {
//         console.log(error);


//     }



// })




// module.exports = router;