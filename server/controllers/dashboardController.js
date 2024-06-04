const Note = require('../models/Notes')
const mongoose = require('mongoose');


//Get Dashboard
exports.dashboard = async(req, res) => {
  const locals = {
    title: 'DashBoard',
    description: "Free NodeJS Notes App"
  }
  res.render('dashboard/index', {
    locals,
    layout: '../views/layouts/dashboard'
  })
}