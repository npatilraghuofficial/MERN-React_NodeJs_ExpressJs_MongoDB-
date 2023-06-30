import axios from 'axios';
import { backend_base_url } from 'config';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { NavLink } from "react-router-dom";


let user;

function DisplayTicket() {
  const [show, setShow] = useState(true);

  const [Source, setSource] = useState("");

  const [Destination, setDestination] = useState("");

  const handleClose = () => setShow(true);
  const handleShow = () => setShow(true);

  const [ticket, setTicket] = useState({});

  const getTicket = async (ticket) => {
    const res = await axios.get(`${backend_base_url}/ticket/${ticket}`);
    setTicket(res.data);
  }

  useEffect(() => {
    user = JSON.parse(localStorage.getItem("user"));

    getTicket(user.ticket);
  }, []);

  const [ticketId, setTicketId] = useState();



  return (
    <div className="container">
      <h1>My e-Ticket<br></br><h6>(Last Purchased Ticket)</h6></h1>





{/* 
      <br></br>Verified <img
        alt="..."
        className="avatar border-gray"
        src={require("assets/img/verified.png")}
      ></img> */}

      {/* <NavLink to="/admin/eticket/QrCodeScanForTicket"><td colspan="2"> <b>
        <img
          alt="..."
          className="avatar border-gray"
          src={require("assets/img/scan.png")}
        ></img>Scan To Validate </b></td>

      </NavLink> */}


      <table class="table table-bordered table-responsive">
        <thead>
          <tr>
            <tb>Ticket Number:</tb>
            <tb> <b>{ticket.id} </b></tb>
            {sessionStorage.setItem("TicketId", JSON.stringify(ticket.id))}
          </tr>
          <tr>
            {/* <tb>User-ID:</tb>
            <tb> {user?.id} </tb>
          */}
            <tb>PhoneNumber:</tb>
            <tb> {user?.mobile} </tb>
          </tr>






        </thead>
        <tbody>
          <tr>
            <th scope="row">Source</th>

            <td colspan="3">{ticket.src} </td>
          </tr>
          <th scope="row">Destination</th>

          <td colspan="3">{ticket.destination}</td>
          <tr></tr>

          <tr>
            <th scope="row">Booking:  </th>
            <th scope="row" colspan="2">{new Date(ticket?.datetime).toString()}</th>

          </tr>


          <tr>
            <th scope="row">Fare</th>
            {/* const total={ticket.adult}*{ticket.adult_fare} */}
            <td colspan="3"><li>Adult = {ticket.adult}*{ticket.adult_fare}
            </li>
              <li>Junior= {ticket.junior}*{ticket.junior_fare}</li>
              <li>Senior = {ticket.senior}*{ticket.senior_fare}</li>
              <li>PWD = {ticket.ph}*{ticket.ph_fare} </li> </td>

          </tr>

          <tr>
            <th scope="row">Total Fare</th>
            <td colspan="2"><b>{ticket.total_fare}</b></td>
          </tr>


        </tbody>
      </table>





    </div>
  );
}

export default DisplayTicket





