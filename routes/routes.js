const router = require('express').Router();
const User = require('../models/user');
const cloudinary = require('../utils/cloudinary')
const upload = require('../utils/multer')
const fs = require('fs');



router.get('/add', (req, res) => {
    res.render('add')

});

/***
 * POST ROUTE TO ADD NEW USER WITH IMAGE UPLOAD TO CLOUDINARY
 */

router.post('/add', upload.single('image'), async (req, res) => {

    try {
        const result = await cloudinary.uploader.upload(req.file.path)
        console.log(result);

        let { name, email, phone, } = req.body

        const createduser = new User({

            name,
            email,
            phone,
            image: result.secure_url

        })

        createduser.save().then(result => {
            console.log(`${result.name} has been added`);
            console.log(result);

        })
            .catch(error => {
                console.log(error);
            })




    } catch (error) {

        console.log(error);

    }


})

/**
 * ALL USER ROUTES TO SHOW ALL USER ADDED
 * 
 */


router.get('/all', (req, res) => {
    User.find()
        .then(result => {
            res.render('index', { result: result })
        })
        .catch(err => {
            res.json({
                message: " unable to load data"
            })

        })
    //res.render('index',)

});


/**
 * EDIT USER ROUTE -- GET
 * 
 */

router.get('/edit/:id', (req, res) => {


    try {

        //  let id = req.params.id
        User.findOne({ _id: req.params.id }).then((result) => {

            if (result) {

                res.render('edituser', { result: result })

            } if (result == null) {
                res.redirect('index')
            }

        })



    } catch (error) {
        console.log(error);

    }


})
/**
 * 
 * UPDATE ROUTES
 */


router.put('/edit/:id', upload.single('image'), async (req, res) => {

    try {


        const useI = await User.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            image: result.secure_url

        },

            { new: true })


        // console.log(useI);


    }
    catch (error) {
        console.log(error)

    }



})






router.get('/delete/:id', async (req, res) => {
    try {

        let id = req.params.id

        const deleteUser = await User.findByIdAndRemove(id)
        // console.log(deleteUser);
        if (deleteUser.image != '') {
            const imag = deleteUser.image
            const url = imag.split('/');
            const fimage = url[url.length - 1]
            const imagedel = fimage.split('.')[0]
            if (imagedel) {
                const myimag = cloudinary.uploader.destroy(imagedel)
            }
        }

        res.status(200).json({ message: " deleted" })




    } catch (error) {
        res.status(500).json({ message: error.message })

    }




})





module.exports = router