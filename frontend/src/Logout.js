import React from 'react'
import { useEffect } from 'react'

const Logout = () => {
   
        
        const role = localStorage.getItem("role");
        alert("redirecting");
        const phoneNumber = localStorage.getItem("phoneNumberToken");
        const logout = fetch("http://localhost:9000/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                phoneNumber: phoneNumber,
                role: role
            }),
        }).then((res) => {
            if (res.status === 200) {
                // localStorage.clear();
                alert("logout succesfull");
                window.location.href = "http://localhost:3000/";
            }
        }
        ).catch((err) => {
            console.log(err);
        })      
  

  return (
    <div>
        <p>logout </p>
      
    </div>
  )
}

export default Logout
