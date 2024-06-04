const Note = require('../models/Notes')
const mongoose = require('mongoose');


//Get Dashboard
exports.dashboard = async(req, res) => {

  try {
    await Note.insertMany([
      {
        user: "",
        title: 'NodeJS Tutorial',
        body: 'lfjdgo'
        
      }
    ])
  } catch (error) {
    
  }



  const locals = {
    title: 'DashBoard',
    description: "Free NodeJS Notes App"
  }
  res.render('dashboard/index', {
    userName: req.user.firstName,
    locals,
    layout: '../views/layouts/dashboard'
  })
}