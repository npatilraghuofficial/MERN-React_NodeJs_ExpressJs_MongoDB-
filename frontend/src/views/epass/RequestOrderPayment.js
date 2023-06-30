import axios from "axios";
import handlepay from "./DailyPass_Non_AC";

function RequestOrderPayment() {
  const amt = document.getElementById("price").value;

  let amntTxt = amt * 100;
  const payment = axios.post('http://localhost:2024/api/razorpay/create-order', { amount: amntTxt, receipt: "ABBC" })
    .then(response => {
      const orderID = response.data.id
      var options = {
        "key_id": "88",
        "key_secret": "888",
        "amount": amntTxt,
        "currency": "INR",

        "name": "e-Ticket App",
        "description": "The New Generation Tickting App",
        "order_id": orderID,
        handler: function async(response) {
          alert(response.razorpay_payment_id);
          alert("Payment Done");
          handlepay();




        },
        "prefill": {
          "name": "Raghavendra N Patil",
          "email": "npatilraghu@example.com",
          "contact": "987654321",
        },
        "notes": {
          "address": "note value",
        },
        "theme": {
          "color": "#228B22"
        }
      };
      var rzp1 = new window.Razorpay(options)
      rzp1.open();
      console.log(response.status)
    })
  console.log(payment);







}

export default RequestOrderPayment
