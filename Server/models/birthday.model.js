const { mongo } = require('mongoose');
const mongoose = require('mongoose');


const bdayModelSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true
        },
        cohort_Number: {
            type: String,
            required: true,
            trim: true
        },
        month: {
            type: String,
            required: true,
            trim: true
        },
        date: {
            type: String,
            required: true,
            trim: true
        }
        
    }
)

const Bday = mongoose.model('Bday', bdayModelSchema);

module.exports = Bday;