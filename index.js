const express = require('express');
const db = require('./config/db');
const userRoutes = require('./routes/routes')
const session = require('express-session');
const flash = require('express-flash');
require('dotenv').config();
const ejs = require('ejs');



const app = express();







app.use(express.static('uploads'))

app.use(session({
    secret: "helloma",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
}));




app.use(flash());
app.set("view engine", "ejs")






app.use('', userRoutes)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());







const PORT = process.env.PORT || 3000




app.get('/new', (req, res) => {
    res.render('new')
})


app.listen(PORT, (req, res) => {

    console.log(`listening on ${PORT} `);

})