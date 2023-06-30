import React from 'react'
import { useEffect } from "react";
import { useHistory } from 'react-router';


function ScanVerifyPass_Daily_ePass_Non_AC() {
    const history = useHistory();
    // history.push("admin/epass/viewWeeklypass_Non_AC");


    useEffect(() => {

        const user_pass_id = sessionStorage.getItem("user_pass_id");
        const phoneNumber = parseInt(localStorage.getItem("phoneNumberToken"));
        const user_pass_type = parseInt(sessionStorage.getItem("user_pass_type"));


        alert(typeof (user_pass_id));


        const res = fetch("http://localhost:9000/user/ScanAndVerifyPass_Daily_ePass_Non_AC", {

            // D:\A_FINAL_MCA_PROJECT\abcpro\frontend\src\views\epass\ScanVerifyPass_Daily_ePass_Non_AC_Daily_ePass_AC.js
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "pass_id": user_pass_id,
                "phoneNumber": phoneNumber,
                "user_pass_type": user_pass_type
            })
        });

        // if (res.count == 0) {
        //     alert("not a valid pass");
        // } else {
        //     alert("pass verified");
        // }

        res.then((response) => {

            console.log(response.status);
            if (response.status == 500) {
                alert("IN Valid Pass");
                // history.push("admin/dashboard");

            } else {
                alert("Valid Pass");
                history.push("admin/epass/viewWeeklypass_Non_AC");



            }
        })





    }, [])



    return (
        <div>
            <p>Scan n v working</p>

        </div>
    )
}

export default ScanVerifyPass_Daily_ePass_Non_AC
