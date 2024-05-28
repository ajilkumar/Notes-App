require('dotenv').config()

//essential packages
const express = require('express');
const expressLayouts = require('express-ejs-layouts');

//express
const app = express()

//specify port
const port = 5000 || process.env.PORT

app.use(express.urlencoded({extended: true}))
app.use(express.json())

//Static files
app.use(express.static('public'))

//Template engine
app.use(expressLayouts)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

app.get('/', function(req, res){
  res.render('index')
})

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
})