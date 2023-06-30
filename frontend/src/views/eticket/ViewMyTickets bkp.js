import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { NavLink } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { useEffect, useState } from "react";






function ViewMyTickets() {
  const [Tickets, setTickets] = useState([]);

  const [TicketId, setTicketId] = useState("");

  const [user, setUser] = useState();
  const [data, setData] = useState({});


  useEffect(() => {
    fetch("http://localhost:3001/ticket/")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setTickets(res);
      });
  }, []);


  useEffect(() => {
    setData(JSON.parse(sessionStorage.getItem("tickketData")));
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);


  const formatedtickets = Tickets.map((t) => {
    const s = t.src;
    const source = s.split(",");
    const d = t.destination;
    const destination = d.split(",");

    const setTicketId = (e) => {
      alert("clicked");
      console.log(t.id);
      sessionStorage.setItem("TicketId", JSON.parse(t.id));
      console.log(sessionStorage.getItem("TicketId"));



    }
    return (
      <>

        <NavLink to="/admin/eticket/DisplayTickets">
          <Card sx={{ maxWidth: 345 }} className="p-2 m-1" onClick={setTicketId}>
            <CardActionArea>
              <CardMedia
                height="35"
                title=""

              />
              <img
                alt="..."
                className="card-user image-responsive img-responsive" height="210px"
                src={require("assets/img/bus_ticket_orange.png")}
              ></img>


              <CardContent>
                <Typography gutterBottom variant="h5" component="div">

                  <sup><span class="badge badge-pill badge-success sm">Active</span></sup>
                  <p>From: {source[0]}</p>
                  <p>To:  {destination[0]}</p>

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

export default ViewMyTickets;
