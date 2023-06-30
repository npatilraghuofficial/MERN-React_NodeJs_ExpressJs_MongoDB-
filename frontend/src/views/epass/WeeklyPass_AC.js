import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

import validatePass from "./validatePass";
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

function WeeklyPass_AC() {
  useEffect(() => {

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day_next = date.getDate() + 7;
    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
      if (day_next > 31) {
        const max = 31;
        setExpiryDate((month + "/" + max + "/" + year));
        console.log(expiryDate);

      }
      else {
        setExpiryDate((month + "/" + day_next + "/" + year));
        console.log(expiryDate);

      }


    }
    else if (month == 4 || month == 6 || month == 9 || month == 11) {
      if (day_next > 30) {
        const max = 30;
        setExpiryDate((month + "/" + max + "/" + year));
        console.log(expiryDate);

      }
      else {
        setExpiryDate((month + "/" + day_next + "/" + year));
        console.log(expiryDate);

      }

    }
    else if (month == 2) {
      if (day_next > 28) {
        const max = 28;
        setExpiryDate((month + "/" + max + "/" + year));
        console.log(expiryDate);

      }
      else {
        setExpiryDate((month + "/" + day_next + "/" + year));
        console.log(expiryDate);

      }

    }

  }, []);




  const RequestOrderPayment = () => {
    const price = document.getElementById("price").value
    let amntTxt = 100;
    const payment = axios.post('http://localhost:2024/api/razorpay/create-order', { amount: amntTxt, receipt: "gurkaran_order_54654" })
      .then(response => {
        const orderID = response.data.id
        var options = {
          "key_id": "rzp_test_hcBEyLK2rKpWkS",
          "key_secret": "AilD2hmREnc2HEDIuIBYzu6O",
          "amount": amntTxt,
          "currency": "INR",

          "name": "e-Ticket App",
          "description": "The New Generation Ticketing App",
          "order_id": orderID,
          handler: function async(response) {
            alert(response.razorpay_payment_id);
            sessionStorage.setItem("transactionNumber", response.razorpay_payment_id);
            alert("Payment Done");
            handlepay();




          },
          "prefill": {
            "name": "Raghavendra N Patil",
            "email": "npatilraghu@example.com",
            "contact": "8722583680",
          },
          "notes": {
            "address": "note value",
          },
          "theme": {
            "color": "#228B22"
          }
        };
        var rzp1 = new window.Razorpay(options)
        rzp1.open();
        console.log(response.status)
      })
    console.log(payment);
  }

  function validatePass() {


    const DOC_NUMBER = document.getElementById("documnetNumber").value



    if ((DOC_NUMBER.length < 4) || (DOC_NUMBER.length > 15) || (DOC_NUMBER == "")) {
      document.getElementById('error').innerHTML = "Enter valid Document number of length 4";

      return false;
    } else if (!DOC_NUMBER.match(/^[0-9]+$/)) {
      document.getElementById('error').innerHTML = "Enter Only Number";
      return false;
    } else {
      document.getElementById('error').innerHTML = "";
      RequestOrderPayment();


    }







  }

  const handlepay = () => {

    var rand = Math.floor(Math.random() * 500); // randoBMTC_m: 0..61
    var pass_id = "BMTC_WP_AC_" + rand;
    const transactionNumber = sessionStorage.getItem("transactionNumber");
    alert("TRANSS NUM" + transactionNumber);
    console.log("handlepay")
    console.log(busType);
    console.log(currentDate);
    console.log(time);
    console.log(expiryDate);
    console.log(expiry);
    console.log(price);
    console.log(endOfDay);
    const phoneNumber = JSON.parse(localStorage.getItem("phoneNumberToken"))
    console.log(phoneNumber);
    localStorage.setItem("CurrentDate", JSON.stringify(currentDate));
    console.log(localStorage.getItem("CurrentDate"));

    console.log(expiryDate);
    console.log(documentId);

    const result = fetch(`http://localhost:9000/ePass_details/Weekly_ePass_${busType}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        pass_id: pass_id,
        phoneNumber: phoneNumber,
        currentDate: currentDate,
        price: price,
        endOfDay: expiryDate,
        documentId: documentId,
        transactionNumber: transactionNumber,

      })
    });
    console.log("success pass purchased..Hurreyy");
    window.location.href = "/admin/epass/viewWeeklyPass_AC";





  }



  const history = useHistory();
  const param = useParams();


  // const [passDetails,setPassDetails] =useState({});
  const [orderID, setOrderID] = useState("");
  const [transactionNumber, setTransactionNumber] = useState("");

  const [phoneNumber, setPhoneNumber] = useState('');
  const date = new Date();


  const [expiryDate, setExpiryDate] = useState("");

  const [busType, setbusType] = useState("AC");
  const [documentId, setDocumentId] = useState("");
  let dateNow = new Date().toLocaleDateString();

  let expiry = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  let enddate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1, 0);









  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());


  // const [expiryDate, setexpiryDate] = useState(expiry);

  const [endOfDay, setEndOfDay] = useState(enddate);
  const [price, setPrice] = useState(500);


  let timeNow = new Date().toLocaleTimeString();
  const [time, setTime] = useState(timeNow)


  // /




  function clock() {
    timeNow = new Date().toLocaleTimeString();
    setTime(timeNow);
    dateNow = new Date().toLocaleTimeString();
    setTime(dateNow);
    enddate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1, 0);
    setEndOfDay(enddate);






    // expiryDate =  new Date(date.getFullYear(), date.getMonth() + 1, 0);
    // setExpiryDate(expiryDate);

  }
  setInterval(clock, 1000)
  let DOC_NUMBER = documentId;



  return (
    <>
      <Container fluid>
        <Row>
          <Col md="4">
            <Card className="card-user">
              <img
                alt="..."
                src={require("assets/img/bus_ticket_blue.png")}
              ></img>
              <br></br>
              <Col className="pr-1" md="12">
                <font color="red"><span id="error"></span></font>
                <hr>
                </hr>
                <label>BusPass Type</label>

                <Form.Text className="pr-1 form-control" onChange={({ target: { value } }) => {
                  setbusType(value);


                }} >
                  <option value="AC" selected>AC</option>


                </Form.Text>
                <Form.Group>
                  <label>Enter Document Ref Number:</label>
                  <Form.Control
                    defaultValue=""
                    required

                    placeholder=""
                    type="text"
                    onChange={({ target: { value } }) => {
                      { validatePass(value); }
                      setDocumentId(value);



                    }
                    }
                    id="documnetNumber"

                  ></Form.Control>
                </Form.Group>
              </Col>
              <hr></hr>
              <br></br>                 <Col className="pr-1" md="12">
                <h6>(MM/DD/YYYY)</h6>

                <Form.Group>
                  <label>Purchase Date </label>
                  <Form.Control
                    Value={currentDate}

                    placeholder=""
                    type="text"
                  ></Form.Control>
                </Form.Group>
              </Col>

              <Col className="pr-1" md="12">
                <Form.Group>
                  <label>Expiry Date :</label>
                  <Form.Control
                    Value={expiryDate}

                    placeholder=""
                    type="text"
                  ></Form.Control>
                </Form.Group>
              </Col>








              <Col className="pr-1" md="12">
                <Form.Group>
                  <label>Price</label>

                  <Form.Control
                    defaultValue={price}
                    disabled
                    placeholder={price}
                    type="number"
                    id="price"
                  ></Form.Control>
                </Form.Group>
                {/* <NavLink to="/admin/epass/viewWeeklyPass_AC"> */}
                <Button
                  defaultValue="view"
                  placeholder="buy"
                  type="button"
                  className="btn-fill pull-right md-6"
                  onClick={validatePass}
                  title="Double Click to pay"
                >Buy Now

                </Button>
                {/* </NavLink> */}
              </Col>




              <hr></hr>

            </Card>
          </Col>



        </Row>
      </Container >
    </>
  );
}

export default WeeklyPass_AC;
