const mongoose = require('mongoose');

const BusSchema = new mongoose.Schema({
    BusId: { type: Number },

    Bus_details: {
        type: Object,
        BusNumber: { type: String},
        BusType: { type: String },
        Engine: { type: String },
        Mfg_Year: { type: String },
        YearOfExpiry: { type: String },
        Status: { type: String },
        Age: { type: String },
        depot: { type: String },
        trail: { type: Number },
    }
})



const Bus = mongoose.model('Bus', BusSchema);
module.exports = Bus;