import React from "react";
import { NavLink}   from "react-router-dom";

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

function MonthlyPass() {
  return (
    <>
      <Container fluid>
        <Row>
        <Col md="4">
            <Card className="card-user">
            <img
                  alt="..."
                  src={require("assets/img/bus_ticket_orange.png")}
                ></img>
                <br></br> <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>click selfie</label>
                        <Form.Control
                          defaultValue=""
                          disabled
                          placeholder=""
                          type="file"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                 <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>Date</label>
                        <Form.Control
                          defaultValue=""
                          disabled
                          placeholder=""
                          type="Date"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
              
                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>Bus Pass Type?(AC/Non-AC/Vayu Vajra)</label>
                        <Form.Control
                          defaultValue=""
                          disabled
                          placeholder=""
                          type="daalist"
                        ></Form.Control>
                      </Form.Group>
                    </Col>

                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>Price</label>
                        <Form.Control
                          defaultValue="1050"
                          disabled
                          placeholder="1050"
                          type="number"
                        ></Form.Control>

                      </Form.Group>
                      <NavLink to="/admin/epass/viewmonthlypass"> <Button
                              defaultValue="view"
                              placeholder="buy"
                              type="button"
                              className="btn-fill pull-right md-6"
                            >Buy Now
                             
                            </Button>
                            </NavLink>
                    </Col>

                    
              
              
              <hr></hr>
            
            </Card>
          </Col>

        
          
        </Row>
      </Container>
    </>
  );
}

export default MonthlyPass;
