const mongoose = require( 'mongoose' );
const openingTimeSchema = new mongoose.Schema({
        days: {type: String, 
               required: true},
        opening: String,
        closing: String,
        closed: {
                type: Boolean,
                required: true
                }
});



mongoose.model('movies', openingTimeSchema);