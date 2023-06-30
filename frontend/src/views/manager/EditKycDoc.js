import React, { useState, useEffect } from "react";
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
import validatekycupdate from "./validatekycupdate";

function EditKycDoc() {
  const [users, setUsers] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Gender, setGender] = useState("");

  const [DOB, setDOB] = useState("");

  const [Age, setAge] = useState("");

  const [City, setCity] = useState("");

  const [Country, setCountry] = useState("");

  const [email, setEmail] = useState("");

  const [PostalCode, setPostalCode] = useState("");

  const [Address, setAddress] = useState("");

  const [userProfileData, setUserProfileData] = useState({});
  const [phoneNumber, setPhoneNumber] = useState();







  useEffect(() => {
    const PhoneNumber = JSON.parse(localStorage.getItem("phoneNumberToken"));
    console.log(PhoneNumber);
    setPhoneNumber(PhoneNumber);

    const userProfile = {
      FirstName: FirstName,
      LastName: LastName,
      email: email,
      DOB: DOB,
      Gender: Gender,
      phoneNumber: phoneNumber,
      City: City,
      Country: Country,
      PostalCode: PostalCode,
      Address: Address



    }
    console.log(userProfile);


    console.log(typeof (userProfile));



  }, []);


  const Update = () => {





    console.log(FirstName);
    console.log(LastName);
    console.log(email);
    console.log(DOB);
    console.log(Gender);
    console.log(City);
    console.log(Country);
    console.log(PostalCode);
    console.log(phoneNumber);
    console.log(Address);
    const userProfile = {
      FirstName: FirstName,
      LastName: LastName,
      email: email,
      DOB: DOB,
      Gender: Gender,
      phoneNumber: phoneNumber,
      City: City,
      Country: Country,
      PostalCode: PostalCode,
      Address: Address
    }
    sessionStorage.setItem("userProfile", JSON.stringify(userProfile));

    validatekycupdate();

  }
  return (
    <>


      <Container fluid>
        <Row>


          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Edit Profile(Manager-D)</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>Phone Number</label>
                        <Form.Control
                          Value={phoneNumber}
                          disabled
                          placeholder="9876543210"
                          type="text"

                        ></Form.Control>
                      </Form.Group>
                    </Col>




                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Form.Control
                          placeholder="Email"
                          Value={email}
                          type="email"
                          id="email"

                          onChange={((e) => setEmail(e.target.value))}


                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <font color="red" > <span id="emailErr"></span></font><br></br>

                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>First Name</label>
                        <Form.Control
                          defaultValue={FirstName}
                          placeholder="Fname"
                          type="text"
                          id="fname"
                          onChange={((e) => setFirstName(e.target.value))}

                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <font color="red" > <span id="fnameErr"></span></font><br></br>

                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Last Name</label>
                        <Form.Control
                          defaultValue={LastName}
                          placeholder="Last Name"
                          type="text"
                          onChange={((e) => setLastName(e.target.value))}
                          id="lname"

                        ></Form.Control>

                      </Form.Group>
                    </Col>

                  </Row>
                  <Row>

                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>Gender</label>
                        {"\u00A0"}{"\u00A0"}{"\u00A0"}


                        <Form.Control
                          defaultValue={Gender}
                          placeholder=""
                          type="text"
                          onChange={((e) => setGender(e.target.value))}
                          id="gender"

                        ></Form.Control>


                        {"\u00A0"}{"\u00A0"}{"\u00A0"}
                        <br>
                        </br>


                        {"\u00A0"}{"\u00A0"}{"\u00A0"}

                      </Form.Group>
                    </Col>
                    <font color="red" > <span id="genderErr"></span></font><br></br>



                    <Col className="px-1" md="3">
                      <Form.Group>
                        <label>Date of Birth</label>

                        <Form.Control
                          defaultValue={DOB}
                          placeholder="Username"
                          type="Date"
                          onChange={((e) => setDOB(e.target.value))}
                          id="dob"

                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <font color="red" > <span id="dobErr"></span></font><br></br>







                    <Col md="12">
                      <Form.Group>
                        <label>Address</label>
                        <Form.Control
                          defaultValue={Country}
                          placeholder="Home Address"
                          type="text"
                          onChange={((e) => setAddress(e.target.value))}
                          id="address"

                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <font color="red" > <span id="addressErr"></span></font><br></br>

                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>City</label>
                        <Form.Control
                          defaultValue={City}
                          placeholder="City"
                          type="text"
                          onChange={((e) => setCity(e.target.value))}
                          id="city"

                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <font color="red" > <span id="cityErr"></span></font><br></br>

                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>Country</label>
                        <Form.Control
                          defaultValue={Country}
                          placeholder="Country"
                          type="text"
                          onChange={((e) => setCountry(e.target.value))}
                          id="country"

                        ></Form.Control>
                      </Form.Group>
                      <font color="red" > <span id="countryErr"></span></font><br></br>



                    </Col>

                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>Postal Code</label>
                        <Form.Control
                          defaultValue={PostalCode}
                          plafceholder="Country"
                          type="text"
                          onChange={((e) => setPostalCode(e.target.value))}
                          id="pcode"

                        ></Form.Control>
                      </Form.Group>
                      <font color="red" > <span id="postalErr"></span></font><br></br>


                    </Col>



                  </Row>
                  <Row>

                  </Row>
                  <Button
                    className="btn-fill pull-right"
                    type="button"
                    variant="info"
                    onClick={Update}
                  >
                    Update Profile
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

export default EditKycDoc;