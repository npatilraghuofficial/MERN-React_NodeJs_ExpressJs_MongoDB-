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

function User() {
  const [users, setUsers] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Gender, setGender] = useState("");

  const [DOB, setDOB] = useState("");

  const [Age, setAge] = useState("");

  const [City, setCity] = useState("");

  const [email, setEmail] = useState("");

  const [Country, setCountry] = useState("");

  const [PostalCode, setPostalCode] = useState("");

  const [userProfileData, setUserProfileData] = useState({});

  const phoneNumber = JSON.parse(localStorage.getItem("phoneNumberToken"))
  const [KYC_Status, setKYC_Status] = useState("");
  const [KYC ,SetKYC] = useState(false);

  console.log(phoneNumber);


  useEffect(() => {
    const result = fetch("http://localhost:9000/user/getPassDetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        phoneNumber: phoneNumber
      })
    }).then((response) => {
      return response.json();
      
    })
    result.then((json) => {
      const userProfileData = json.data[0];
      const FirstName = json.data[0].user_details.FirstName;
      const LastName = json.data[0].user_details.LastName;
      const Gender = json.data[0].user_details.Gender;
      const DOB = json.data[0].user_details.DOB;

      const email = json.data[0].user_details.email;

      const Age = json.data[0].user_details.Age;
      const City = json.data[0].user_details.City;
      const Country = json.data[0].user_details.Country;
      const PostalCode = json.data[0].user_details.PostalCode;

      const KYC_Status = json.data[0].KYC_Status;

      if (KYC_Status === "Approved") {
        SetKYC(true);
      }

      setUserProfileData(userProfileData);
      setFirstName(FirstName);
      setLastName(LastName);
      setGender(Gender);
      setDOB(DOB);
      setAge(Age);
      setCity(City);
      setCountry(Country);
      setPostalCode(PostalCode);

      setKYC_Status(KYC_Status);
    
            setEmail(email);

  
      console.log(json.data);
  
      console.log(userProfileData);
      console.log(FirstName);
      console.log(LastName);
      console.log(Gender);
      console.log(DOB);
      console.log(Age);
      console.log(City);
  
      console.log(Country);
      console.log(PostalCode);

console.log(KYC_Status);    });
    
  }, []);  

const UpdateProfile = () => {
  alert("v");
}
 



  return (
    <>


      <Container fluid>
        <Row>
         

          <Col md="12">
     {KYC ? <label> KYC Status - <span class="badge  badge-success lg">Approved</span></label> : <label> KYC Status - <span class="badge  badge-danger lg">Pending</span></label>}
<hr></hr>

 {/* <label> <font color="red"> <span >{KYC_Status}</span></font></label> */}
 {!KYC &&(<><font color="red"> <span >{KYC_Status}</span></font></>)}
            <Card>
              <Card.Header>
                <Card.Title as="h4">Edit Profile </Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>Phone Number</label>
                        <Form.Control
                          Value={userProfileData.phoneNumber}
                          disabled
                          placeholder="9876543210"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>


                    <Col className="px-1" md="3">
                      <Form.Group>
                        <label>Username </label>
                        <Form.Control
                           Value={FirstName}
                          placeholder="Username"
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
                          type="email"
                          value={email}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>First Name</label>
                        <Form.Control
                          defaultValue={FirstName}
                          placeholder="Fname"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Last Name</label>
                        <Form.Control
                          defaultValue={LastName}
                          placeholder="Last Name"
                          type="text"
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
                        ></Form.Control>
                    
                        {"\u00A0"}{"\u00A0"}{"\u00A0"}
                        <br>
                        </br>

                       
                        {"\u00A0"}{"\u00A0"}{"\u00A0"}

                      </Form.Group>
                    </Col>


                    <Col className="px-1" md="3">
                      <Form.Group>
                        <label>Date of Birth</label>

                        <Form.Control
                          defaultValue={DOB}
                          placeholder="Username"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>

                   





                    <Col md="12">
                      <Form.Group>
                        <label>Address</label>
                        <Form.Control
                          defaultValue={Country}
                          placeholder="Home Address"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>City</label>
                        <Form.Control
                          defaultValue={City}
                          placeholder="City"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>Country</label>
                        <Form.Control
                          defaultValue={Country}
                          placeholder="Country"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>Postal Code</label>
                        <Form.Control
                          placeholder="ZIP Code"
                          value={PostalCode}
                          type="number"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>

                  </Row>
                  {/* <Button
                    className="btn-fill pull-right"
                    type="button"
                    variant="info"
                    OnClick={UpdateProfile}
                  >
                    Update Profile
                  </Button> */}
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

export default User;