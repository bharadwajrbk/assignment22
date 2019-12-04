/*BharadwajKanukuntla-8618679*/
var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main');
const ctrlAbout = require('../controllers/about');
const ctrlMovies = require('../controllers/movies');
const ctrlDisplay = require('../controllers/display');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/about', ctrlAbout.about);
router.get('/movies', ctrlMovies.movies);
router.get('/display', ctrlDisplay.display);

module.exports = router;