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

function KycDocUpload() {
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
  const [avatars, setAvatars] = useState([]);
  const [isDragOver, setDragOver] = useState(false);





  const handleSubmit = file => {

    const encodeImage = (mimetype, arrayBuffer) => {
      let u8 = new Uint8Array(arrayBuffer)
      const b64encoded = btoa([].reduce.call(new Uint8Array(arrayBuffer), function (p, c) { return p + String.fromCharCode(c) }, ''))
      return "data:" + mimetype + ";base64," + b64encoded;
    }

    const uploadImage = async () => {
      const data = new FormData();
      const PhoneNumber_ = parseInt(localStorage.getItem("phoneNumberToken"));

      data.append('file', file);
      data.append('filename', file.name);
      data.append('UserPhoneNumber', PhoneNumber_);
      // POST request
      // const PhoneNumber_ = parseInt(localStorage.getItem("phoneNumberToken"));
      console.log(PhoneNumber_);


      const result = await axios.post('http://localhost:9000/upload', data, {
        headers: { 'Content-Type': 'multipart/form-data' },

      });

      // console.log(result);
      const dataURL = encodeImage(result.data.mimetype, result.data.buffer.data);
      // console.log(dataURL);
      setAvatars([...avatars, { name: result.data.name, url: dataURL }]);
      console.log(avatars);
    }

    uploadImage();
  };

  const handleDragOver = evt => {
    evt.stopPropagation();
    evt.preventDefault();

    setDragOver(true);
  };

  const handleDrop = evt => {
    evt.stopPropagation();
    evt.preventDefault();

    setDragOver(false);

    const file = evt.dataTransfer.files[0];
    handleSubmit(file);
  };




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

    const PhoneNumber = JSON.parse(localStorage.getItem("phoneNumberToken"));


    const result = fetch("http://localhost:9000/user/UserProfileUpdate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {
          UserPhoneNumber: PhoneNumber,
          userProfile: userProfile
        })
    })
  }

  return (
    <>


      <Container fluid>
        <Row>


          <Col md="7">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Edit Profile</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Container maxWidth="lg" >
                    <section id="image-upload"

                      onDragOver={evt => handleDragOver(evt)}
                      onDrop={handleDrop}>
                      <i className="fas fa-cloud-upload-alt fa-5x"></i>
                      <label>
                        <input type="file" name="avatar" onChange={e => handleSubmit(e.target.files[0])} />
                        Choose file to upload
                      </label>
                      <h3>or drag and drop them here</h3>

                    </section>

                    <section id="image-grid" >


                      <h3>Your Uploaded Documents</h3>
                      <div>
                        {avatars.map((avatar, idx) => <img key={`${avatar.name}-${idx}`} src={avatar.url} className="img-responsive" width="400px" height="400px" />)}
                      </div>


                    </section>
                  </Container>

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

export default KycDocUpload;