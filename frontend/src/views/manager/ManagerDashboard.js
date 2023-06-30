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

function ManagerDashboard(props) {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4"><b>Manager Section </b></Card.Title>
                <p className="card-category">
                  {/* Handcrafted by our friends from{" "} */}
                  {/* <a href="https://nucleoapp.com/?ref=1712">NucleoApp</a> */}
                </p>
              </Card.Header>
              <Card.Body className="all-icons">
                <Row>





                  <Col className="font-icon-list my0" lg="2" md="3" sm="4" xs="6">
                    <NavLink to="./assignroutestobus">
                      <div className="font-icon-detail my1 ">
                        <img src={require("assets/img/bus_blue_icon.png")} class="img-responsive" alt="..." />
                        <p>Allocate Duty</p>
                      </div>
                    </NavLink>
                  </Col>







                  <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
                    <NavLink to="./viewassignedduty">

                      <div className="font-icon-detail">
                        <img src={require("assets/img/book_icon.png")} class="img-responsive" alt="..." />
                        <p>View Assigned Duty</p>
                      </div>
                    </NavLink>

                  </Col>

                  {/* <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
                  <NavLink to="./eticket/DisplayTicket"> 

                    <div className="font-icon-detail">
                    <img src={require("assets/img/ticket_gold.png")}  class = "img-responsive" alt="..." />
                      <p>View My Ticket</p>
                    </div>
                    </NavLink>
                  </Col> */}

                  <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
                    <NavLink to="./documentverify">

                      <div className="font-icon-detail">
                        <img src={require("assets/img/kyc_doc.png")} class="img-responsive" alt="..." />
                        <p><b>Verify KYC Doc's</b></p>
                      </div>
                    </NavLink>
                  </Col>

                  {/* <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
                    <NavLink to="./documentverify">

                      <div className="font-icon-detail">
                        <img src={require("assets/img/bus_mini.jfif")} class="img-responsive" alt="..." />
                        <p><b>Add Bus</b></p>
                      </div>
                    </NavLink>
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

export default ManagerDashboard;
