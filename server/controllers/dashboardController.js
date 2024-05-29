//Get HomePage
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