import React from "react";
import {  NavLink } from "react-router-dom";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col
} from "react-bootstrap";
function VerifyPhone() {
    return (
        <>
          <Container fluid >
            <Row>
            


              <Col md="4">
                <Card className="card-user">
                  <div className="card-image">
                    <img
                      alt="..."
                      src={require("assets/img/bg.png")}
                    ></img>
                  </div>
                  <Card.Body>
                    <div className="author">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="avatar border-gray"
                          src={require("assets/img/otp.png")}
                        ></img>
                        <h5 className="title">Enter Valid PhoneNumber</h5>
                      </a>


                    


                    </div>
                    <Col className="px-1" md="12">
                          <Form.Group>
                            <label><strong>Phone Number</strong></label>
                            <Form.Control
                              defaultValue="+91"
                              placeholder="Valid phone number"
                              type="number"
                            ></Form.Control>
                          </Form.Group>
                        </Col>

                        


        
                          <Form.Group>
                            <br></br>
                            {"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}
                           <NavLink to="/admin/userlogin/verifyphone"> <Button
                              defaultValue="Raghu"
                              placeholder="Password"
                              type="button"
                              className="btn-fill pull-right md-6"
                            >Send OTP
                             
                            </Button>
                            </NavLink>
                          </Form.Group>
                        

                          {/* <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                   Login Now
                  </Button> */}
                     
                  </Card.Body>
                  
                  <hr></hr>
                  <div className="container mr-auto ml-auto">
                   

                  <Col className="px-1" md="12">
                          <Form.Group>
                            <label><b> Enter Verify OTP</b></label>
                            <Form.Control
                              defaultValue=""
                              placeholder="Valid OTP"
                              type="text"
                            ></Form.Control>
                          </Form.Group>
                        </Col>

                        <Form.Group>
                            <br></br>
                            {"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}
                           <NavLink to="/admin/dashboard"> <Button
                              defaultValue="Raghu"
                              placeholder="Password"
                              type="button"
                              className="btn-btn-success  md-6"
                            >Verify OTP
                             
                            </Button>
                            </NavLink>
                            <hr>
                            </hr>
                          </Form.Group>



                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </>
      );
    }
export default VerifyPhone
