const mongoose = require('mongoose');

const Conductor_details = new mongoose.Schema({
   phoneNumber: {
      type: Number,
      required: true,
      unique: true

   },
   otp: {
      type: Number,

   },
   LoggedIn: {
      type: String,
      required: true,
      default: "true",
   },
   role: {
      type: String,
   },

   logindate: {
      type: Date

   },
   KYC_Document_details: {
      type: Object,
      Document_type: { type: String },
      Document_Number: { type: String },
      Document_img: { type: String },

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
   }



})



const Conductor = mongoose.model('Conductor', Conductor_details);
module.exports = Conductor;