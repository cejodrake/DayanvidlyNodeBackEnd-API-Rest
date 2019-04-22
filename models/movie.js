const mongoose = require('mongoose');
const { genreSchema } = require('./genre')
const Joi = require('joi');

const Movie = mongoose.model('Movies', new mongoose.Schema({

    title: {
        type: String,
        required: true,
        trim: true,
        minlegth: 5,
        maxlength: 255

    },
    genre: {
        type: genreSchema,
        require: true
    },
    numberInStock: {
        type: Number,
        required: true,
        minlegth: 0,
        maxlength: 255
    },
    dailyRentalRate: {
        type: Number,
        required: true,
        minlegth: 0,
        maxlength: 255
    }
}));

function validate(movie) {
    const schema = {
        title: Joi.string().min(5).max(50).required(),
        genreId: Joi.objectId().required(),
        numberInStock: Joi.number().min(0).required(),
        dailyRentalRate: Joi.number().min(0).required()
    };

    return Joi.validate(movie, schema);
}


exports.Movie = Movie;
exports.validate = validate;