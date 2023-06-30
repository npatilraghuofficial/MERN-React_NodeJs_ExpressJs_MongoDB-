const mongoose = require('mongoose');

const ManagerSchema = new mongoose.Schema({
   phoneNumber: {
      type: Number,
      required: true
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
   Manager_details: {
      type: Object,
      UserName: { type: String },
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
      DutyId: { type: String },
      logindate: { type: Date },
      EndDate: { type: Date },
      Depot: { type: String },
   }

})



const Manager = mongoose.model('Manager', ManagerSchema);
module.exports = Manager;