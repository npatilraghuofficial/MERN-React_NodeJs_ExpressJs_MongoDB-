import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

import { useEffect } from "react";
import axios from "axios";
import { data } from 'jquery';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';










function ViewMyTickets() {


  const [show, setShow] = useState(true);


  const [Ticket, setTicket] = useState([]);

  const [TicketId, setTicketId] = useState("");

  const [currentTicket, setCurrentTicket] = useState({});


  const [expiry, setExpiry] = useState("");

  const [Purchase, setPurchase] = useState("");

  const [Fare, setFare] = useState("");

  const [PhoneNumber, setPhoneNumber] = useState("");
  const [PurchasedTickets, setPurchasedTickets] = useState([{}]);


  useEffect(() => {
    const fetchdata = async () => {
      const phoneNumber = JSON.parse(localStorage.getItem("phoneNumberToken"));
      const TicketId = JSON.parse(localStorage.getItem("TicketId"));
      setTicketId(TicketId);


      const result = fetch("http://localhost:9000/user/getTicketDetails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          phoneNumber: phoneNumber
         
        })
      }).then((response) => {
        return response.json();

      })
      result.then((json) => {



        // const passdetails = json.data[0].ePass_details.Daily_ePass_AC;
        const Ticket = json.data[0].Tickets;
        setTicket(Ticket);
        sessionStorage.setItem("CurrentTicket", JSON.stringify(Ticket));
        console.log(sessionStorage.getItem("CurrentTicket"))

        // const expiry = json.data[0].ePass_details.Daily_ePass_AC.ExpiryDate;


        const PhoneNumber = json.data[0].phoneNumber;


        setPhoneNumber(PhoneNumber);



        console.log(Ticket);
        sessionStorage.setItem("AllTickets", JSON.stringify(Ticket));
        console.log(JSON.parse(sessionStorage.getItem("AllTickets")));




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


  const formatedtickets = Ticket?.map((t) => {
    const s = t.src;
    const source = s.split(",");
    console.log(t.TicketId);
    const d = t.destination;
    const destination = d.split(",");
    const PURCHASED_DATE = new Date(t.datetime).toString();
    console.log(PURCHASED_DATE);
    const PURCHASED_DATE_ = PURCHASED_DATE[8] + PURCHASED_DATE[9];
    const CurrentDate = new Date().toString();
    const CurrentDate_ = CurrentDate[8] + CurrentDate[9];
    console.log("current date", CurrentDate_);
    console.log("purchased date", PURCHASED_DATE_);

    if (PURCHASED_DATE_ == CurrentDate_) {
      console.log("Not ExpiredTICKET")


    }
    else {
      console.log("Expired TICKET")
      const phoneNumber = JSON.parse(localStorage.getItem("phoneNumberToken"));

      const res = fetch("http://localhost:9000/user/expireTicket", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          phoneNumber: phoneNumber,
          TicketId: t.TicketId,
        })
      }).then((response) => {
        return response.json();

      })
    }





    const setTicketId = (e) => {
      alert("clicked");
      console.log(t.TicketId);
      sessionStorage.setItem("TicketId", t.TicketId);
      console.log(sessionStorage.getItem("TicketId"));



    }
    return (
      <>

        <NavLink to="/admin/eticket/DisplayTickets" key={t.TicketId}>
          <Card sx={{ maxWidth: 345 }} className="p-2 m-1" onClick={setTicketId}>
            <CardActionArea>
              <CardMedia
                height="35"
                title=""

              />
              <img
                alt="..."
                className="card-user image-responsive img-responsive" height="210px"
                src={require("assets/img/plain.png")}
              ></img>


              <CardContent>
                <Typography gutterBottom variant="h5" component="div">

                  <sup><span class="badge badge-pill badge-success sm">{t.status}</span></sup>

                  <p>Ticket Id: {t.TicketId}</p>
                  <p>From: {source[0]}</p>
                  <p>To:  {destination[0]}</p>
                  <p><small>Date:{new Date(t.datetime).toString()}</small></p>

                  <Typography gutterBottom variant="h5" component="div">


                  </Typography>
                </Typography>

              </CardContent>
            </CardActionArea>
            <CardActions>

            </CardActions>

          </Card>
        </NavLink>
      </>
    );
  });

  return (
    <>
      <div class="container">
        <div class="row">{formatedtickets}</div>
      </div>
    </>
  );

}


export default ViewMyTickets
