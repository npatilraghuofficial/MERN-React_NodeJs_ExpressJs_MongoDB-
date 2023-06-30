const  mongoose =require('mongoose');

const TicketSchema = new mongoose.Schema({
   
        busid: {type:Number},
        src: {type:String},
        destination: {type:String},
        adult: {type:Number},
        adult_fare: {type:Number},
        junior:  {type:Number},
        junior_fare: {type:Number},
        senior:  {type:Number},
        senior_fare: {type:Number},
        ph: {type:Number},
        ph_fare: {type:Number},
        total_fare:{type:Number},
        numberOfStops:{type:Number},
        datetime:{type:String},
        status:{type:String},
 


})



  const Ticket = mongoose.model('Ticket',TicketSchema);
  module.exports=Ticket;