import axios from "axios";
import { useState } from "react";


function validatekycupdate(value) {
 
let userProfile = JSON.parse(sessionStorage.getItem("userProfile"));


  const EMAIL = document.getElementById("email").value




  const FIRSTNAME = document.getElementById("fname").value


  const LASTNAME = document.getElementById("lname").value

  const GENDER = document.getElementById("gender").value

  const DOB = document.getElementById("dob").value

  const ADDRESS = document.getElementById("address").value

  const CITY = document.getElementById("city").value

  const COUNTRY = document.getElementById("country").value

  const POSTALCODE = document.getElementById("pcode").value


  if (!EMAIL.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)) {
    document.getElementById('emailErr').innerHTML = "Enter valid Email";
    return false
  }
  else {
    document.getElementById('emailErr').innerHTML = "";

  }
  if (!FIRSTNAME.match(/^[a-zA-Z\s]*$/)) {
    document.getElementById('fnameErr').innerHTML = "Enter valid Name NO SPECIAL CHAR";
    return false
  }
  else {
    document.getElementById('fnameErr').innerHTML = "";

  }

  if (!isNaN(FIRSTNAME)) {
    document.getElementById('fnameErr').innerHTML = "<br>**please enter only alphabets";
    return false;
  } else

    if ((FIRSTNAME === "") || (FIRSTNAME.length < 5) || (FIRSTNAME.length > 20)) {
      document.getElementById('fnameErr').innerHTML = "Enter First Name Min 5 and Max 20";
      return false
    }
    else {
      document.getElementById('fnameErr').innerHTML = "";
    }

  if (GENDER === "") {
    document.getElementById('genderErr').innerHTML = "Enter MALE|FEMALE|OTERS";
  } else
    if (!GENDER.match(/^(MALE|FEMALE|OTERS|)$/)) {
      document.getElementById('genderErr').innerHTML = "Enter MALE|FEMALE|OTERS";
      return false
    }
    else {
      document.getElementById('genderErr').innerHTML = "";
    }





  if (DOB === "") {
    document.getElementById('dobErr').innerHTML = "Enter DOB";
    return false
  }

  else {
    document.getElementById('dobErr').innerHTML = "";
  }


  if (ADDRESS === "") {
    document.getElementById('addressErr').innerHTML = "Enter Address";
    return false
  }

  if (ADDRESS.length < 4) {
    document.getElementById('addressErr').innerHTML = "Enter valid Address Min 4 Char";
    return false
  }
  else
    if (!ADDRESS.match(/^[a-zA-Z0-9\s,.'-]*$/)
    ) {
      document.getElementById('addressErr').innerHTML = "Enter valid Address NO SPECIAL CHARACTERS)";
      return false
    }
    else {

      document.getElementById('addressErr').innerHTML = "";
    }

  if (CITY === "") {
    document.getElementById('cityErr').innerHTML = "Enter City";
    return false
  }
  else {
    document.getElementById('cityErr').innerHTML = "";
  }

  if (CITY.length < 4) {
    document.getElementById('cityErr').innerHTML = "Enter valid City Min 4 Char";
    return false
  }
  else
    if (!CITY.match(/^[a-zA-Z\s]*$/)
    ) {
      document.getElementById('cityErr').innerHTML = "Enter valid City NO SPECIAL CHARACTERS";
      return false
    }
    else {

      document.getElementById('cityErr').innerHTML = "";
    }



  if (COUNTRY === "") {
    document.getElementById('countryErr').innerHTML = "Enter Country";
    return false
  }
  else {
    document.getElementById('countryErr').innerHTML = "";
  }

  if (COUNTRY.length < 4) {
    document.getElementById('countryErr').innerHTML = "Enter valid COUNTRY Min 4 Char";
    return false
  }
  else
    if (!COUNTRY.match(/^[a-zA-Z\s]*$/)
    ) {
      document.getElementById('countryErr').innerHTML = "Enter valid Country Name No SPECIAL CHARACTERS";
      return false
    }
    else {

      document.getElementById('countryErr').innerHTML = "";
    }

  if (POSTALCODE === "") {
    document.getElementById('postalErr').innerHTML = "Enter Postal Code";
    return false
  }
  else {
    document.getElementById('postalErr').innerHTML = "";
  }

  if ((POSTALCODE.length < 6) || (POSTALCODE.length > 6)) {
    document.getElementById('postalErr').innerHTML = "Enter valid Postal Code 6 DIGIT";
    return false
  }

  else
    if (!POSTALCODE.match(/^[0-9]*$/)
    ) {
      document.getElementById('postalErr').innerHTML = "Enter valid Postal Code No SPECIAL CHARACTERS";
      return false
    }
    else {

      document.getElementById('postalErr').innerHTML = "";
    }


    const PhoneNumber = JSON.parse(localStorage.getItem("phoneNumberToken"));

    const result = fetch("http://localhost:9000/user/UserProfileUpdate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {
          phoneNumber: PhoneNumber,
          userProfile: userProfile
        })
    }).then((res) => {
      console.log(res);
      if (res.status === 200) {
        alert("Profile Updated Successfully");
      }
      else {
        alert("Profile Not Updated");
      }
    }).catch((err) => {
      console.log(err);
      alert("Profile Not Updated");
    })



}
export default validatekycupdate