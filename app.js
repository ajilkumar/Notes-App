require('dotenv').config()

//essential packages
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const connectDB = require('./server/config/db')

//express
const app = express()

//specify port
const port = 5000 || process.env.PORT

app.use(express.urlencoded({extended: true}))
app.use(express.json())

//Connect to Database
connectDB()

//Static files
app.use(express.static('public'))

//Template engine
app.use(expressLayouts)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

//Routes
app.use('/', require('./server/routes/index'))
app.use('/', require('./server/routes/dashboard'))

//Handle 404
app.get('*', function(req, res){
  res.status(404).render('404')
})

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
})