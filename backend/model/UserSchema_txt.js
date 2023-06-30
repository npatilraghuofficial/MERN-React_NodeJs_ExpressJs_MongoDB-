const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");


const UserSchema = new mongoose.Schema({
   token: { type: String },
   phoneNumber: {
      type: Number,
      required: true,
   },
   otp: {
      type: Number,
      required: true
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
      type: Date,
      default: Date.now()
   },

   kyc_info: {
      type: String,
      document_file: { type: String },
      reservation: { type: String }
   },

   Tickets: {
      type: Array,
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
   },
  user_details: {
      type: Object,
      UserName: { type: String },
      FirstName: { type: String },
      LastName: { type: String },
      Gender: { type: String },
      DOB: { type: String },
      Age: { type: String },
      city: { type: String },
      Country: { type: String },
      PostalCode: { type: Number },
   },
   KYC_Status: {
      type: String,
      default: "Pending"
   },

   ePass_details: {
      Monthly_ePass_AC: {
         Pass_id: { type: String },
         Fare: { type: String },
         logindate: { type: String },
         ExpiryDate: { type: String },
         DocNumber: { type: String },
         TransactionNumber: { type: String },
     },
      Monthly_ePass_Non_AC: {
         Pass_id: { type: String },
         Fare: { type: String },
         logindate: { type: String },
         ExpiryDate: { type: String },
         DocNumber: { type: String },
         TransactionNumber: { type: String },
      },
      Weekly_ePass_AC: {
         Pass_id: { type: String },
         Fare: { type: String },
         logindate: { type: String },
         ExpiryDate: { type: String },
         DocNumber: { type: String },
         TransactionNumber: { type: String },
      },
      Weekly_ePass_Non_AC: {
         Pass_id: { type: String },
         Fare: { type: String },
         logindate: { type: String },
         ExpiryDate: { type: String },
         DocNumber: { type: String },
         TransactionNumber: { type: String },
      },
      Daily_ePass_AC: {
         Pass_id: { type: String },
         Fare: { type: String },
         logindate: { type: String },
         ExpiryDate: { type: String },
         DocNumber: { type: String },
         TransactionNumber: { type: String },
     },
      Daily_ePass_Non_AC: {
         Pass_id: { type: String },
         Fare: { type: String },
         logindate: { type: String },
         ExpiryDate: { type: String },
         DocNumber: { type: String },
         TransactionNumber: { type: String }

      }

   }

})





const User = mongoose.model('User', UserSchema);
module.exports = User;