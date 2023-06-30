import React from 'react'
import { useEffect } from "react";



function ScanAndVerifyTicket() {
    useEffect(() => {
        // const user_pass_id = parseInt(sessionStorage.getItem("user_pass_id"));
        const phoneNumber = parseInt(localStorage.getItem("phoneNumberToken"));

        const TicketId = parseInt(localStorage.getItem("TicketId"));

        // const user_pass_type = parseInt(sessionStorage.getItem("user_pass_type"));


        // alert(typeof(user_pass_id)); 

        const CurrentTicket = JSON.parse(sessionStorage.getItem("CurrentTicket"));
        console.log(CurrentTicket);

alert("serv routed  to ScanAndVerifyTicketInBusTicket");
        const res = fetch("http://localhost:9000/user/ScanAndVerifyTicketInBusTicket", {

        // D:\A_FINAL_MCA_PROJECT\abcpro\frontend\src\views\epass\ScanAndVerifyTicketInBusTicket.js
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({

            ticketid: CurrentTicket.TicketId,
            PassengerNumber: CurrentTicket.PassengerNumber,
            busid: CurrentTicket.busid,
            src: CurrentTicket.src,
            destination: CurrentTicket.destination,
            adult: CurrentTicket.adult,
            adult_fare: CurrentTicket.adult_fare,
            junior: CurrentTicket.junior,
            junior_fare: CurrentTicket.junior_fare,
            senior: CurrentTicket.senior,
            senior_fare: CurrentTicket.senior_fare,
            ph: CurrentTicket.ph,
            ph_fare: CurrentTicket.ph_fare,
            total_fare: CurrentTicket.total_fare,
            numberOfStops: CurrentTicket.numberOfStops,
            datetime: Date.now(),
            status: "Verified"


        })
    });
   

    alert("serv routed  to ScanAndVerifyTicket");

        const res2 = fetch("http://localhost:9000/user/ScanAndVerifyTicket", {

            // D:\A_FINAL_MCA_PROJECT\abcpro\frontend\src\views\epass\ScanAndVerifyTicket_Daily_ePass_AC.js
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({

                ticketid: CurrentTicket.TicketId,
                PassengerNumber: CurrentTicket.PassengerNumber,
                busid: CurrentTicket.busid,
                src: CurrentTicket.src,
                destination: CurrentTicket.destination,
                adult: CurrentTicket.adult,
                adult_fare: CurrentTicket.adult_fare,
                junior: CurrentTicket.junior,
                junior_fare: CurrentTicket.junior_fare,
                senior: CurrentTicket.senior,
                senior_fare: CurrentTicket.senior_fare,
                ph: CurrentTicket.ph,
                ph_fare: CurrentTicket.ph_fare,
                total_fare: CurrentTicket.total_fare,
                numberOfStops: CurrentTicket.numberOfStops,
                datetime: Date.now(),
                status: "Verified"


            })
        });
        res2.then((result) => {
            console.log("done");
            alert("verified");
        })

        // if (res.count == 0) {
        //     alert("not a valid pass");
        // } else {
        //     alert("pass verified");
        // }

        res2.then((response) => {
            console.log(response.status);
            if (response.status == 500) {
                alert("IN Valid Ticket");
            } else {
                alert("Valid Ticket");

            }
        })





    }, [])
    return (
        <div>
            <p>Scan n v working</p>

        </div>
    )
}

export default ScanAndVerifyTicket
