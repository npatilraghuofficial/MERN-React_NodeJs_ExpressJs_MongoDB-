import React, { useState } from "react";
import 'react-select-search/style.css'
import SelectSearch from 'react-select-search';
import { useHistory } from "react-router-dom";
import { useEffect } from "react";



import DocumentVerify from "./DocumentVerify";

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
  Col,
  Alert,
} from "react-bootstrap";
import { Label } from "reactstrap";
import GenerateQrCode from "./GenerateQrCode";



function AssignRoutesToBus() {
  const history = useHistory();


  let dateNow = new Date().toLocaleDateString();
  let timeNow = new Date().toLocaleTimeString();
  const [time, setTime] = useState(timeNow)
  const [conductorNumber, setConductorNumber] = useState();
  
  const [updateDutyDetails, setUpdateDutyDetails] = useState({});



  const [conductorName, setConductorName] = useState();

  const [conductorDetails, setConductorDetails] = useState({});

  const [routeDetails, setRouteDetails] = useState();

  const [route_id, setRoute_id] = useState();

  const [route_no, setRoute_no] = useState();
  const [source, setSource] = useState();
  const [dest, setDest] = useState();
  const [distance, setDistance] = useState();
  const [stops, setStops] = useState([]);

  const [busId, setBusId] = useState();
  const [busNumber, setBusNumber] = useState("");





  function clock() {
    timeNow = new Date().toLocaleTimeString();
    setTime(timeNow);

  }

  setInterval(clock, 1000)

  useEffect(() => {
    const updateDetails = JSON.parse(sessionStorage.getItem("updateDetails"));
    console.log(updateDetails);
    setUpdateDutyDetails(updateDetails);
    console.log(updateDetails);
    setConductorNumber(parseInt(updateDetails.ConductorPhoneNumber));

    setRoute_id(parseInt(updateDetails.RouteNumber));
    console.log(conductorNumber);
    setBusId(parseInt(updateDetails.BusId));
    fetchConductor();
    fetchRoute();
    fetchBus();

  }, []);



  const fetchConductor = (e) => {

    const result = fetch("http://localhost:9000/user/getConductorDetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        phoneNumber: conductorNumber,
        TicketId: 139
      })
    }).then((response) => {
      return response.json();

    })
    result.then((json) => {
      console.log(json.data);
      setConductorDetails(json.data[0]);
      sessionStorage.setItem("ConductorDetails", JSON.stringify(json.data[0]));
      console.log(sessionStorage.getItem("ConductorDetails"));
      setConductorName(json.data[0].Conductor_details.FirstName);


    });



  };


  const fetchRoute = (e) => {


    const result = fetch("http://localhost:9000/user/getRouteDetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        route_id: route_id,

      })
    }).then((response) => {
      return response.json();

    })
    result.then((json) => {

      const route_details = json.data[0];
      setRouteDetails(route_details);
      console.log(routeDetails);



      sessionStorage.setItem("RouteDetails", JSON.stringify(json.data[0]));
      console.log(sessionStorage.getItem("RouteDetails"));

      setRoute_no(json.data[0].RouteDetails.route_no);

      setSource(json.data[0].RouteDetails.origin);

      setDest(json.data[0].RouteDetails.destination);

      setDistance(json.data[0].RouteDetails.distance);
      setStops(json.data[0].RouteDetails.intermediateStops[0]);
      console.log(stops);


    });



  };


  const fetchBus = (e) => {

    const result = fetch("http://localhost:9000/user/getBusDetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        busId: busId,

      })
    }).then((response) => {
      return response.json();

    })
    result.then((json) => {

      const bus_Number = json.data[0].Bus_details.BusNumber;
      setBusNumber(bus_Number);
      console.log(busNumber);
      console.log(json.data[0]);
    });



  };


  const assignDuty = (e) => {
    alert("assign duty");
    sessionStorage.setItem("dutyLink", `http://localhost:3001/bus/${route_id}`);
    console.log(sessionStorage.getItem("dutyLink"));
    console.log(busId);

    // history.push("generateqrcode");

    const result = fetch("http://localhost:9000/bustickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {
          BusId: busId,
          Bus_details: {
            busNumber: busNumber,
            busType: "11111",
            Engine: "11111",
            Mfg_Year: "11111",
            YearOfExpiry: "11111",
            Status: "11111",
            Age: "11111",
            depot: "11111",
            trail: 6,
          },
          RouteDetails: {

            route_no: route_no,
            distance: distance,
            origin: source,
            destination: dest,
            intermediateStops: [{
              stop: "a"
            },
            {

              stop: "b"

            }, {

              stop: "c"

            }]
          },
          Conductor_details: {

            PhoneNumber: conductorNumber,
            FirstName: "name",
            LastName: "name",
            Gender: "name",
            DOB: 55,
            Age: "name",
          },
          Manager_details: {

            PhoneNumber: 8722583680,
            FirstName: "name",
            LastName: "name",
            Gender: "name",
            DOB: 55,
            Age: "name",
          },


        })
    })
  }


  return (
    <>

      <Container fluid>
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
                          value={conductorNumber}
                          placeholder="c1"
                          type="text"
                          onChange={((e) => setConductorNumber(e.target.value))}
                        ></Form.Control>
                      </Form.Group>
                    </Col>






                    <Col className="px-1" md="6">
                      <Form.Group>
                        <label>  Duty Assign Date &time</label>
                        <Form.Control
                          Value={dateNow + '_' + time}
                          placeholder="Username"
                          disa
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>


                  </Row>
                  <Row>
                    <Col className="px-3" md="3">
                      <Form.Group>
                        <label>  </label>
                        <Form.Control
                          defaultValue="Search"
                          placeholder="search"
                          Disabled
                          className="btn btn-primary"
                          type="button"
                          variant="info"
                          onClick={fetchConductor}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>


                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>First Name</label>
                        <Form.Control
                          value={conductorName}
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
                    <label>Enter Bus id</label>
                    <Form.Control
                      value={busId}
                      placeholder="c1"
                      type="text"
                      onChange={((e) => setBusId(e.target.value))}
                    ></Form.Control>
                  </Form.Group>
                </Col>






                <Col className="px-1" md="6">
                  <Form.Group>
                    <label>  Duty Assign Date &time</label>
                    <Form.Control
                      Value={dateNow + '_' + time}
                      placeholder="Username"
                      disa
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
                          defaultValue={busNumber}

                          placeholder="KA-01-F-1111"
                          type="text"


                        ></Form.Control>
                      </Form.Group>
                    </Col>











                  </Row>
                  <Row>
                    <Col className="px-3" md="3">
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
                    </Col>
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
                      defaultValue={route_id}
                      placeholder="1"
                      type="text"
                      onChange={((e) => setRoute_id(e.target.value))}


                    ></Form.Control>




                    <Form.Control
                      defaultValue="Search"
                      placeholder="search"
                      Disabled
                      className="btn btn-primary"
                      type="button"
                      variant="info"
                      onClick={fetchRoute}
                    ></Form.Control>



                    <Col className="pr-1" md="4">



                      <Form.Group>
                        <label>Route No</label>
                        <Form.Control
                          defaultValue={route_no}
                          placeholder="City"
                          type="text"

                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>Source</label>
                        <Form.Control
                          defaultValue={source}
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
                          defaultValue={dest}

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
                          defaultValue={distance}
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
                    onClick={assignDuty}
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
export default AssignRoutesToBus;
