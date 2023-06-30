import React from "react";
import { BrowserRouter  as Router,Routes,NavLink}   from "react-router-dom";
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

const ConductorDashboard = () => {

    return (
        <>
          <Container fluid>
            <Row>
              <Col md="12">
                <Card>
                  <Card.Header>
                    <Card.Title as="h4"><b>Conductor Section </b></Card.Title>
                    <p className="card-category">
                      {/* Handcrafted by our friends from{" "} */}
                      {/* <a href="https://nucleoapp.com/?ref=1712">NucleoApp</a> */}
                    </p>
                  </Card.Header>
                  <Card.Body className="all-icons">
                    <Row>
    
    
                    
    
    
                  
                       
                     
                     
                    
                     
                     
                    
                      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
                      <NavLink to="./viewduty"> 
    
                        <div className="font-icon-detail">
                        <img src={require("assets/img/book_icon.png")}  class = "img-responsive" alt="..." />
                          <p>View Assigned Duty</p>
                        </div>
                        </NavLink>
    
                      </Col>





    
                   <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
                      <NavLink to="./viewscannedverifiedtickets"> 
    
                        <div className="font-icon-detail">
                        <img src={require("assets/img/ticket_gold.png")}  class = "img-responsive" alt="..." />
                          <p>View   Verified Tickets</p>
                        </div>
                        </NavLink>
                      </Col> 

    
                     
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

export default ConductorDashboard
