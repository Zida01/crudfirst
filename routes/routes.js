//const express = require('express');
const router = require('express').Router();
const info = require('../models/user');
const multer = require('multer');
const flash = require('connect-flash')
const session = require('express-session');
const user = require('../models/user');






const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + file.originalname
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }

})

const upload = multer({
    storage: storage
}).single('image');

//post data routes

router.post('/add', upload, (req, res) => {
    const user = new info({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        image: req.file.filename
    });
    user.save()
        .then((result) => {
            console.log(`${result.name} has been added`);
            res.redirect('./add')
            req.flash('error', 'user added');
        }).catch(err => {
            console.log(err);
        })


})



router.get('/all', (req, res) => {
    user.find()
        .then(result => {
            res.render('index', { result: result })
        })
        .catch(err => {
            res.json({
                message: " unable to load data"
            })
            console.log(err);
        })
    //res.render('index',)

});




router.get('/add', (req, res) => {
    res.render('add', { messages: 'emms' })

});

module.exports = router;