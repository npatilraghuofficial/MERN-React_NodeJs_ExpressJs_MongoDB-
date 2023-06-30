import React, { useState } from 'react'; ViewWeeklyPass_AC
import { Button, Modal } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

import { useEffect } from "react";
import axios from "axios";
import { data } from 'jquery';

//Weekly_ePass_AC 










function ViewWeeklyPass_AC() {



  const [show, setShow] = useState(true);
  const [passDetails, setPassDetails] = useState("");
  const [userData, setUserData] = useState("");

  const [Pass_id, setPass_id] = useState("");

  const [expiry, setExpiry] = useState("");

  const [Purchase, setPurchase] = useState("");

  const [Fare, setFare] = useState("");

  const [PhoneNumber, setPhoneNumber] = useState("");
  const [currentDate_, setCurrentDate_] = useState("");

  const [validPass, setValidPass] = useState(false);

  const [documentId, SetDocumentId] = useState(false);



  const handleClose = () => setShow(true);
  const handleShow = () => setShow(true);




  const fetchdata = async () => {
    const phoneNumber = JSON.parse(localStorage.getItem("phoneNumberToken"))

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

      const Age = json.data[0].user_details.Age;
      const City = json.data[0].user_details.city;
      const Country = json.data[0].user_details.Country;
      const PostalCode = json.data[0].user_details.PostalCode;
      const passdetails = json.data[0].ePass_details.Weekly_ePass_AC;
      const Pass_id = json.data[0].ePass_details.Weekly_ePass_AC.Pass_id;

      const Doc_number = json.data[0].ePass_details.Weekly_ePass_AC.DocNumber;

      const expiry = json.data[0].ePass_details.Weekly_ePass_AC.ExpiryDate;
      const Purchase = json.data[0].ePass_details.Weekly_ePass_AC.logindate;

      const Fare = json.data[0].ePass_details.Weekly_ePass_AC.Fare;

      const PhoneNumber = json.data[0].phoneNumber;

      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const current_system_date = month + "/" + day + "/" + year;
      console.log("current sys date" + current_system_date);
      console.log("Pass purchase date" + Purchase);
      console.log("Pass Expiry date" + expiry);





      const purchasedate = Purchase.split("/");
      const expirydate = expiry.split("/");
      const currentdate_ = current_system_date.split("/");


      const currentdate_parsed = parseInt(currentdate_[1]);

      const purchasedate_parsed = parseInt(purchasedate[1]);

      const expirydate_parsed = parseInt(expirydate[1]);

      console.log("Pass purchase only  date" + purchasedate[1]);
      console.log("Pass Expiry only date" + expirydate[1]);
      console.log("Pass current only date" + currentdate_[1]);
      if (current_system_date === expiry) {
        setValidPass(false);
      }


      else if (currentdate_parsed >= purchasedate_parsed && currentdate_parsed <= expirydate_parsed) {
        setValidPass(true);
      }
      else {
        setValidPass(false);
      }

      //
      // console.log("valid pass" + validPass);
      setPass_id(Pass_id);

      setExpiry(expiry);
      console.log("Pass expiry date" + expiry);


      setPurchase(Purchase);

      setFare(Fare);
      setPhoneNumber(PhoneNumber);
      SetDocumentId(Doc_number);



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

      console.log(passdetails);
      console.log(Pass_id);
      console.log(expiry);

      setCurrentDate_(localStorage.getItem("CurrentDate"));
    });








    sessionStorage.setItem("user_pass_id", Pass_id);
    // sessionStorage.setItem("user_pass_type", Weekly_ePass_AC);
    sessionStorage.setItem("Verify_Pass_Type", "ScanVerifyPass_Weekly_ePass_AC");



    // sessionStorage.setItem("user_data", JSON.stringify(json.data));
    // console.log(sessionStorage.getItem("user_pass_id"));
    console.log(sessionStorage.getItem("user_data"));
    console.log(sessionStorage.getItem("user_pass_type"));





    // setPassDetails(passdetails);


  };
  fetchdata();



  return (



    <div className="container">
      {validPass && (<>
        <h1>My Weekly-Pass AC <img src={require("assets/img/bus_ticket_blue_small.png")} class="img-responsive" alt="..." />
        </h1>
        <table class="table table-bordered table-responsive">
          <thead>
            <tr>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img
                  alt="..."
                  className="avatar border-gray"
                  src={require("assets/img/profile_pass.png")}
                ></img>
              </a>
              <td colspan="2">Pass Number: {Pass_id} <img
                alt="..."
                className="avatar border-gray"
                src={require("assets/img/verified.png")}
              ></img>
              </td>


              <NavLink to="/admin/epass/QrCodeScanForPass"><td colspan="2"> <b>
                <img
                  alt="..."
                  className="avatar border-gray"
                  src={require("assets/img/scan.png")}
                ></img>Scan To Validate </b></td>

              </NavLink>
              <br>
              </br>

            </tr>

            <tr>
              <td scope="col" colspan="2">PhoneNumber: {PhoneNumber}</td>
              <td scope="col" colspan="2"> Ref.Doc-No. :{documentId} </td>
            </tr>

            <tr>
              <td scope="col" colspan="2">Pass Type</td>
              <td scope="col" colspan="2">AC BUS</td>
            </tr>






          </thead>
          <tbody>
            <tr>
              <th scope="row" colspan="2">Issue Date & Time </th>

              <td colspan="3">{Purchase}</td>
            </tr>
            <th scope="row" colspan="2">Expiry Date & Time</th>

            <td colspan="3">{expiry}</td>
            <tr></tr>




            <tr>
              <th scope="row">Fare</th>
              <td colspan="4"><li>BasicCharge = 450</li>
                <li> Service Charge = 20</li>
                <li>Tax = 15</li> <li>others = 15</li> </td>
              <td> </td>

            </tr>

            <tr>
              <th scope="row">Total Fare</th>
              <td colspan="2"><b>{Fare} </b></td>
            </tr>


          </tbody>
        </table>


      </>)}

      {!validPass && (<>
        <div class="alert alert-danger" role="alert">
          <h4 class="alert-heading">Pass Expired!</h4>
          <p>Pass is expired. Please purchase a new pass.</p>
        </div>
      </>)
      }










    </div>
  );
}

export default ViewWeeklyPass_AC
