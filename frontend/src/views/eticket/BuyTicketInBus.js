
import React from "react";
import { NavLink, useParams, useHistory } from "react-router-dom";

import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { backend_base_url } from "../../config";
// import ReCAPTCHA from "react-google-recaptcha";


import { MDBBtn } from 'mdb-react-ui-kit';


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
import { Label } from "reactstrap";
import { useEffect } from "react";
import axios from "axios";
function BuyTicketInBus() {

  const history = useHistory();
  const param = useParams();
  const [busData, setBusData] = useState({});
  const [src, setSrc] = useState(0);
  const [dest, setDest] = useState(1);

  const getBusData = async (id) => {
    const res = await axios.get(`${backend_base_url}/bus/${id}`);
    setBusData(res.data);
  }

  useEffect(() => {
    getBusData(param.id);
  }, []);

  const overflow = {
    overflow: "hidden"
  }

  const [AdultCount, setAdultCount] = useState(0)

  const [JuniorCount, setJuniorCount] = useState(0)

  const [SeniorCount, setSeniorCount] = useState(0)
  const [TotalCounts, setTotalCounts] = useState(0)


  const [PHCount, setPHCount] = useState(0)
  const [show, setShow] = useState(false);

  const ACountSetplus = () => {
    setAdultCount(AdultCount + 1)


    setTotalCounts(TotalCounts + 1)

  }




  const ACountSetMinus = () => {
    if (AdultCount == 0) {
      AdultCount == 0
    }
    else {
      setAdultCount(AdultCount - 1)
      setTotalCounts(TotalCounts - 1)
    }

  }

  const JCountSetplus = () => {

    setJuniorCount(JuniorCount + 1)
    setTotalCounts(TotalCounts + 1)

  }

  const JCountSetMinus = () => {
    if (JuniorCount == 0) {
      JuniorCount == 0
    } else {
      setJuniorCount(JuniorCount - 1)
      setTotalCounts(TotalCounts - 1)

    }


  }

  const SCountSetplus = () => {
    setSeniorCount(SeniorCount + 1)
    setTotalCounts(TotalCounts + 1)

  }

  const SCountSetMinus = () => {

    if (SeniorCount == 0) {
      SeniorCount == 0
    } else {

      setSeniorCount(SeniorCount - 1)
      setTotalCounts(TotalCounts - 1)
    }


  }


  const PHCountSetplus = () => {
    setPHCount(PHCount + 1)
    setTotalCounts(TotalCounts + 1)

  }

  const PHCountSetMinus = () => {
    if (PHCount == 0) {
      PHCount == 0
    } else {
      setPHCount(PHCount - 1)
      setTotalCounts(TotalCounts - 1)
    }

  }



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNext = () => {
    sessionStorage.clear();
    const sesData = {
      numberOfStops: dest - src,
      adult: AdultCount,
      junior: JuniorCount,
      senior: SeniorCount,
      ph: PHCount,
      src: busData.map_json_content[src].busstop,
      dest: busData.map_json_content[dest].busstop,
      busid: busData.id
    }
    sessionStorage.setItem("tickketData", JSON.stringify(sesData));
    sessionStorage.setItem("user", JSON.stringify(sesData));

    history.push("/admin/eticket/paynow");
  }

  return (




    <>
      <Container fluid>
        <Row>


          <Col md="8" className="disabled">
            <Card>
              <Card.Header>
                <Card.Title as="h4"><b><u>Bus Route Details</u></b></Card.Title>
               

                <Row>
                  <Col>
                    <td>Route Number :</td><td>{busData.route_no}</td>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <td>Bus Type :</td><td>Ordinary</td>
                  </Col>
                </Row>


                <Row>
                  <Col>
                    <td>Source :</td><td>{busData.origin}</td>
                  </Col>
                </Row>


                <Row>
                  <Col>
                    <td>Destination :</td><td> {busData.destination}</td>
                  </Col>
                </Row>
                <br>
                </br>
                <small> *If you want to change the direction of bus try with -3"</small>


              </Card.Header>
              <Card.Body>
                <Form>
                  <div className="p5 m5 text-align-center">


                    <hr>
                    </hr>

                  </div>
                  <Card.Title as="h4">Journey Details</Card.Title>
                  <hr>
                  </hr>

                  <Col className="px-1" >
                    <Form.Group>
                      <label>From</label>

                      <Form.Select className="form-control px-1 md-12" onChange={({ target: { value } }) => {
                        setSrc(value);
                      }} value={src} style={overflow}>
                        {
                          busData?.map_json_content?.map((item, id) => (
                            <option value={id} key={id + 1}>{item.busstop}</option>
                          ))
                        }
                      </Form.Select>

                    </Form.Group>
                  </Col>


                  <Col className="px-1" md="">
                    <Form.Group>
                      <label>To</label>

                      <Form.Select className="form-control px-1 md-12" onChange={({ target: { value } }) => {
                        setDest(value);
                      }} value={dest} style={overflow}>
                        {
                          busData?.map_json_content?.map((item, id) => (
                            <option value={id} key={id + 1}>{item.busstop}</option>
                          ))
                        }
                      </Form.Select>

                    </Form.Group>
                  </Col>






                  <br></br>
                  <Col className="px-1" md="6">
                    <Form.Group>



                      {"\u00A0"} {"\u00A0"} {"\u00A0"}
                      <h5>Note:Source & Destination is same for all </h5><br></br>




                      <label>
                        <br>
                        </br>
                      </label> {"\u00A0"}




                    </Form.Group>
                  </Col>
                  <br></br>


                  <Row >



                    <Col className="px-1" md="12" sm="12">
                      <Form.Group>
                        <Button rounded outline p0 type="button" position="fixed" onClick={ACountSetMinus}>
                          -</Button>
                        <Label >  {"\u00A0"} {"\u00A0"} {"\u00A0"}Adult :  {AdultCount} {"\u00A0"}{"\u00A0"} {"\u00A0"}{"\u00A0"} {"\u00A0"}{"\u00A0"} {"\u00A0"}</Label>

                        <Button rounded outline p0 type="button" position="fixed" onClick={ACountSetplus}>
                          +</Button>

                      </Form.Group>
                    </Col>
                  </Row>
                  <br></br>
                  <Row >

                    <Col className="px-1" md="6" sm="6">
                      <Form.Group>


                        <Button rounded outline p0 type="button" position="fixed" onClick={JCountSetMinus}>
                          -</Button>
                        <Label >  {"\u00A0"} {"\u00A0"} {"\u00A0"}Junior :   {JuniorCount}{"\u00A0"}{"\u00A0"} {"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"} {"\u00A0"}</Label>

                        <Button rounded outline p0 type="button" position="fixed" onClick={JCountSetplus}>
                          +</Button>
                      </Form.Group>
                    </Col>
                  </Row>
                  <br></br>


                  <Row >

                    <Col className="px-1" md="12" sm="12">
                      <Form.Group>

                        <Button rounded outline p0 type="button" position="fixed" onClick={SCountSetMinus}>
                          -</Button>
                        <Label >  {"\u00A0"} {"\u00A0"} {"\u00A0"}Senior :  {"\u00A0"}{"\u00A0"}{SeniorCount} {"\u00A0"}{"\u00A0"} {"\u00A0"} {"\u00A0"}</Label>

                        <Button rounded outline p0 type="button" position="fixed" onClick={SCountSetplus}>
                          +</Button>

                      </Form.Group>





                    </Col>
                  </Row>
                  <br></br>

                  <Row >

                    <Col className="px-1" md="6" sm="6">
                      <Button rounded outline p0 type="button" position="fixed" onClick={PHCountSetMinus}>
                        -</Button>
                      <Label >  {"\u00A0"} {"\u00A0"} {"\u00A0"}PHY.H:  {"\u00A0"} {PHCount}  {"\u00A0"}{"\u00A0"} {"\u00A0"}{"\u00A0"} {"\u00A0"}</Label>

                      <Button rounded outline p0 type="button" position="fixed" onClick={PHCountSetplus}>
                        +</Button>


                    </Col>



                    {/* <Captcha></Captcha> */}
                  </Row>
                  <br></br>





























                  <Col className="px-1" md="4">
                    <Col className="px-1" md="12">
                      <Form.Group>
                        {/* <ReCAPTCHA 
                       sitekey="6LcS6mIiAAAAAMvinkjBdKOrGU8bc0hh6KTBhup2"
                       onChange={onchange}>

                       </ReCAPTCHA>                            */}
                      </Form.Group>
                    </Col>

                    <label></label>




                  </Col>
















                </Form>
              </Card.Body>
            </Card>
          </Col>





        </Row>
        <div className="container">
          <h1></h1>






          <Button className="btn-fill pull-right" variant="info" onClick={handleClose}>
            Edit
          </Button>
          <Button className="btn-fill pull-right" variant="info" onClick={handleNext}>
            Next!!
          </Button>


        </div>

      </Container>
    </>
  );
}




export default BuyTicketInBus
