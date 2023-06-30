import React from "react";
import firebase from "./firebase";
import loginTitleMenu from "./loginTitleMenu";
import { NavLink, useParams, useHistory } from "react-router-dom";

// const jwt = require("jsonwebtoken");





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
} from "react-bootstrap";

import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import axios from "axios";
import { backend_base_url } from "config";

class ManagerLogin extends React.Component {




  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });

  };




  onManagerClick = (e) => {
    e.preventDefault();
    const role = this.state.role;
    console.log("ww");
    console.log(role);
    alert("clicked");

    setRole("manager");

  };


  onConductorClick = (e) => {
    e.preventDefault();
    const role = this.state.role;

    console.log(role);
    alert("clicked CONDUCTOR");

  };


  onPassengerClick = (e) => {
    e.preventDefault();
    const role = this.state.role;
    console.log(role);
    alert("clicked passenger");


  };
  onSignInSubmit = (e) => {
    e.preventDefault();
    const PHONE_NUMBER = this.state.mobile;

    if ((PHONE_NUMBER.length < 9) || (PHONE_NUMBER.length > 10)) {
      document.getElementById('phone_span').innerHTML = "*Enter valid  Phone number of length 10";
      return false;
    } else if (!PHONE_NUMBER.match(/^[6-9]{1}[0-9]{9}$/)) {
      document.getElementById('phone_span').innerHTML = "*Not valid Mobile Number";
      return false;
    } else {
      document.getElementById('phone_span').innerHTML = "";
    }

    this.configureCaptcha();
    const phoneNumber = "+91" + this.state.mobile;
    console.log(phoneNumber);



    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log("OTP has been sent");

        alert("OTP sent");









        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        console.log("SMS not sent");

        alert("Something Went Wrong. Refresh the page and try again");
      });
  };


  configureCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          this.onSignInSubmit();
          console.log("Recaptcha verified");
        },
        defaultCountry: "IN",
      }
    );
  };





  // onSubmitOTP = (e) => {
  //   e.preventDefault();
  //   const code = this.state.otp;
  //   alert(code);

  //   console.log(code);
  //   window.confirmationResult
  //     .confirm(code)



  //     .then((result) => {
  //       // User signed in successfully.

  //       console.log(this.state.mobile);
  //       console.log(this.state.otp);

  //       alert("Succesfully verified")
  //       sessionStorage.setItem("phoneNumberToken", JSON.parse(this.state.mobile));


  //       localStorage.setItem("phoneNumberToken", JSON.parse(this.state.mobile));
  //       alert("SessionToken set");


  //       console.log(localStorage.getItem("phoneNumberToken", "local s"));
  //       console.log(sessionStorage.getItem("phoneNumberToken", "session"));
  //       sessionStorage.setItem("phoneNumbertoken", JSON.stringify(req.body.phoneNumber));
  //       alert("phoneNumbertoken set.");


  //       window.location.href = "admin/dashboard";




  //       res = fetch("http://localhost:9000/ManagerLogin", {

  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json"
  //         },
  //         body: JSON.stringify({
  //           "phoneNumber": this.state.mobile,
  //           "otp": this.state.otp,
  //           "role": "passenger",
  //           "logindate": 5,
  //           "KYC_Status": "pending",

  //           "user_details": {
  //             "UserName": "",
  //             "FirstName": "",
  //             "LastName": "",
  //             "Gender": "",
  //             "DOB": "",
  //             "Age": "",
  //             "city": "",
  //             "Country": "",
  //             "PostalCode": 562222
  //           },

  //           "KYC_Document_details": {
  //             "Document_type": "",
  //             "Document_Number": "",
  //             "Document_img": ""

  //           },
  //           "ePass_details": {
  //             "Monthly_ePass_AC": {
  //               "Pass_id": "mpac123",
  //               "Fare": "3000",
  //               "PurchaseDate": 878787,
  //               "ExpiryDate": 878787,
  //               "MP_pass_image": "MPPASS",
  //               "TransactionNumber": "{type:String}"

  //             },
  //             "Monthly_ePass_Non_AC": {
  //               "Pass_id": "mpnac123",
  //               "Fare": "1000",
  //               "PurchaseDate": 878787,
  //               "ExpiryDate": 878787,
  //               "MP_pass_image": "MPPASS",
  //               "TransactionNumber": "{type:String}"

  //             },
  //             "Weekly_ePass_AC": {
  //               "Pass_id": "wpac123",
  //               "Fare": "500",
  //               "logindate": 878787,
  //               "ExpiryDate": 878787,
  //               "WP_pass_image": "WPPASS",
  //               "TransactionNumber": "{type:String}"

  //             },
  //             "Weekly_ePass_Non_AC": {
  //               "Pass_id": "wpnac123",
  //               "Fare": "70",
  //               "logindate": 878787,
  //               "ExpiryDate": 878787,
  //               "WP_pass_image": "WPPASS",
  //               "TransactionNumber": "{type:String}"

  //             }
  //             ,
  //             "Daily_ePass_AC": {
  //               "Pass_id": "wpac123",
  //               "Fare": "500",
  //               "logindate": 878787,
  //               "ExpiryDate": 878787,
  //               "DP_pass_image": "DPPASS",
  //               "TransactionNumber": "{type:String}"

  //             },
  //             "Daily_ePass_Non_AC": {
  //               "Pass_id": "wpnac123",
  //               "Fare": "70",
  //               "logindate": 878787,
  //               "ExpiryDate": 878787,
  //               "DP_pass_image": "DPPASS",
  //               "TransactionNumber": "{type:String}"

  //             }





  //           },

  //           Tickets: {


  //             "PassengerNumber": 8787,
  //             "busid": 2,
  //             "src": "data.src",
  //             "destination": "data.dest",
  //             "adult": "data.adult",
  //             "adult_fare": "alcPrice(data.numberOfStops, 40, 2, 2)",
  //             "junior": "data.junior",
  //             "junior_fare": "calcPrice(data.numberOfStops, 30, 3, 1.5)",
  //             "senior": "ata.senior",
  //             "senior_fare": "calcPrice(data.numberOfStops, 35, 3, 1.5)",
  //             "ph": "data.ph",
  //             "ph_fare": "calcPrice(data.numberOfStops, 30, 3, 1.5)",
  //             "total_fare": "totalFare",
  //             "numberOfStops": "data.numberOfStops",
  //             "datetime": "Date.now()",
  //             "status": "pending"
  //           },





  //         })
  //       });

  //       data = res.json();
  //       if (data) {
  //         window.alert("Succesfully logged in MONGO");

  //       }
  //       else {
  //         alert("Succesfully");

  //         const user = result.user;
  //         console.log(JSON.stringify(user));
  //         alert("Succesfully logged in");


  //         localStorage.setItem("phoneNumbertokenLSS", req.body.phoneNumber);
  //         console.log("locas set");
  //         console.log(localStorage.getItem("phoneNumbertokenLSS"));

  //         res.cookie("usertoken", req.body.phoneNumber,
  //           { httpOnly: true });

  //         console.log("token set");

  //         sessionStorage.setItem("phoneNumbertoken", JSON.stringify(req.body.phoneNumber));
  //       }





  //       // ...


  //     })
  //     .catch((error) => {
  //       // User couldn't sign in (bad verification code?)
  //       // .
  //       console.log("Invalid OTP");
  //       alert("Invalid OTP");


  //     });

  // };


  //after confirm register() will be invoked

  register = async (number) => {
    const res = await axios.post(`${backend_base_url}/user`, {
      mobile: number
    });
    const data = res.data;
    localStorage.setItem("user", JSON.stringify(data));
    sessionStorage.setItem("role", "manager");
    localStorage.setItem("role", "manager");


    alert("user Token set");
    console.log(this.state.mobile);
    console.log(this.state.otp);

    alert("Succesfully OTP Verified");

   const check = fetch("http://localhost:9000/checkloginForManager", {
    method:"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "phoneNumber": this.state.mobile
    })
    }).then((res) => {
      console.log(res.status);
      if (res.status === 200) {
        window.alert("logging in...");
        const res2 = fetch("http://localhost:9000/managerlogin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "phoneNumber": this.state.mobile,
            "otp": this.state.otp,
            "role": "Conductor",
            "LoggedIn":"True",
            "logindate": Date.now(),
            "KYC_Document_details": {
              "Document_type": "{ type: String }",
              "Document_Number": "{ type: String }",
              "Document_img": "{ type: String }",
            },
            "Manager_details": {

              "PhoneNumber": 8722583680,
              "FirstName": "{ type: String }",
              "LastName": "{ type: String }",
              "Gender": "{ type: String }",
              "DOB": 54,
              "Age": "{ type: String }",
              "city": "{ type: String }",
              "Country": "{ type: String }",
              "PostalCode": 15,
            }





          })
        });
        alert("Succesfully logged in...");
        sessionStorage.setItem("phoneNumberToken", JSON.parse(this.state.mobile));
        localStorage.setItem("phoneNumberToken", JSON.parse(this.state.mobile));
        alert("SessionToken set");

       
        window.location.href = "admin/manager/managerdashboard";


    
    
        localStorage.setItem("phoneNumbertokenLSS", req.body.phoneNumber);
        console.log("locas set");
        console.log(localStorage.getItem("phoneNumbertokenLSS"));
    
        res.cookie("usertoken", req.body.phoneNumber,
          { httpOnly: true });
        console.log("token set");
    
        sessionStorage.setItem("phoneNumbertoken", JSON.stringify(req.body.phoneNumber));

        
        
      }
      else {
        alert(" user Already logged in");
      }
    }
    ).catch((err) => {
alert("user Already logged in")    }
    );





  }



  //sttarts  from here 
  verifyOtp = (e) => {
    e.preventDefault();
    localStorage.clear("TicketData");

    localStorage.clear("TicketInfo");
    localStorage.clear("TicketId");

    const otp = this.state.otp;
    const number = this.state.mobile;
    const code = this.state.otp;
    if ((otp.length < 6) || (otp.length > 6)) {
      alert("Please enter a valid OTP");
      return;
    }
    if (number.length < 10) {
      alert("Please enter a valid mobile number");
      return;
    }
    console.log(code);
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        this.register(number);
      })
      .catch((error) => {
        alert("Invalid OTP");
      });
  }

  render() {
    return (
      <>
        <div>


          <form onSubmit={this.onManagerClick}>
            <div id="sign-in-button"></div>
            <input
              type="hidden"
              name="manager"
              placeholder="manager"
              required
              onClick={this.handleChange}
            />
          </form>

          <form onSubmit={this.onSignInSubmit}>
            <div id="sign-in-button"></div>
            <input
              type="hidden"
              name="mobile"
              placeholder="Mobile number"
              required
              onChange={this.handleChange}
            />
          </form>

          <form onSubmit={this.onSubmitOTP}>
            <input
              type="hidden"
              name="otp"
              placeholder="OTP Number"
              required
              onChange={this.handleChange}
              className="btn-btn-sm"
            />
          </form>
        </div>


        <br />

        <MDBCol col="4" md="6">
          <MDBRow>

            <form onSubmit={this.onPassengerClick}>


              <div id="sign-in-button"></div>
              <NavLink to="/ManagerLogin">
                <input
                  type="submit"
                  name="role"
                  value="Manager"
                  placeholder="Manager"
                  required
                  variant="info"
                  className="btn btn-secondary btn-sm"
                  onClick={this.handleChange}
                />
              </NavLink>
              <NavLink to="/ConductorLogin">
                <input
                  type="submit"
                  name="role"
                  value="Conductor"
                  placeholder="Conductor"
                  required
                  variant="info"
                  className="btn btn-secondary btn-sm"
                  onClick={this.handleChange}
                />
              </NavLink>

              {/* <loginTitleMenu></loginTitleMenu> */}
            </form>






          </MDBRow>
        </MDBCol>







        <br />
        <MDBContainer fluid className="p-3 my-5">
          <MDBRow>
            <hr></hr>
            <MDBCol col="10" md="6">
              <img
                src="https://npatilraghu.club/logo_2.png"
                className="img-fluid img-responsive"
                alt="Phone image"
              />
            </MDBCol>
            <br></br>
            <hr></hr>
            <MDBCol col="4" md="6">
              <form onSubmit={this.onSignInSubmit}>

                <br></br>
                <font color="red"><span id="phone_span" ></span></font>

                <hr></hr>
                <label><b> Enter Your Phone Number</b></label>
                <MDBInput
                  wrapperClass="mb-2"
                  label=""
                  value="+91 (India)"
                  id="formControlLg"
                  type="text"
                  size="sm"
                  name="ind"
                  readonly
                  onChange={this.handleChange}
                />

                <MDBInput
                  wrapperClass="mb-4"
                  label=""
                  placeholder="Phone Number"
                  id="formControlLg"
                  type="text"
                  size=""
                  name="mobile"
                  required
                  onChange={this.handleChange}



                />

                <Button
                  className=" pull-right btn-block"
                  type="submit"
                  variant="info"
                  name="submit_otp_button"

                >
                  Send OTP
                </Button>{" "}
              </form>

              <label><b>Enter OTP</b></label>
              <form onSubmit={this.verifyOtp}>
                {/* replacehere */}
                <MDBInput
                  wrapperClass="mb-4"
                  label=""
                  placeholder="OTP"
                  id="formControlLg"
                  type="text"
                  name="otp"
                  size="lg"
                  required
                  onChange={this.handleChange}
                />

                <Button
                  className="btn-fill pull-right btn-block"
                  type="submit"
                  variant="info"
                >
                  Verify OTP
                </Button>
                <br></br>


                <NavLink to="admin/dashboard">
                  {" "}
                  <Button
                    className="btn pull-right btn-block"
                    type="submit"
                    variant="info"
                  >
                    Skip Login now
                  </Button>
                </NavLink>


              </form>

              {/* <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="!#">Forgot password?</a>
              </div> */}

              {/* <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">OR</p>
              </div> */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    );
  }
}
export default ManagerLogin;