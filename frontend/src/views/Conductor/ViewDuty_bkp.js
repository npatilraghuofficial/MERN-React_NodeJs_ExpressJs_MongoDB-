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


import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const Tickets = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];








function ViewDuty() {


  const [show, setShow] = useState(true);


  const [Ticket, setTicket] = useState([]);

  const [TicketId, setTicketId] = useState("");

  const [currentTicket, setCurrentTicket] = useState({});

  const [DutyDetails, setDutyDetails] = useState([]);


  const [expiry, setExpiry] = useState("");

  const [Purchase, setPurchase] = useState("");

  const [Fare, setFare] = useState("");

  const [PhoneNumber, setPhoneNumber] = useState("");


  useEffect(() => {
    const fetchdata = async () => {
      const phoneNumber = localStorage.getItem("phoneNumberToken");
      const TicketId = JSON.parse(localStorage.getItem("TicketId"));
      setTicketId(TicketId);
      console.log(DutyDetails);


      const result = fetch("http://localhost:9000/user/getBusTicketDetailsForConductor", {
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
      }).then((json) => {
        // const passdetails = json.data[0].ePass_details.Daily_ePass_AC;
        // const DutyDetails_ = Object.entries(json.data);

        console.log(json.data);
        sessionStorage.setItem("DutyData", JSON.stringify(json.data));

        console.log(JSON.parse(sessionStorage.getItem("DutyData")));

        setDutyDetails(JSON.parse(sessionStorage.getItem("DutyData")));

        console.log(DutyDetails);



        // const expiry = json.data[0].ePass_details.Daily_ePass_AC.ExpiryDate;


        const PhoneNumber = JSON.parse(localStorage.getItem("phoneNumberToken"));



        setPhoneNumber(PhoneNumber);



        console.log(Ticket);




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



  return (
    <>

<Container fluid>
        <p><b>**Only Route Details can be updated</b></p>
        <Row>



          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Conductor Details</Card.Title>

              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>Conductor id</label>
                        <Form.Control
                          value={dutyData.Conductor_details.PhoneNumber}
                          placeholder="c1"
                          type="text"
                          disabled
                          // onChange={((e) => setConductorNumber(e.target.value))}
                        ></Form.Control>
                      </Form.Group>
                    </Col>






                    <Col className="px-1" md="6">
                      <Form.Group>
                        <label>  Duty Assign Date &time</label>
                        <Form.Control
                          value={dutyData.Conductor_details.PhoneNumber}
                          placeholder="Username"
                          disabled
                          
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>


                  </Row>
                 
                  <Row>


                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>First Name</label>
                        <Form.Control
                          value={dutyData.Conductor_details.FirstName}
                          placeholder="Fname"
                          disabled
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Last Name</label>
                        <Form.Control
                          defaultValue="Ln"
                          placeholder="Last Name"
                          type="text"
                          disabled
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                  </Row>
                  <hr></hr>
                  <Card.Header>

                  </Card.Header>








                </Form>
              </Card.Body>
            </Card>
          </Col>



          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Bus Details</Card.Title>

              </Card.Header>
              <Row>
                <Col className="pr-1" md="5">
                  <Form.Group>
                    <label>Bus id</label>
                    <Form.Control
                      // value={busId}
                      placeholder="c1"
                      type="text"
                      disabled
                      // onChange={((e) => setBusId(e.target.value))}
                    ></Form.Control>
                  </Form.Group>
                </Col>






                <Col className="px-1" md="6">
                  <Form.Group>
                    <label>  Duty Assign Date &time</label>
                    <Form.Control
                      // Value={dateNow + '_' + time}
                      placeholder="Username"
                      disabled
                      
                      type="text"
                    ></Form.Control>
                  </Form.Group>
                </Col>


              </Row>

              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>Bus Number</label>
                        <Form.Control
                          // Value={updateDutyDetails.BusNumber}
                          // onChange={((e) => setBusNumber(e.target.value))}
                            disabled  
                          placeholder="KA-01-F-1111"
                          type="text"


                        ></Form.Control>
                      </Form.Group>
                    </Col>











                  </Row>
                  <Row>
                    {/* <Col className="px-3" md="3">
                      <Form.Group>
                        <label>  </label>
                        <Form.Control
                          defaultValue="Search"
                          placeholder="search"
                          Disabled
                          className="btn btn-primary"
                          type="button"
                          variant="info"
                          onClick={fetchBus}
                        ></Form.Control>
                      </Form.Group>
                    </Col> */}
                  </Row>
                  <hr></hr>
                  <Row>


                  </Row>
                  <Row>

                  </Row>
                  <hr></hr>

                  <Row  >

                    <Card.Title as="h3">Route Details</Card.Title>



                    <Col className="pr-1" md="6">




                    </Col>
                    <br></br>
                    <br></br>

                    <label>Route ID</label>
                    <Form.Control
                      // defaultValue={route_id}
                      placeholder="1"
                      type="text"
                      // onChange={((e) => setRoute_id(e.target.value))}


                    ></Form.Control>




                    <Form.Control
                      defaultValue="Search"
                      placeholder="search"
                      Disabled
                      className="btn btn-primary"
                      type="button"
                      variant="info"
                      // onClick={fetchRoute}
                    ></Form.Control>



                    <Col className="pr-1" md="4">



                      <Form.Group>
                        <label>Route No</label>
                        <Form.Control
                          // defaultValue={route_no}
                          placeholder="City"
                          type="text"
                          disabled
                          // onChange={((e) => setRoute_No(e.target.value))}


                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>Source</label>
                        <Form.Control
                          // defaultValue={source}
                          placeholder="Country"
                          disabled
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>Destination</label>
                        <Form.Control
                          // defaultValue={dest}

                          placeholder="ZIP Code"
                          type="text"
                          disabled
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>



                  <Row>
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>Disatance in KM</label>
                        <Form.Control
                          // defaultValue={distance}
                          placeholder=""
                          disabled
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>

                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>Duty Start Date time</label>
                        <Form.Control
                          defaultValue="KBS"
                          placeholder="Country"

                          type="datetime-local"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>Duty End Date time</label>
                        <Form.Control
                          defaultValue="ATB"

                          placeholder="ZIP Code"
                          type="datetime-local"

                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-1" md="12">
                      <Form.Group>


                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    className="btn-fill pull-right"
                    variant="info"
                    // onClick={assignDuty}
                  >
                    Assign Route & generate QR Code
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>




        </Row>
      </Container>
    </>
  );

}


export default ViewDuty
