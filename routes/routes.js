const router = require('express').Router();
const User = require('../models/user');
const cloudinary = require('../utils/cloudinary')
const upload = require('../utils/multer')



router.get('/add', (req, res) => {
    res.render('add')

});

/***
 * POST ROUTE TO ADD NEW USER WITH IMAGE UPLOAD TO CLOUDINARY
 */

router.post('/add', upload.single('image'), async (req, res) => {

    try {
        const result = await cloudinary.uploader.upload(req.file.path)

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

router.get('/edit/:id', async (req, res) => {


    try {

        let id = req.params.id
        await User.findById(id).then((result) => {

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


router.post('/edit/:id', async (req, res) => {

    try {

        let { id } = req.params

        const { name, email, phone, } = req.body

        var createduser = {
            name,
            email,
            phone,
            //  image: result.secure_url

        }
        await User.findByIdAndUpdate(id, { createduser }, { returnDocument: 'after' })
        //res.render('index')
    }
    catch (error) {
        console.log(error)

    }



    // if (!newUser) { 
    //     return res.status(500).json({ message: `cannnot find id ${id}` })

    // }
    //  res.status(200).json({ message: newUser })


})





/***
 * NEW UPDATE TEST WITH CLOUDINARY
 * 
 */



// router.post('/edit/:id', async (req, res) => {
//     try {

//         let { name, email, phone } = req.body

//         const updates = new User({
//             name,
//             email,
//             phone,

//         })

//         console.log(updates);
//         //  let id = req.params.id;
//         const updateuser = await User.findby(req.params.id, { updates }, { new: true });

//         // we cannot find any product in database
//         if (!updateuser) {
//             console.log("failed");
//         }
//         console.log(updateuser);
//         return res.status(200).json(updateuser)
//         // const updatedProduct = await user.findById();
//         //res.status(200).json(updatedProduct);
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })

/**
 *  the id is from mongodb 
 * i want to run the code now
 * i didnt get what you said
 *  the result his not changing
 *
 */










/**
 * UPDATE ROUTE FOR USER --> WITH UPDATE IMAGE ON CLOUDINARY
 * 
 */

// router.post('/update/:id', upload.single('image'), async (req, res) => {
//     try {

//         let { name, email, phone } = req.body

//         const createduser = new user({

//             name,
//             email,
//             phone,
//             // image:result.public_id

//         })


//         await user.findById(req.params.id).then(result => {
//             if (result.image != '') {
//                 const imag = result.image
//                 const url = imag.split('/');
//                 const fimage = url[url.length - 1]
//                 const imagedel = fimage.split('.')[0]
//                 console.log(imagedel);
//                 //split image url to get public key  for deletion   ( public_id is needed for deletion )
//                 //  console.log(result.image)
//                 if (imagedel) {
//                     const myimag = cloudinary.uploader.destroy(req.params.id, imagedel)
//                     console.log("img deleted");
//                 }
//                 cloudinary.uploader.upload(req.body.image).then(result => {
//                     createduser.image = result.secure_url
//                 })

//             }
//             const updimage = user.findByIdAndUpdate(req.params.id, createduser, { new: true })


//         }).catch(error => {
//             console.log(`${error}  unable to deleted old image`);
//         })





//     } catch (error) {
//         console.log(error);

//     }
// })


router.delete('/delete/:id', async (req, res) => {
    try {

        let id = req.params.id
        const deleteUser = await User.findByIdAndRemove(id)
        // console.log(deleteUser);
        if (!deleteUser) {
            return res.status(500).json({ message: `cannnot find id ${id}` })

        }
        res.status(200).json({ message: " deleted" })




    } catch (error) {
        res.status(500).json({ message: error.message })

    }




})





module.exports = router