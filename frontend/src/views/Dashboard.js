import React from "react";
import ChartistGraph from "react-chartist";
import { BrowserRouter as Router, Routes, NavLink } from "react-router-dom";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

const pincode = require('pincode-lat-long');
console.log(pincode.getlatlong(560099));



function Dashboard(props) {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4"><b>e-Ticket Section </b></Card.Title>
                <p className="card-category">
                  {/* Handcrafted by our friends from{" "} */}
                  {/* <a href="https://nucleoapp.com/?ref=1712">NucleoApp</a> */}
                </p>
              </Card.Header>
              <Card.Body className="all-icons">
                <Row>


                  <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
                    <NavLink to="./qrcodescan">

                      <div className="font-icon-detail">
                        <img src={require("assets/img/scan.png")} class="img-responsive" alt="..." />
                        <p>Scan QR Code</p>
                      </div>
                    </NavLink>
                  </Col>


                  {/* <Col className="font-icon-list my0" lg="2" md="3" sm="4" xs="6">
                    <NavLink to="./eticket/buyticketinbus/3">
                      <div className="font-icon-detail my1 ">
                        <img src={require("assets/img/bus_blue_icon.png")} class="img-responsive" alt="..." />
                        <p>Buy In Bus</p>
                      </div>
                    </NavLink>
                  </Col> */}







                  <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
                    <NavLink to="./eticket/ViewBuses">

                      <div className="font-icon-detail">
                        <img src={require("assets/img/book_icon.png")} class="img-responsive" alt="..." />
                        <p>Reserve Ticket</p>
                      </div>
                    </NavLink>

                  </Col>

                  <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
                    <NavLink to="/admin/eticket/ViewMyTickets">

                      <div className="font-icon-detail">
                        <img src={require("assets/img/ticket_gold.png")} class="img-responsive" alt="..." />
                        <p>View My Tickets</p>
                      </div>
                    </NavLink>
                  </Col>


                  <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
                    <NavLink to="/admin/SearchMap/SearchMap">

                      <div className="font-icon-detail">
                        <img src={require("assets/img/maps.jpg")} class="img-responsive" alt="..." />
                        <p>Calculate Distance</p>
                      </div>
                    </NavLink>
                  </Col>


                  {/* <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6"> */}

                  {/* <div className="font-icon-detail"> */}
                  {/* <img src={require("assets/img/maps.jpg")}  class = "img-responsive" alt="..." /> */}
                  {/* <a href="https://www.google.com/maps/dir//Kathreguppe,+Banashankari+3rd+Stage,+Banashankari,+Bengaluru,+Karnataka+560085/@12.937674,77.5541221,13z/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x3bae3e2f336729cf:0x51b6d1bd19e6627d!3e3"> map MyJourney</a> */}


                  {/* <a href="https://www.google.com/maps/dir//Majestic,+Bengaluru,+Karnataka/@12.9542626,77.5514073,13z/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x3bae16052b7ceb8b:0xf9db1b29f78b9f96!3e3"> linik2</a> */}
                  {/* </div> */}
                  {/* </Col> */}
                  <hr>
                  </hr>


                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>



        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4"><b>e-Pass Section</b></Card.Title>
                <p className="card-category">
                  {/* Handcrafted by our friends from{" "} */}
                  {/* <a href="https://nucleoapp.com/?ref=1712">NucleoApp</a> */}
                </p>
              </Card.Header>
              <Card.Body className="all-icons">
                <Row>


                  {/* <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
                    <div className="font-icon-detail">
                    <img src={require("assets/img/scan.png")}  class = "img-responsive" alt="..." />
                      <p>Scan QR Code</p>
                    </div>
                  </Col> */}


                  <Col className="font-icon-list my0" lg="2" md="3" sm="4" xs="6">
                    <NavLink to="./epass/ChooseDailyPass">

                      <div className="font-icon-detail my1 ">
                        <img src={require("assets/img/bus_ticket_green_small.png")} class="img-responsive" alt="..." />
                        <p>Buy Daily Pass</p>
                      </div>
                    </NavLink>
                  </Col>


                  <Col className="font-icon-list my0" lg="2" md="3" sm="4" xs="6">
                    <NavLink to="./epass/ChooseWeeklyPass">

                      <div className="font-icon-detail my1 ">
                        <img src={require("assets/img/bus_ticket_blue_small.png")} class="img-responsive" alt="..." />
                        <p>Buy Weekly Pass</p>
                      </div>
                    </NavLink>

                  </Col>


                  <Col className="font-icon-list my0" lg="2" md="3" sm="4" xs="6">
                    <NavLink to="./epass/ChooseMonthlyPass">

                      <div className="font-icon-detail my1 ">
                        <img src={require("assets/img/bus_ticket_orange_small.png")} class="img-responsive" alt="..." />
                        <p>Buy Monthly Pass</p>
                      </div>
                    </NavLink>
                  </Col>











                  {/* <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
                    <div className="font-icon-detail">
                    <img src={require("assets/img/view_pass.png")}  class = "img-responsive" alt="..." />
                      <p>View My Pass</p>
                    </div>
                  </Col> */}



                  <hr>
                  </hr>


                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>


      </Container>
    </>
  );
}

export default Dashboard;
