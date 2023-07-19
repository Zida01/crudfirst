const express = require('express');
const db = require('./config/db');
const methodOverride = require('method-override');
const userRoutes = require('./routes/routes')
const session = require('express-session');

//const flash = require('express-flash');
//const cloudinary = require('./utils/cloudinary')
const upload = require('./utils/multer')
const bodyParser = require('body-parser')
require('dotenv').config();
const ejs = require('ejs');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use('', userRoutes)





app.use(express.static('uploads'))



//app.use(flash());
app.set("view engine", "ejs")













const PORT = process.env.PORT || 3000



app.get('/new', (req, res) => {
    res.render('new')
})


app.listen(PORT, (req, res) => {

    console.log(`listening on ${PORT} `);

})