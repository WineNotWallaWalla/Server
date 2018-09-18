const mongoose = require('mongoose');
const { Schema } = mongoose;
const { RequiredString } = require('../util/mongoose-helpers');

const schema = new Schema({
    name: RequiredString,
    description: RequiredString,
    location: RequiredString,
    time: {
        start: {
            type: Date,
            required: true
        },
        end: Date
    }
});

module.exports = mongoose.model('Event', schema);
