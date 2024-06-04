const Note = require('../models/Notes')
const mongoose = require('mongoose');


//Get Dashboard
exports.dashboard = async(req, res) => {

  const locals = {
    title: 'DashBoard',
    description: "Free NodeJS Notes App"
  }

  try {
    // Mongoose "^7.0.0 Update
    const notes = await Note.aggregate([
      { $sort: { updatedAt: -1 } },
      { $match: { user: mongoose.Types.ObjectId(req.user.id) } },
      {
        $project: {
          title: { $substr: ["$title", 0, 30] },
          body: { $substr: ["$body", 0, 100] },
        },
      }
      ])
    .skip(perPage * page - perPage)
    .limit(perPage)
    .exec(); 

    const count = await Note.count();

    res.render('dashboard/index', {
      userName: req.user.firstName,
      locals,
      notes,
      layout: "../views/layouts/dashboard",
      current: page,
      pages: Math.ceil(count / perPage)
    });
 
    // Original Code
    // Note.aggregate([
    //   { $sort: { updatedAt: -1 } },
    //   { $match: { user: mongoose.Types.ObjectId(req.user.id) } },
    //   {
    //     $project: {
    //       title: { $substr: ["$title", 0, 30] },
    //       body: { $substr: ["$body", 0, 100] },
    //     },
    //   },
    // ])
    //   .skip(perPage * page - perPage)
    //   .limit(perPage)
    //   .exec(function (err, notes) {
    //     Note.count().exec(function (err, count) {
    //       if (err) return next(err);
    //       res.render("dashboard/index", {
    //         userName: req.user.firstName,
    //         locals,
    //         notes,
    //         layout: "../views/layouts/dashboard",
    //         current: page,
    //         pages: Math.ceil(count / perPage),
    //       });
    //     });
    //   });

  } catch (error) {
    console.log(error);
  }




  res.render('dashboard/index', {
    userName: req.user.firstName,
    locals,
    layout: '../views/layouts/dashboard'
  })
}