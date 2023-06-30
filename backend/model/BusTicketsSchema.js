const mongoose = require('mongoose');

const BusTicketsSchema = new mongoose.Schema({
    BusId: { type: Number, unique: true },

    Conductor_Number: { type: Number, unique: true },

    Bus_details: {
        type: Object,
        BusNumber: { type: String },
        BusType: { type: String },
        Engine: { type: String },
        Mfg_Year: { type: String },
        YearOfExpiry: { type: String },
        Status: { type: String },
        Age: { type: String },
        depot: { type: String },
        trail: { type: String },
    },
    RouteDetails: {
        type: Object,
        route_no: { type: String },
        distance: { type: String },
        origin: { type: String },
        destination: { type: String },
        intermediateStops: { type: Array }
    },
    Conductor_details: {
        type: Object,
        PhoneNumber: { type: Number },
        FirstName: { type: String },
        LastName: { type: String },
        Gender: { type: String },
        DOB: { type: Date },
        Age: { type: String },
        city: { type: String },
        Country: { type: String },
        PostalCode: { type: Number },
    },
    Manager_details: {
        type: Object,
        PhoneNumber: { type: Number },
        FirstName: { type: String },
        LastName: { type: String },
        Gender: { type: String },
        DOB: { type: Date },
        Age: { type: String },
        city: { type: String },
        Country: { type: String },
        PostalCode: { type: Number },
    },
    Duty_details: {
        type: Object,
        start: { type: String },
        end: { type: String },
    },
    Tickets: [{
        type: Object,
        TicketId: { type: Number },
        PassengerNumber: { type: Number },
        busid: { type: Number },
        src: { type: String },
        destination: { type: String },
        adult: { type: Number },
        adult_fare: { type: Number },
        junior: { type: Number },
        junior_fare: { type: Number },
        senior: { type: Number },
        senior_fare: { type: Number },
        ph: { type: Number },
        ph_fare: { type: Number },
        total_fare: { type: Number },
        numberOfStops: { type: Number },
        datetime: { type: String },
        status: { type: String },

    }]
})



const BusTicket = mongoose.model('BusTickets', BusTicketsSchema);
module.exports = BusTicket;