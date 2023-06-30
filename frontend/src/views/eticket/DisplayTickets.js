import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

import { useEffect } from "react";
import axios from "axios";
import { data } from 'jquery';











function DisplayTickets() {


  const [show, setShow] = useState(true);

  const [paid, setPaid] = useState(false);


  const [Ticket, setTicket] = useState({});

  const [TicketId, setTicketId] = useState("");

  const [currentTicket, setCurrentTicket] = useState({});


  const [expiry, setExpiry] = useState("");

  const [Purchase, setPurchase] = useState("");

  const [Fare, setFare] = useState("");

  const [PhoneNumber, setPhoneNumber] = useState("");
  const [PurchasedTickets, setPurchasedTickets] = useState([]);


  useEffect(() => {
    const fetchdata = async () => {
      const phoneNumber = JSON.parse(localStorage.getItem("phoneNumberToken"));
      const ticket_payment_status = JSON.parse(localStorage.getItem("ticket_payment_status")); 
      const TicketId = JSON.parse(sessionStorage.getItem("TicketId"));
      setTicketId(TicketId);


      const result = fetch("http://localhost:9000/user/getTicketDetails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          phoneNumber: phoneNumber,
          TicketId: TicketId
        })
      }).then((response) => {
        return response.json();

      })
      result.then((json) => {



        // const passdetails = json.data[0].ePass_details.Daily_ePass_AC;
        const Ticket = json.data[0].Tickets.find(o => o.TicketId === TicketId);
        setTicket(Ticket);
        sessionStorage.setItem("CurrentTicket", JSON.stringify(Ticket));
        console.log(sessionStorage.getItem("CurrentTicket"))

        console.log(Ticket);
        localStorage.setItem("PurchasedTickets", JSON.stringify(Ticket));
        const oldItem = JSON.parse(localStorage.getItem("PurchasedTickets"));
        alert("purchased tocken set");
        console.log(localStorage.getItem("PurchasedTickets"));





        // const expiry = json.data[0].ePass_details.Daily_ePass_AC.ExpiryDate;


        const PhoneNumber = json.data[0].phoneNumber;


        setPhoneNumber(PhoneNumber);



        console.log(Ticket);
        if (Ticket.status === "Verified") {
          setValid(false);
        }
        if (Ticket.status === "Expired") {
          setValid(false);
        }








      });








      // sessionStorage.setItem("user_pass_id", Pass_id);
      // sessionStorage.setItem("user_pass_type", Daily_ePass_AC);
      // sessionStorage.setItem("Verify_Pass_Type", "ScanVerifyPass_Daily_ePass_AC");



      // sessionStorage.setItem("user_data", JSON.stringify(json.data));
      // console.log(sessionStorage.getItem("user_pass_id"));
      // console.log(sessionStorage.getItem("user_data"));
      // console.log(sessionStorage.getItem("user_pass_type"));





      // setPassDetails(passdetails);


    };
    fetchdata();
  }, []);


  const handleClose = () => setShow(true);
  const handleShow = () => setShow(true);

  const [valid, setValid] = useState(true);

  return (

    <div className="container">
      <h1>My e-Ticket</h1>






      <br></br>{!valid && (<img
        alt="..."
        name="verified"
        title="verified"
        caption="verified"
        label="verified"
        className="avatar border-gray"
        src={require("assets/img/verified.png")}
      ></img>)}



      
      {valid &&(< NavLink to="/admin/eticket/QrCodeScanForTicket"><td colspan="2"> <b>
        <img
          alt="..."
          className="avatar border-gray"
          src={require("assets/img/scan.png")}
        ></img>Scan To Validate </b></td>

      </NavLink>)

      }

      < NavLink to="/admin/Map/MapIndex"><td colspan="2"> <b>
        <img
          alt="..."
          className="avatar border-gray"
          src={require("assets/img/maps.jpg")}
        ></img>Track My Journey</b></td>

      </NavLink>





      <table class="table table-bordered table-responsive">
        <thead>
          <tr>
            <tb>Ticket Number:</tb>
            <tb> <b> {Ticket?.TicketId} </b></tb>
          </tr>
          <tr>
            {/* <tb>User-ID:</tb>
            <tb> {user?.id} </tb>
          */}
            <tb>PhoneNumber:</tb>
            <tb> {Ticket?.PassengerNumber} </tb>
          </tr>






        </thead>
        <tbody>
          <tr>
            <th scope="row">Source</th>
            <td colspan="3"> {Ticket?.src} </td>

            <td colspan="3"></td>
          </tr>
          <th scope="row">Destination</th>
          <td colspan="3"> {Ticket?.destination} </td>

          <td colspan="3"></td>
          <tr></tr>

          <tr>
            <th scope="row">Booking:  </th>
            <th scope="row" colspan="2">{new Date(Ticket?.datetime).toString()}</th>

          </tr>


          <tr>
            <th scope="row">Fare</th>
            {/* const total={ticket.adult}*{ticket.adult_fare} */}
            <td colspan="3"><li>Adult ={Ticket?.adult}*{Ticket?.adult_fare}
            </li>
              <li>Junior= {Ticket?.junior}*{Ticket?.junior_fare}</li>
              <li>Senior = {Ticket?.senior}*{Ticket?.senior_fare}</li>
              <li>PWD = {Ticket?.ph}*{Ticket?.ph_fare} </li> </td>


          </tr>

          <tr>
            <th scope="row">Total Fare</th>
            <td colspan="2"><b>{Ticket?.total_fare}</b></td>
          </tr>


        </tbody>
      </table>





    </div>
  );
}

export default DisplayTickets