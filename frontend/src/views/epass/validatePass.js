import axios from "axios";
import { useState } from "react";
import RequestOrderPayment from "./RequestOrderPayment";


function validatePass(value) {


  const DOC_NUMBER = document.getElementById("documnetNumber").value



  if ((DOC_NUMBER.length < 4) || (DOC_NUMBER.length > 15) || (DOC_NUMBER == "")) {
    document.getElementById('error').innerHTML = "Enter valid Document number of length 4";

    return false;
  } else if (!DOC_NUMBER.match(/^[0-9]+$/)) {
    document.getElementById('error').innerHTML = "Enter Only Number";
    return false;
  } else {
    document.getElementById('error').innerHTML = "";
    RequestOrderPayment();


  }

  // const RequestOrderPayment = () => {
  //   const price = document.getElementById("price").value
  //   let amntTxt = price;
  //   const payment = axios.post('http://localhost:2024/api/razorpay/create-order', { amount: amntTxt, receipt: "gurkaran_order_54654" })
  //     .then(response => {
  //       const orderID = response.data.id
  //       var options = {
  //         "key_id": "rzp_test_hcBEyLK2rKpWkS",
  //         "key_secret": "AilD2hmREnc2HEDIuIBYzu6O",
  //         "amount": amntTxt,
  //         "currency": "INR",

  //         "name": "e-Ticket App",
  //         "description": "The New Generation Tickting App",
  //         "order_id": orderID,
  //         handler: function async(response) {
  //           alert(response.razorpay_payment_id);
  //           setTransactionNumber(response.razorpay_payment_id);
  //           alert("Payment Done");
  //           handlepay();




  //         },
  //         "prefill": {
  //           "name": "Raghavendra N Patil",
  //           "email": "npatilraghu@example.com",
  //           "contact": "8722583680",
  //         },
  //         "notes": {
  //           "address": "note value",
  //         },
  //         "theme": {
  //           "color": "#228B22"
  //         }
  //       };
  //       var rzp1 = new window.Razorpay(options)
  //       rzp1.open();
  //       console.log(response.status)
  //     })
  //   console.log(payment);







  // }
  RequestOrderPayment();




}
export default validatePass