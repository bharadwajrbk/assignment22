var express = require('express');
var router = express.Router();

const ctrlFood = require('../controllers/movies');

router.get('/movies', ctrlFood.getMovies);
router.post('/movies', ctrlFood.createMovie);
router.get('/movies/:movieid', ctrlFood.getSingleMovie);
router.put('/movies/:movieid', ctrlFood.updateMovie);
router.delete('/movies/:movieid', ctrlFood.deleteMovie);

module.exports = router;



    