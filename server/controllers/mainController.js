//Get HomePage
exports.homepage = async(req, res) => {
  const locals = {
    title: 'NodeJS Notes',
    description: "Free NodeJS Notes App"
  }
  res.render('index', locals)
}
