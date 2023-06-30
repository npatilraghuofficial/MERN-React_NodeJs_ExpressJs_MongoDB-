import { alertClasses } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Alert, Button, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { backend_base_url } from "../../config"


const calcPrice = (stops, max, step, stepfare) => {
  return (5 + (stops / step) * stepfare > max ? max : 5 + (stops / step) * stepfare);
}



function paynow() {

  const history = useHistory();
  const [orderID, setOrderID] = useState("");
  const [paid, setPaid] = useState(false);

  const [user, setUser] = useState();
  const [data, setData] = useState({});
  const [totalFare, setTotalFare] = useState(0);

  useEffect(() => {
    setData(JSON.parse(sessionStorage.getItem("tickketData")));
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  useEffect(() => {
    setTotalFare(
      calcPrice(data.numberOfStops, 40, 2, 2) * data.adult +
      calcPrice(data.numberOfStops, 30, 3, 1.5) * data.junior +
      calcPrice(data.numberOfStops, 35, 3, 1.5) * data.senior +
      calcPrice(data.numberOfStops, 30, 3, 1.5) * data.ph
    );
  }, [data]);

  const goBack = () => {
    history.goBack();
  }

  const handlePay = async () => {
    const PhoneNumber = JSON.parse(localStorage.getItem("phoneNumberToken"));
    const ticket = {
      PassengerNumber: PhoneNumber,
      busid: data.busid,
      src: data.src,
      destination: data.dest,
      adult: data.adult,
      adult_fare: calcPrice(data.numberOfStops, 40, 2, 2),
      junior: data.junior,
      junior_fare: calcPrice(data.numberOfStops, 30, 3, 1.5),
      senior: data.senior,
      senior_fare: calcPrice(data.numberOfStops, 35, 3, 1.5),
      ph: data.ph,
      ph_fare: calcPrice(data.numberOfStops, 30, 3, 1.5),
      total_fare: totalFare,
      numberOfStops: data.numberOfStops,
      datetime: Date.now(),
      status: "pending"
    };

    const res = await axios.post(`${backend_base_url}/ticket`, ticket);
    const res2 = await axios.patch(`${backend_base_url}/user/${user?.id}`, { ticket: res.data.id });
    localStorage.setItem("user", JSON.stringify(res2.data));
    // sessionStorage.removeItem("tickketData");
    localStorage.setItem("TicketData", JSON.stringify(ticket));
    { ticket: res.data.id }
    console.log(res.data.id);
    localStorage.setItem("TicketId", JSON.stringify(res.data.id));

    console.log(localStorage.getItem("TicketData"));

    https://rzp.io/l/ZllMnM9q


    alert("serv routed  to addticket");
    const Ticketid = JSON.parse(localStorage.getItem("TicketId"));


    const result = await fetch(`http://localhost:9000/addticket`, {


      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        ticketid: Ticketid,
        PassengerNumber: PhoneNumber,
        busid: data.busid,
        src: data.src,
        destination: data.dest,
        adult: data.adult,
        adult_fare: calcPrice(data.numberOfStops, 40, 2, 2),
        junior: data.junior,
        junior_fare: calcPrice(data.numberOfStops, 30, 3, 1.5),
        senior: data.senior,
        senior_fare: calcPrice(data.numberOfStops, 35, 3, 1.5),
        ph: data.ph,
        ph_fare: calcPrice(data.numberOfStops, 30, 3, 1.5),
        total_fare: totalFare,
        numberOfStops: data.numberOfStops,
        datetime: Date.now(),
        status: "pending"

      })
    });
    console.log(localStorage.getItem("TicketId"));

    alert("serv routed  to addtickettouser");
    const result2 = await fetch(`http://localhost:9000/addtickettouser`, {

      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ticketid: Ticketid,
        PassengerNumber: PhoneNumber,
        busid: data.busid,
        src: data.src,
        destination: data.dest,
        adult: data.adult,
        adult_fare: calcPrice(data.numberOfStops, 40, 2, 2),
        junior: data.junior,
        junior_fare: calcPrice(data.numberOfStops, 30, 3, 1.5),
        senior: data.senior,
        senior_fare: calcPrice(data.numberOfStops, 35, 3, 1.5),
        ph: data.ph,
        ph_fare: calcPrice(data.numberOfStops, 30, 3, 1.5),
        total_fare: totalFare,
        numberOfStops: data.numberOfStops,
        datetime: Date.now(),
        status: "pending"

      })
    });

    history.push("/admin/eticket/DisplayTicket");

    const Razorpay_Ticket_data = {
      PassengerNumber: PhoneNumber,
      busid: data.busid,
      ticketid: Ticketid,
      totalFare: totalFare,
      paymentStatus: "pending",
      datetime: Date.now(),

    }
    localStorage.setItem("Razorpay_Ticket_data", JSON.stringify(Razorpay_Ticket_data));
    alert("Razorpay session set");




  }

  const RequestOrderPayment = () => {
    if (totalFare === 0) {
      alert("Please select the number of tickets");
      return false
    }
    const fare = document.getElementById("fare").value;

    let amntTxt = fare * 100;
    const payment = axios.post('http://localhost:2024/api/razorpay/create-order', { amount: amntTxt, receipt: "" })
      .then(response => {
        setOrderID(response.data.id)
        var options = {
          "key_id": "API",
          "key_secret": "API",
          "amount": amntTxt,
          "currency": "INR",

          "name": "e-Ticket App",
          "description": "The New Generation Tickting App",
          "order_id": orderID,
          handler: function async(response) {
            alert(response.razorpay_payment_id);
            alert("Payment Done");
            setPaid(true);
            handlePay();




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

  // RequestOrderPayment();








  // window.location.href = "https://rzp.io/l/ZllMnM9q";





  return (
    <div className="container">


      <table class="table table-bordered table-responsive">
        <thead>
          <tr>
            <th>Type</th>
            <th>number of people</th>
            <th>Fare per person</th>
            <th>total fare</th>

          </tr>
        </thead>
        <tbody>
          {
            data.adult > 0 && (
              <tr>

                <td>Adult/s</td>
                <td>{data.adult}</td>
                <td>{calcPrice(data.numberOfStops, 40, 2, 2)}</td>
                <td>{calcPrice(data.numberOfStops, 40, 2, 2) * data.adult}</td>
              </tr>)
          }

          {
            data.junior > 0 && (
              <tr>
                <td>Junior/s</td>
                <td>{data.junior}</td>
                <td>{calcPrice(data.numberOfStops, 30, 3, 1.5)}</td>
                <td>{calcPrice(data.numberOfStops, 30, 3, 1.5) * data.junior}</td>
              </tr>
            )
          }



          {
            data.senior > 0 && (
              <tr>
                <td>Senior/s</td>
                <td>{data.senior}</td>
                <td>{calcPrice(data.numberOfStops, 35, 3, 1.5)}</td>
                <td>{calcPrice(data.numberOfStops, 35, 3, 1.5) * data.senior}</td>
              </tr>
            )
          }

          {
            data.ph > 0 && (
              <tr>
                <td>DisABLED</td>
                <td>{data.ph}</td>
                <td>{calcPrice(data.numberOfStops, 30, 3, 1.5)}</td>
                <td>{calcPrice(data.numberOfStops, 30, 3, 1.5) * data.ph}</td>
              </tr>
            )
          }


          <tr>
            <th>Total Fare</th>
            <td colspan="3"><b>{totalFare}</b></td>
            <input type="hidden" id="fare" value={totalFare} />
          </tr>


        </tbody>
      </table>


      <Button variant="secondary" onClick={goBack}>
        Back
      </Button>
      <Button variant="primary" onClick={RequestOrderPayment} title="Double Click to pay"
      >
        Pay-Now
      </Button>


      {/* <a href="https://rzp.io/l/ZllMnM9q">razorpay</a> */}

    </div>
  );
}


export default paynow