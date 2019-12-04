/* GET home page */
const about = function(req, res){
    res.render('about', { title: 'About Site' });
  };
  
  module.exports = {
    about
  };