import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function validateassignduty(value) {


  const CONDUCTOR_NUMBER = document.getElementById("conductor").value

  const BUS_ID = document.getElementById("bus").value

  const ROUTE_ID = document.getElementById("route").value

  if ((CONDUCTOR_NUMBER.length < 9) || (CONDUCTOR_NUMBER.length > 10)) {
    document.getElementById('conductorErr').innerHTML = "*Enter valid Conductor Phone number of length 10";
    return false;
  } else if (!CONDUCTOR_NUMBER.match(/^[6-9]{1}[0-9]{9}$/)) {
    document.getElementById('conductorErr').innerHTML = "*Not valid Mobile Number";
    return false;
  } else {
    document.getElementById('conductorErr').innerHTML = "";
  }


  if (!BUS_ID.match(/^[0-9]*[0-9]+$/)) {
    document.getElementById('busErr').innerHTML = "Enter VALID BUS ID";
    return false
  }
  else {
    document.getElementById('busErr').innerHTML = "";

  }

  if (!ROUTE_ID.match(/^[0-9]*[0-9]+$/)) {
    document.getElementById('routeErr').innerHTML = "Enter valid  Route ID";
    return false
  }
  else {
    document.getElementById('routeErr').innerHTML = "";

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
  //           "contact": "987654321",
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

  function assignDuty() {
    let assignDetails = JSON.parse(sessionStorage.getItem("assignDetails"));
    let route_id = sessionStorage.getItem("route_id");
    console.log(assignDetails);
    console.log(route_id);
    alert("assign duty");
    sessionStorage.setItem("dutyLink", `http://localhost:3001/bus/${route_id}`);
    console.log(sessionStorage.getItem("dutyLink"));




    const result = fetch("http://localhost:9000/bustickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(assignDetails)
    }).then((response) => {
      if (response.status == 400) {
        alert("Duty Already assigned to bus / conductor");
        window.location.reload();
      }
      else
        if (response.status == 200) {
          alert("Duty Assigned");
          // history.push("generateqrcode");

          window.location.href = "/admin/manager/generateqrcode"
        }
    }).error((error) => {
      console.log(error);
    });

  }
  assignDuty();


}
export default validateassignduty