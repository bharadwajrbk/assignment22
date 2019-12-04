/* GET home page */
const index = function(req, res){
  res.render('display', { title: 'bharadwaj' });
};

module.exports = {
  index
};