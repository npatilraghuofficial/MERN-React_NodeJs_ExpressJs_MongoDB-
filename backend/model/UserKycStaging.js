const  mongoose =require('mongoose');

const UserKycStaging = new mongoose.Schema({
   UserPhoneNumber: {type:Number},
   kycDocs: {type:Array},
   Status: {type:String},
       Manager_details:{
                type:Object,
                PhoneNumber:{type:Number},
                UserName:{type:String},
                FirstName:{type:String},
                LastName:{type:String},
               
               }

  
        
          

})



  const UserKyc = mongoose.model('UserKyc',UserKycStaging);
  module.exports=UserKyc;