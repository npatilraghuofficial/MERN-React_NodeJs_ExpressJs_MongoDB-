
import { NavLink } from "react-router-dom";

import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import React, { useEffect } from "react";
import axios from "axios";



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
function ReserveTicket() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [users ,setUsers] =useState("");
  const [route_details,setRoute_details] = useState({});




  useEffect(() =>{
    const fetchdata = async() =>{
    const data = await axios.get("http://localhost:3000/users");
    console.log(data.data[0]);
   setUsers(data);
  //  console.log(data.data.data[0]);
  //  console.log(data.data.data[0].user_details);
  // const userFirstName = data.data.data[0].user_details.FirstName;
  const route_details = data.data[0];
console.log(route_details);
setRoute_details({... route_details});
   console.log(route_details);




    };
    fetchdata();
    console.log("add");
   
    console.log("state variable",route_details);

   
  },[]);


 


  return (




    <>
      

      <Container fluid>
        <Row>


          <Col md="8" className="disabled">
            <Card>
              {/* <Card.Header>
                <Card.Title as="h4"><b><u>Bus & Route Details</u></b></Card.Title>
                <Row>
                  <Col>
                    <td>Bus Number :KA-01-F-1234</td>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <td>Route Number :</td><td>KBS-3A</td>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <td>Bus Type :</td><td>Ordinary</td>
                  </Col>
                </Row>


                <Row>
                  <Col>
                    <td>Source :</td><td>KBS</td>
                  </Col>
                </Row>


                <Row>
                  <Col>
                    <td>Destination :</td><td> ATB</td>
                  </Col>
                </Row>


                <Row>
                  <Col>
                    <td>via1 :</td><td> shantinagar</td>
                  </Col>
                </Row>


                <Row>
                  <Col>
                    <td>via2 :</td><td>      Madiwala</td>
                  </Col>
                </Row>

              </Card.Header>
               */}


              <Card.Body>
                <Form>
                  <div className="p5 m5 text-align-center">


                    <hr>
                    </hr>

                  </div>
                  <Card.Title as="h4">Enter Journey Details<br>
                  </br><span>(e-Ticket Validity 1-day)
                    <br></br>(12PM - s12AM)</span></Card.Title>
                  <hr>
                  </hr>

                  <Col className="px-1" md="5">
                    <Form.Group>
                      <label>Prefered Route Number</label>

                      <Form.Control
                        // Value={userProfileData.route_no}
                        placeholder="optional"
                        value={route_details.route_no}
                        type="textbox"
                      ></Form.Control>
                    </Form.Group>
                    <Button
                      className="btn-fill pull-right"
                      type="button"
                      variant="info"
                      onClick={handleShow}
                    >
                    Search
                    </Button>
                  </Col>

                  <Col className="px-1" md="5">
                    <Form.Group>
                      <label>From</label>

                      <Form.Select    className ="form-control" aria-label="Default select example">
      <option>Open this select menu</option>
  
      <option value="1">{route_details}</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>



    


                    </Form.Group>
                  </Col>

                  <Col className="px-1" md="5">
                    <Form.Group>
                      <label>To</label>
                      <Form.Select  className ="form-control" aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
                    </Form.Group>
                  </Col>


                


                  
               

                  <Col className="px-1" md="5">
                    <Form.Group>
                      <label>No Of Tickets</label>

                      <Form.Control
                        defaultValue="select"
                        placeholder="Number Of Tickets"
                        type="NUMBER"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                 
                  
                  <Col className="px-1" md="5">
                    <Form.Group>
                      <label>Source & Destination is same for all?  </label><br></br>


<label>
  Yes
</label> {"\u00A0"}
                      <input
                        defaultValue="yes"
                        placeholder="yes"
                        type="checkbox"
                        checked="Yes"
                      />
                      {"\u00A0"} {"\u00A0"} {"\u00A0"}
                     


                     
                      <label>
                        <br>
                        </br>
  No(Future implementation)
</label> {"\u00A0"}



                     
                    </Form.Group>
                  </Col>
                  <br></br>



                  <Col className="px-1" md="5" sm="2">
                  <label>Choose Category</label>
                    <Form.Group>
                     
                      <label>Adult</label>

                      <Form.Control
                        defaultValue="select"
                        placeholder="Adult "
                        type="number"
                      ></Form.Control>
                    </Form.Group>
                  </Col>


                  <Col className="px-1" md="5">
                  <label>Junior</label>


                    <Form.Group>

                      <Form.Control
                        defaultValue="select"
                        placeholder="Junior "
                        type="number"
                      ></Form.Control>
                    </Form.Group>
                  </Col>

                  <Col className="px-1" md="5">
                  <label>Senior Citizen</label>

                    <Form.Group>

                      <Form.Control
                        defaultValue="select"
                        placeholder="Senior Citizen "
                        type="number"
                      ></Form.Control>
                    </Form.Group>
                  </Col>



                  <Col className="px-1 dark" md="5">
                  <label>Phys.H</label>

                    <Form.Group>

                      <Form.Control
                        size="25"
                        defaultValue="select"
                        placeholder="pwd"
                        type="number"
                      ></Form.Control>
                    </Form.Group><br></br>

                    <Col className="px-1" md="5">
                      <Form.Group>
                        <label>Total Fare(INR)</label>
                        <Form.Control
                          defaultValue="50"
                          placeholder="Total Fare"
                          disabled
                          type="number"
                        ></Form.Control>
                      </Form.Group>
                    </Col>






                    <Button
                      className="btn-fill pull-right"
                      type="button"
                      variant="info"
                      onClick={handleShow}
                    >
                      Check out
                    </Button>

                  </Col>







                  <Col className="px-1" md="4">
                    <Form.Group>
                      <label></label>



                    </Form.Group>
                  </Col>
















                </Form>
              </Card.Body>
            </Card>
          </Col>





        </Row>
        <div className="container">
          <h1></h1>

        

          <Modal size="lg" show={show} onHide={handleClose} style={{ content : {top: '0%'}}}>
            <Modal.Header closeButton>
              <Modal.Title>Final Confirmation<br>
              </br>(Please scroll down)</Modal.Title>
            </Modal.Header>
            <Modal.Body>

            <table class="table table-bordered table-responsive">
  <thead>
    <tr>
    <th scope="col">P.No's</th>
      <th scope="col">Type</th>
      <th scope="col">Source</th>
      <th scope="col">Dest</th>
      <th scope="col">Fare</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">2</th>

      <td>Adult_1</td>
      <td>KBS</td>
      <td>ATB</td>

      <td>30</td>
      </tr>
      <tr>
      <th scope="row"></th>

      <td>Adult_2</td>
      <td>KBS</td>
      <td>ATB</td>
      <td>30</td>

      </tr>
    

    <tr>
      <th scope="row">2</th>
      <td>Juniors_1</td>
      <td>KBS</td>
      <td>ATB</td>
      <td>25</td>

    </tr>
    <tr>
      <th scope="row"></th>
      <td>Juniors_2</td>
      <td>KBS</td>
      <td>ATB</td>
      <td>25</td>

    </tr>
   


    <tr>
      <th scope="row">2</th>
      <td>Senior_1</td>
      <td>KBS</td>
      <td>ATB</td>

      <td>20</td>
    </tr>

    <tr>
      <th scope="row"></th>
      <td>Senior_2</td>
      <td>KBS</td>

      <td>ATB</td>
      <td>20</td>
    </tr>

    <tr>
      <th scope="row">1</th>
      <td>DisABLED</td>
      <td>KBS</td>
      <td>ATB</td>

      <td>20</td>
    </tr>

    <tr>
      <th scope="row">Fare</th>
      <td colspan="3">Adult Fare= 2*30 = 60  Junior Fare= 2*25 = 50  Senior Fare= 2*20 = 40  PWD Fare= 1*20 = 20 </td>
      
    </tr>

    <tr>
      <th scope="row">Total Fare</th>
      <td colspan="2"><b>170</b></td>
    </tr>


  </tbody>
</table>

            </Modal.Body>
            <Modal.Footer>
            <Button className="btn-fill pull-right" variant="info" onClick={handleClose}>
               Edit
              </Button>
              <NavLink to="/admin/eticket/paynow">
         <Button className="btn-fill pull-right" variant="info" onClick={handleClose}>
                Pay Now!!
              </Button>
              </NavLink>
            </Modal.Footer>
          </Modal>
          
        </div>

      </Container>
    </>
  );
}




export default ReserveTicket
