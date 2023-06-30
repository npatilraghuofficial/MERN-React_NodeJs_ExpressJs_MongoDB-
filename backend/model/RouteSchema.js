const mongoose = require('mongoose');

const RouteSchema = new mongoose.Schema({
   RouteDetails: {
        type: Object,
        route_id: { type: Number },
        route_no: { type: String },
        distance: { type: String },
        origin: { type: String },
        destination: { type: String },
        intermediateStops: { type: Array }
    },

})
const Route = mongoose.model('Route', RouteSchema);
module.exports = Route;