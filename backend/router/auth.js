const express = require('express');
const { model } = require('mongoose');
const router = express.Router();
const jwt = require("jsonwebtoken");
const upload = require('./middleware');






const User = require('../model/UserSchema');
const Manager = require('../model/ManagerSchema');
const Conductor = require('../model/ConductorSchema');
const { useCookies } = require('react-cookie');
const Ticket = require('../model/TicketSchema');
const BusTicket = require('../model/BusTicketsSchema');
const Route = require('../model/RouteSchema');
const Bus = require('../model/BusSchema');
const Avatar = require('../model/avatar');
const UserKyc = require('../model/UserKycStaging');
const { find, count } = require('../model/UserSchema');
const { HttpStatusCode } = require('axios');






router.get('/', (req, res) => {
    console.log("server router");
    res.send('dashboard');
});

router.post('/checkLoginForManager',async(req,res)=>{
    console.log("redirected to check  manager login");
    console.log(req.body.phoneNumber);
   
    const user = await Manager.find({ "phoneNumber": req.body.phoneNumber });
    console.log(user.length);
    console.log("Manager ALREADY LOGGED IN ")
    

    


if((user.length===0)||(user[0].LoggedIn==="False")){
    console.log("user not logged in");
    let result = await Manager.findOneAndUpdate({ phoneNumber: req.body.phoneNumber }, { $set: { "LoggedIn":"True" }}, { new: true });

    return res.status(200).json({
        success: true,
        
    }); 
   
}


   
});

router.post('/checkLoginForConductor',async(req,res)=>{
    console.log("redirected to check  conductor login");
    console.log(req.body.phoneNumber);
   
    const user = await Conductor.find({ "phoneNumber": req.body.phoneNumber });
    console.log(user.length);
    console.log("conductor ALREADY LOGGED IN ")
    

    


if((user.length===0)||(user[0].LoggedIn==="False")){
    console.log("user not logged in");
    let result = await Conductor.findOneAndUpdate({ phoneNumber: req.body.phoneNumber }, { $set: { "LoggedIn":"True" }}, { new: true });

    return res.status(200).json({
        success: true,
        
    }); 
   
}


   
});
router.post('/checkLogin',async(req,res)=>{
    console.log("redirected to check login");
    console.log(req.body.phoneNumber);
   
    const user = await User.find({ "phoneNumber": req.body.phoneNumber });
    console.log(user.length);
    console.log("user ALREADY LOGGED IN ")
    

    


if((user.length===0)||(user[0].LoggedIn==="False")){
    console.log("user not logged in");
    let result = await User.findOneAndUpdate({ phoneNumber: req.body.phoneNumber }, { $set: { "LoggedIn":"True" }}, { new: true });

    return res.status(200).json({
        success: true,
        
    }); 
   
}


   
});
router.post('/logout',async(req,res)=>{
    console.log("redirected to logout");
    console.log(req.body.phoneNumber);
    console.log(req.body.role);
    if(req.body.role==="user"){
      
        let result = await User.findOneAndUpdate({ phoneNumber: req.body.phoneNumber }, { $set: { "LoggedIn":"False" }}, { new: true });

    } 
    else if(req.body.role==="manager"){
        let result2 = await Manager.findOneAndUpdate({ phoneNumber: req.body.phoneNumber }, { $set: { "LoggedIn":"False" }}, { new: true });

    }
    else if(req.body.role==="conductor"){
        let result3 = await Conductor.findOneAndUpdate({ phoneNumber: req.body.phoneNumber }, { $set: { "LoggedIn":"False" }}, { new: true });

    }



    res.status(200).json({
        success: true
        
    });
    

   
}); //logout api

router.post('/login', async (req, res) => {
    console.log("USER login");
    console.log(req.body);


    //HI

    const user = new User({
        phoneNumber: req.body.phoneNumber,
        otp: req.body.otp,
        logindate: req.body.logindate,
        user_details: req.body.user_details,
        role: req.body.role,
        KYC_Document_details: req.body.KYC_Document_details,
        ePass_details: req.body.ePass_details,
        Tickets: req.body.Tickets,
        token: req.body.token



    });

    try {



        const savedUser = await user.save();
        const createToken = async () => {
            const token = await jwt.sign({ _id: req.body.phoneNumber }, "MYNAMEISRAGHU");


            console.log(token);


            const userVer = await jwt.verify(token, "MYNAMEISRAGHU")
            console.log(userVer);

        }

        createToken();



        // setCookie(jwtoken, token) ;
        // res.cookie("login_cookie",req.body.phoneNumber);
        // console.log("cookie set")

        res.cookie("usertoken", req.body.phoneNumber,
            { httpOnly: true });

        console.log("token set");
        console.log(usertoken);
        res.send(savedUser);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.post('/user/get', async (req, res) => {
    try {


        console.log(req.body.phoneNumber);
        const user = await User.find({ "phoneNumber": req.body.phoneNumber });
        console.log(user);
        return res.status(200).json({
            success: true,
            count: user.length,
            data: user,
        });
    } catch (err) {
        console.log(err);
        res.status(22222).json({ error: 'server error' });
    }
});



router.post('/user/UserProfileupdate', async (req, res) => {
    try {

        console.log("user profile update");
        console.log(req.body.phoneNumber);
        const user = await User.find({ "phoneNumber": req.body.phoneNumber });
        let result = await User.updateOne(
            { phoneNumber: req.body.phoneNumber },
            {
                $set: {
                    user_details: req.body.userProfile
                }
            }
        );
        console.log(user);
        return res.status(200).json({
            success: true,
            count: user.length,
            data: user,
        });
    } catch (err) {
        console.log(err);
        res.status(22222).json({ error: 'server error' });
    }
});


//api for get pass details
router.get('/user/getPassDetails', async (req, res) => {
    try {


        const user = await User.find({ phoneNumber: 9999999999 });

        return res.status(200).json({
            success: true,
            count: user.length,
            data: user,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
    }
});

router.post('/user/getPassDetails', async (req, res) => {
    try {
        console.log("redirected to user/getPassDetails POST");
        console.log(req.body.phoneNumber);

        const user = await User.find({ phoneNumber: req.body.phoneNumber });

        return res.status(200).json({
            success: true,
            count: user.length,
            data: user,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
    }
});


// ViewVerifiedTickets

router.post('/user/ViewVerifiedTickets', async (req, res) => {
    try {
        console.log("redirected to user/ViewVerifiedTickets POST");
        console.log(req.body.phoneNumber);
        console.log(req.body.TicketId);

        console.log(req.body.BusId);

        const result = await BusTicket.find({ "BusId": req.body.BusId });


        console.log( "tickets " +result);
        return res.status(200).json({
            success: true,
            count: result.length,

            data: result,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
    }
});


router.post('/user/getBusTicketDetails', async (req, res) => {
    try {
        console.log("redirected to user/getBusTicketDetails POST");
        console.log(req.body.phoneNumber);
        console.log(req.body.TicketId);

        const user = await BusTicket.find();
        const result = await BusTicket.find({ "Manager_details.PhoneNumber": req.body.phoneNumber });


        console.log(result);
        return res.status(200).json({
            success: true,
            count: user.length,

            data: user,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
    }
});

router.post('/user/getBusTicketDetailsForConductor', async (req, res) => {
    try {
        console.log("redirected to user/getBusTicketDetailsForConductor POST");
        console.log(req.body.phoneNumber);
        console.log(req.body.TicketId);


        const result = await BusTicket.find({ Conductor_Number: req.body.phoneNumber });


        console.log(result);
        return res.status(200).json({
            success: true,
            count: result.length,

            data: result,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
    }
});

router.post('/user/DeleteBusTicketDetails', async (req, res) => {
    try {
        console.log("redirected to user/DeleteBusTicketDetails POST");
        console.log(req.body.BusId);


        const user = await BusTicket.findOneAndDelete({ BusId: req.body.BusId })


        return res.status(200).json({
            success: true,
            count: user.length,

            data: user,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
    }
});

router.post('/user/Rejectkycdoc', async (req, res) => {
    try {
        console.log("redirected to user/Rejectkycdoc POST");
        console.log(req.body.DocName);
        console.log(req.body.UserPhoneNumber);


        const Doc = await Avatar.findOneAndDelete({ UserPhoneNumber: req.body.UserPhoneNumber } && { originalname: req.body.DocName })
        const user = await User.findOneAndUpdate({ phoneNumber: req.body.UserPhoneNumber }, { $set: { KYC_Status: "Note: **Rejected Uploaded KYC Documents, Please Upload Valid And Correct Documents." } })
        // console.log(Doc);
        console.log(user);
        return res.status(200).json({
            success: true,

            data: Doc,
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
    }
});

router.post('/user/Approvealldocs', async (req, res) => {
    try {
        console.log("redirected to user/Approvealldocs POST");
        console.log(req.body.DocName);
        console.log(req.body.UserPhoneNumber);


        const user = await User.findOneAndUpdate({ phoneNumber: req.body.UserPhoneNumber }, { $set: { KYC_Status: "Approved" } })
        // console.log(Doc);
        // console.log(user);
        return res.status(200).json({
            success: true,

            data: user,
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
    }
});

//view duty


router.post('/user/getKycDocs', async (req, res) => {
    try {
        console.log("redirected to user/getKycDocs POST");
        console.log(req.body.UserPhoneNumber);
        console.log(req.body.TicketId);

        const user = await Avatar.find();


        return res.status(200).json({
            success: true,
            count: user.length,

            data: user,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
    }
});

router.post('/user/viewKycDocs', async (req, res) => {
    try {
        console.log("redirected to user/viewKycDocs POST");
        console.log(req.body.phoneNumber);
        console.log(req.body.TicketId);

        const user = await Avatar.find({ UserPhoneNumber: req.body.phoneNumber });


        // console.log(user);
        return res.status(200).json({
            success: true,
            count: user.length,

            data: user,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
    }
});


router.post('/user/getTicketDetails', async (req, res) => {
    try {
        console.log("redirected to user/getTicketDetails POST+++++++");
        console.log(req.body.phoneNumber);
        console.log(req.body.TicketId);
          const phoneNumber_ = JSON.parse(req.body.phoneNumber);
          console.log(phoneNumber_);

        const user = await User.find({phoneNumber:phoneNumber_});
        console.log("user");
        // [
        //     {
        //       ePass_details: {
        //         Monthly_ePass_AC: [Object],
        //         Monthly_ePass_Non_AC: [Object],
        //         Weekly_ePass_AC: [Object],
        //         Weekly_ePass_Non_AC: [Object],
        //         Daily_ePass_AC: [Object],
        //         Daily_ePass_Non_AC: [Object]
        //       },
        //       _id: new ObjectId("639fe6deb9ee6c1585702324"),
        //       phoneNumber: 9876543210,
        //       otp: 195770,
        //       role: 'passenger',
        //       logindate: 1970-01-01T00:00:00.005Z,
        //       Tickets: [ [Object], [Object], [Object], [Object] ],
        //       user_details: {
        //         FirstName: 'Raghu',
        //         LastName: 'Patil',
        //         email: 'abc@gmail.com',
        //         DOB: '2022-12-20',
        //         Gender: 'Male',
        //         phoneNumber: 
        //         City: 'B',
        //         Country: 'C',
        //         PostalCode: '560099',
        //         Address: 'A'
        //       },
        //       KYC_Document_details: { Document_type: '', Document_Number: '', Document_img: '' },
        //       __v: 0
        //     }
        // ]
// console.log(user[4].phoneNumber);

    

        // console.log(result);
        return res.status(200).json({
            success: true,
            count: user.length,

            data: user,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
    }
});

router.post('/user/getConductorDetails', async (req, res) => {
    try {
        console.log("redirected to user/getConductorDetails POST");
        console.log(req.body.phoneNumber);


        const conductor = await Conductor.find({ phoneNumber: req.body.phoneNumber });
        const busTicket = await BusTicket.find({ Conductor_Number: req.body.phoneNumber })
        console.log(busTicket);
        if (busTicket.length === 0) {
            return res.status(200).json({
                success: true,
                count: conductor.length,

                data: conductor,
            });
        } else {
            return res.status(400).json({
                success: false,
                message: "Conductor is already assigned to a Duty",
            })

        }


    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
    }
});
// router.post('/user/getConductorDetails', async (req, res) => {
//     try {
//         console.log("redirected to user/getConductorDetails POST");
//         console.log(req.body.phoneNumber);


//         const conductor = await Conductor.find({ phoneNumber: req.body.phoneNumber });


//         return res.status(200).json({
//             success: true,
//             count: conductor.length,

//             data: conductor,
//         });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'server error' });
//     }
// });

router.post('/user/getBusDetails', async (req, res) => {
    try {
        console.log("redirected to user/getBusDetails POST");
        console.log(req.body.busId);


        const bus = await Bus.find({ BusId: req.body.busId });
        console.log("bus:" + bus);




        return res.status(200).json({
            success: true,
            count: bus.length,

            data: bus,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
    }
});

router.post('/user/getRouteDetails', async (req, res) => {
    try {
        console.log("redirected to user/getRoutesDetails POST");
        console.log(req.body.route_id);


        const route = await Route.find({ "RouteDetails.route_id": req.body.route_id });


        return res.status(200).json({
            success: true,
            count: route.length,

            data: route,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
    }
});



// router.get('http://localhost:3001/ticket', async (req, res) => {
//     try {
//         console.log("redirected to user/getTicketDetails get");


//         const user = await User.find({ phoneNumber: req.body.phoneNumber});

//         return res.status(200).json({
//             success: true,
//             count: user.length,
//             data: user,
//         });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'server error' });
//     }
// });


router.post('/user/expireTicket', async (req, res) => {
    console.log(req.body.phoneNumber);
    console.log(req.body.TicketId);
    console.log(" server routed to/user/expireTicket delete");


    const user = await User.find({ phoneNumber: req.body.phoneNumber });
    // console.log(user);

    console.log(req.body.phoneNumber);
    console.log(" server routed to/user/expireTicket delete");
    const current_ticket = user[0].Tickets.find((ele, i) => ele.TicketId === req.body.TicketId);
    console.log("current_ticket");
    const current_ticket_index = user[0].Tickets.findIndex((ele) => ele.TicketId === req.body.TicketId);
    console.log("index no:" + current_ticket_index);
    if(current_ticket_index == -1){
    let result = await User.findOneAndUpdate({ phoneNumber: req.body.phoneNumber }, { $set: { Tickets: user[0].Tickets } }, { new: true });

    }else {
        current_ticket.status = "Expired";
    
        // console.log("updated user", user[0].Tickets);
    }
    let result = await User.findOneAndUpdate({ phoneNumber: req.body.phoneNumber }, { $set: { Tickets: user[0].Tickets } }, { new: true });

    // let result = await User.updateOne(
    //     { TicketId: req.body.Ticketid },
    //     {
    //         $push: {
    //             Tickets: {
    //                 PassengerNumber: req.body.PassengerNumber,
    //                 busid: req.body.busid,
    //                 src: req.body.src,
    //                 destination: req.body.destination,
    //                 adult: req.body.adult,
    //                 adult_fare: req.body.adult_fare,
    //                 junior: req.body.junior,
    //                 junior_fare: req.body.junior_fare,
    //                 senior: req.body.senior,
    //                 senior_fare: req.body.senior_fare,
    //                 ph: req.body.ph,
    //                 ph_fare: req.body.ph_fare,
    //                 total_fare: req.body.total_fare,
    //                 numberOfStops: req.body.numberOfStops,
    //                 datetime: req.body.datetime,
    //                 status: "verified",

    //             }

    //         },

    //     }
    // );
    // console.log("result" + result);
   
    res.send({ status: "success" });




})

//verify in user
router.post('/user/ScanAndVerifyTicket', async (req, res) => {
    console.log(req.body.PassengerNumber);
    console.log(req.body.ticketid);
    console.log(" server routed to /Scan And VerifyTicket push");


    const user = await User.find({ phoneNumber: req.body.PassengerNumber });
    // console.log(user);

    console.log(req.body.PassengerNumber);
    console.log(" result of user.updateone");
    const current_ticket = user[0].Tickets.find((ele, i) => ele.TicketId === req.body.ticketid);
    console.log("current_ticket");
    const current_ticket_index = user[0].Tickets.findIndex((ele) => ele.TicketId === req.body.ticketid);
    console.log("index no:" + current_ticket_index);
    current_ticket.status = "Verified";
    console.log("updated user", user[0].Tickets);


    let result = await User.findOneAndUpdate({ phoneNumber: req.body.PassengerNumber }, { $set: { Tickets: user[0].Tickets } }, { new: true });

    // let result = await User.updateOne(
    //     { TicketId: req.body.Ticketid },
    //     {
    //         $push: {
    //             Tickets: {
    //                 PassengerNumber: req.body.PassengerNumber,
    //                 busid: req.body.busid,
    //                 src: req.body.src,
    //                 destination: req.body.destination,
    //                 adult: req.body.adult,
    //                 adult_fare: req.body.adult_fare,
    //                 junior: req.body.junior,
    //                 junior_fare: req.body.junior_fare,
    //                 senior: req.body.senior,
    //                 senior_fare: req.body.senior_fare,
    //                 ph: req.body.ph,
    //                 ph_fare: req.body.ph_fare,
    //                 total_fare: req.body.total_fare,
    //                 numberOfStops: req.body.numberOfStops,
    //                 datetime: req.body.datetime,
    //                 status: "verified",

    //             }

    //         },

    //     }
    // );
    console.log("result" + result);
    res.send({ status: "success" });




})
//verify in bus
router.post('/user/ScanAndVerifyTicketInBusTicket', async (req, res) => {
    console.log(req.body.busid);
    console.log(req.body.PassengerNumber);
    console.log(req.body.ticketid);
    console.log(" server routed to /Scan And ScanAndVerifyTicketInBusTicket push");


    const busticket = await BusTicket.find({ BusId: req.body.busid });
    // console.log(user);

    // console.log(req.body.PassengerNumber);
    // console.log(" result of user.updateone");
    // const current_ticket = busticket[0].Tickets.find((ele, i) => ele.TicketId === req.body.ticketid);
    // console.log("current_ticket");
    // const current_ticket_index = user[0].Tickets.findIndex((ele) => ele.TicketId === req.body.ticketid);
    // console.log("index no:" + current_ticket_index);
    // current_ticket.status = "Verified";
    // console.log("updated user", user[0].Tickets);



    // let result = await User.updateOne(
    //     { TicketId: req.body.Ticketid },
    //     {
    //         $push: {
    //             Tickets: {
    //                 PassengerNumber: req.body.PassengerNumber,
    //                 busid: req.body.busid,
    //                 src: req.body.src,
    //                 destination: req.body.destination,
    //                 adult: req.body.adult,
    //                 adult_fare: req.body.adult_fare,
    //                 junior: req.body.junior,
    //                 junior_fare: req.body.junior_fare,
    //                 senior: req.body.senior,
    //                 senior_fare: req.body.senior_fare,
    //                 ph: req.body.ph,
    //                 ph_fare: req.body.ph_fare,
    //                 total_fare: req.body.total_fare,
    //                 numberOfStops: req.body.numberOfStops,
    //                 datetime: req.body.datetime,
    //                 status: "verified",

    //             }

    //         },

    //     }
    // );
    // console.log("result" + busticket);
    const current_=busticket[0].Tickets.findIndex((ele) => ele.TicketId === req.body.ticketid);
    busticket[0].Tickets[current_].status="verified";
    console.log("result" +current_ );
    console.log("updated busTicket ", busticket[0].Tickets);

    let result = await BusTicket.findOneAndUpdate({ BusId: req.body.busid }, { $set: { Tickets:  busticket[0].Tickets } }, { new: true });
    console.log("result" + result);


    res.send({ status: "success" });



 
})

//api for userDailypass Verification AC
router.post('/user/ScanAndVerifyPass_Daily_ePass_AC', async (req, res) => {
    try {
        console.log("redirected to /user/ScanAndVerifyPass_Daily_ePass_AC");
        console.log(req.body.pass_id);
        const user_pass_type = req.user_pass_type;
        const user = await User.find(
            { "ePass_details.Daily_ePass_AC.Pass_id": req.body.pass_id });
        // console.log(user);


        if (user.length == 0) {

            console.log("not valid pass");
            return res.status(500).json({
                success: false,
                count: user.length,
                data: user,
            });
        } else {
            return res.status(200).json({
                success: true,
                count: user.length,
                data: user,
            });

        }



    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
    }
});
router.post('/user/ScanAndVerifyPass_Daily_ePass_Non_AC', async (req, res) => {
    try {
        console.log("redirected to /user/ScanAndVerifyPass_Daily_ePass_Non_AC");
        console.log(req.body.pass_id);
        const user_pass_type = req.user_pass_type;
        const user = await User.find(
            { "ePass_details.Daily_ePass_Non_AC.Pass_id": req.body.pass_id });
        // console.log(user);


        if (user.length == 0) {

            console.log("not valid pass");
            return res.status(500).json({
                success: false,
                count: user.length,
                data: user,
            });
        } else {
            return res.status(200).json({
                success: true,
                count: user.length,
                data: user,
            });

        }



    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
    }
});

router.post('/user/ScanAndVerifyPass_Weekly_ePass_AC', async (req, res) => {
    try {
        console.log("redirescted to /user/ScanAndVerifyPass_Weekly_ePass_AC");
        console.log(req.body.pass_id);
        const user = await User.find(
            { "ePass_details.Weekly_ePass_AC.Pass_id": req.body.pass_id });
        // console.log(user);


        if (user.length == 0) {

            console.log("not valid pass");
            return res.status(500).json({
                success: false,
                count: user.length,
                data: user,
            });
        } else {
            return res.status(200).json({
                success: true,
                count: user.length,
                data: user,
            });

        }



    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
    }
});
router.post('/user/ScanAndVerifyPass_Weekly_ePass_Non_AC', async (req, res) => {
    try {
        console.log("redirescted to /user/ScanAndVerifyPass_Weekly_ePass_Non_AC");
        console.log(req.body.pass_id);
        const user = await User.find(
            { "ePass_details.Weekly_ePass_Non_AC.Pass_id": req.body.pass_id });
        // console.log(user);


        if (user.length == 0) {

            console.log("not valid pass");
            return res.status(500).json({
                success: false,
                count: user.length,
                data: user,
            });
        } else {
            return res.status(200).json({
                success: true,
                count: user.length,
                data: user,
            });

        }



    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
    }
});

router.post('/user/ScanAndVerifyPass_Monthly_ePass_AC', async (req, res) => {
    try {
        console.log("redirescted to /user/ScanAndVerifyPass_Monthly_ePass_AC");
        console.log(req.body.pass_id);
        const user = await User.find(
            { "ePass_details.Monthly_ePass_AC.Pass_id": req.body.pass_id });
        // console.log(user);


        if (user.length == 0) {

            console.log("not valid pass");
            return res.status(500).json({
                success: false,
                count: user.length,
                data: user,
            });
        } else {
            return res.status(200).json({
                success: true,
                count: user.length,
                data: user,
            });

        }



    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
    }
});
router.post('/user/ScanAndVerifyPass_Monthly_ePass_Non_AC', async (req, res) => {
    try {
        console.log("redirescted to /user/ScanAndVerifyPass_Monthly_ePass_Non_AC");
        console.log(req.body.pass_id);
        const user = await User.find(
            { "ePass_details.Monthly_ePass_Non_AC.Pass_id": req.body.pass_id });
        // console.log(user);


        if (user.length == 0) {

            console.log("not valid pass");
            return res.status(500).json({
                success: false,
                count: user.length,
                data: user,
            });
        } else {
            return res.status(200).json({
                success: true,
                count: user.length,
                data: user,
            });

        }



    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
    }
});




///api for userDailypass Verification Non_AC 





router.post('/managerlogin', async (req, res) => {
    console.log(" Manager login");
    console.log(req.body);

    const manager = new Manager({
        phoneNumber: req.body.phoneNumber,
        otp: req.body.otp,
        logindate: req.body.logindate,
        role: "Manager",
        Manager_details: req.body.Manager_details,
        KYC_Document_details: req.body.KYC_Document_details,
        Duty_details: req.body.Duty_details


    });

    try {
        const savedManager = await manager.save();
        res.send(savedManager);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.post('/conductorlogin', async (req, res) => {
    console.log(" conductor login");
    console.log(req.body);

    const conductor = new Conductor({
        phoneNumber: req.body.phoneNumber,
        otp: req.body.otp,
        logindate: req.body.logindate,
        role: "conductor",
        Conductor_details: req.body.Conductor_details,
        KYC_Document_details: req.body.KYC_Document_details,
        Duty_details: req.body.Duty_details


    });

    try {
        const savedConductor = await conductor.save();
        res.send(savedConductor);
    } catch (err) {
        res.status(400).send(err);
    }
});


// router.post('/ePass_details/Daily_ePass_Non_AC', async (req, res) => {
//     console.log(req.phoneNumber);
//     console.log(" server routed to /ePass_details/Daily_ePass_Non_AC");
//     const user = await User.find({ phonenumber: req.phoneNumber });
//     let result = await User.updateOne(
//         { phoneNumber: 9876543210 },
//         {
//             $set: req.body
//         }
//     );
//     console.log(res.body);
//     res.send({ status: "success" });




// })


router.post('/ePass_details/Daily_ePass_AC', async (req, res) => {
    console.log(req.body.phoneNumber);

    console.log(req.body.documentId);
    console.log(" server routed to /ePass_details/Daily_ePass_AC");

    const user = await User.find({ phonenumber: req.body.phoneNumber });
    let result = await User.updateOne(
        { phoneNumber: req.body.phoneNumber },
        {
            $set: {
                "ePass_details.Daily_ePass_AC.Pass_id": req.body.pass_id,

                "ePass_details.Daily_ePass_AC.Fare": req.body.price,

                "ePass_details.Daily_ePass_AC.logindate": req.body.currentDate,

                "ePass_details.Daily_ePass_AC.ExpiryDate": req.body.endOfDay,
                "ePass_details.Daily_ePass_AC.DocNumber": req.body.documentId
            },
            "ePass_details.Daily_ePass_AC.TransactionNumber": req.body.transactionNumber,
        }
    );
    // console.log(user);
    res.send({ status: "success" });




})

router.post('/ePass_details/Daily_ePass_Non_AC', async (req, res) => {
    console.log(req.body.documentId);

    console.log(" server routed to /ePass_details/Daily_ePass_Non_AC");
    console.log(req.body.phoneNumber);

    const user = await User.find({ phonenumber: req.body.phoneNumber });
    let result = await User.updateOne(
        { phoneNumber: req.body.phoneNumber },
        {
            $set: {
                "user_details.FirstName": "XXX",
                "ePass_details.Daily_ePass_Non_AC.Pass_id": req.body.pass_id,

                "ePass_details.Daily_ePass_Non_AC.Fare": req.body.price,

                "ePass_details.Daily_ePass_Non_AC.logindate": req.body.currentDate,

                "ePass_details.Daily_ePass_Non_AC.ExpiryDate": req.body.endOfDay,
                "ePass_details.Daily_ePass_Non_AC.DocNumber": req.body.documentId,
            },
            "ePass_details.Daily_ePass_Non_AC.TransactionNumber": req.body.transactionNumber,
        }
    );

    res.send({ status: "success" });




})





router.post('/ePass_details/Weekly_ePass_Non_AC', async (req, res) => {
    console.log(req.body.phoneNumber);
    console.log(" server routed to /ePass_details/Weekly_ePass_Non_AC");


    const user = await User.find({ phonenumber: req.body.phoneNumber });
    let result = await User.updateOne(
        { phoneNumber: req.body.phoneNumber },
        {
            $set: {

                "ePass_details.Weekly_ePass_Non_AC.Pass_id": req.body.pass_id,

                "ePass_details.Weekly_ePass_Non_AC.Fare": req.body.price,

                "ePass_details.Weekly_ePass_Non_AC.logindate": req.body.currentDate,

                "ePass_details.Weekly_ePass_Non_AC.ExpiryDate": req.body.endOfDay,
                "ePass_details.Weekly_ePass_Non_AC.DocNumber": req.body.documentId,
            },
            "ePass_details.Weekly_ePass_Non_AC.TransactionNumber": req.body.transactionNumber,
        }
    );

    res.send({ status: "success" });




})
router.post('/ePass_details/Weekly_ePass_AC', async (req, res) => {
    console.log(req.body.phoneNumber);
    console.log(" server routed to /ePass_details/Weekly_ePass_AC");


    const user = await User.find({ phonenumber: req.body.phoneNumber });
    let result = await User.updateOne(
        { phoneNumber: req.body.phoneNumber },
        {
            $set: {

                "ePass_details.Weekly_ePass_AC.Pass_id": req.body.pass_id,

                "ePass_details.Weekly_ePass_AC.Fare": req.body.price,

                "ePass_details.Weekly_ePass_AC.logindate": req.body.currentDate,

                "ePass_details.Weekly_ePass_AC.ExpiryDate": req.body.endOfDay,
                "ePass_details.Weekly_ePass_AC.DocNumber": req.body.documentId,
            },
            "ePass_details.Weekly_ePass_AC.TransactionNumber": req.body.transactionNumber,
        }
    );

    res.send({ status: "success" });




})


router.post('/ePass_details/Monthly_ePass_AC', async (req, res) => {
    console.log(req.body.phoneNumber);
    console.log(" server routed to /ePass_details/Monthly_ePass_AC");


    const user = await User.find({ phonenumber: req.body.phoneNumber });
    let result = await User.updateOne(
        { phoneNumber: req.body.phoneNumber },
        {
            $set: {

                "ePass_details.Monthly_ePass_AC.Pass_id": req.body.pass_id,

                "ePass_details.Monthly_ePass_AC.Fare": req.body.price,

                "ePass_details.Monthly_ePass_AC.logindate": req.body.currentDate,

                "ePass_details.Monthly_ePass_AC.ExpiryDate": req.body.endOfDay,
                "ePass_details.Monthly_ePass_AC.DocNumber": req.body.documentId,
            },
            "ePass_details.Monthly_ePass_AC.TransactionNumber": req.body.transactionNumber,
        }
    );

    res.send({ status: "success" });




})

router.post('/ePass_details/Monthly_ePass_Non_AC', async (req, res) => {
    console.log(req.body.phoneNumber);
    console.log(" server routed to /ePass_details/Monthly_ePass_Non_AC");


    const user = await User.find({ phonenumber: req.body.phoneNumber });
    let result = await User.updateOne(
        { phoneNumber: req.body.phoneNumber },
        {
            $set: {

                "ePass_details.Monthly_ePass_Non_AC.Pass_id": req.body.pass_id,

                "ePass_details.Monthly_ePass_Non_AC.Fare": req.body.price,

                "ePass_details.Monthly_ePass_Non_AC.logindate": req.body.currentDate,

                "ePass_details.Monthly_ePass_Non_AC.ExpiryDate": req.body.endOfDay,
                "ePass_details.Monthly_ePass_Non_AC.DocNumber": req.body.documentId,
            },
            "ePass_details.Monthly_ePass_Non_AC.TransactionNumber": req.body.transactionNumber,
        }
    );

    res.send({ status: "success" });




})



//api to set duty by manager
router.post('/bustickets', async (req, res) => {
    console.log("bus Tickets");
    console.log(req.body);


    //HI

    const busTicket = new BusTicket(
        {
            BusId: req.body.BusId,
            Conductor_Number: req.body.Conductor_Number,
            Bus_details: req.body.Bus_details,

            RouteDetails: req.body.RouteDetails,

            Conductor_details: req.body.Conductor_details,
            Manager_details: req.body.Manager_details,
            Duty_details: req.body.Duty_details

        });

    try {
        const savedBusTicket = await busTicket.save();

        console.log("duty set");


        res.send(savedBusTicket);
        return res.status(200)
    } catch (err) {
        res.status(400).send(err);
    }
});


// 
//manager edit  allocated duty
router.post('/busticketsDutyupdate', async (req, res) => {
    console.log("bus Tickets updatte");
    console.log(req.body);


    const user = await BusTicket.find({ BusId: req.body.BusId });
    let result = await BusTicket.updateOne(
        { BusId: req.body.BusId },
        {
            $set: {
                Bus_details: req.body.Bus_details,

                RouteDetails: req.body.RouteDetails,

                Conductor_details: req.body.Conductor_details,
                Manager_details: req.body.Manager_details,
                Duty_details: req.body.Duty_details
            }
        }
    );
    console.log("ediTED");

    return res.status(200).json({
        success: true,
        count: result.length,

        data: result,
    });




});
//HI


// add bus to database bus collections
router.post('/addbus', async (req, res) => {
    console.log("addbus Tickets");
    console.log(req.body);


    //HI mannualy hit  this api to ad new bus 
    const bus = new Bus(
        {
            BusId: 3,
            Bus_details: {
                BusNumber: "KA-01-AB-3333",
                BusType: "Normal",
                Engine: "xxx",
                Mfg_Year: "2020",
                YearOfExpiry: "2030",
                Status: "Active",
                Age: "2",
                depot: "10",
                trail: 6,
            }
        });

    try {
        const savedBus = await bus.save();

        console.log("bus added ");

        res.send(savedBus);
    } catch (err) {
        res.status(400).send(err);
    }
});

//prior hitting admin need to allocate duty using above api
router.post('/addticket', async (req, res) => {
    console.log(req.body.PassengerNumber);
    console.log(" server routed to /addticket");
    console.log(req.body);


    const busTicket = await BusTicket.find({ BusId: req.body.busid });
    console.log("result of addticket" + busTicket);
    let result = await BusTicket.updateOne(
        { BusId: req.body.busid },
        {
            $push: {
                Tickets: {
                    TicketId: req.body.ticketid,
                    PassengerNumber: req.body.PassengerNumber,
                    busid: req.body.busid,
                    src: req.body.src,
                    destination: req.body.destination,
                    adult: req.body.adult,
                    adult_fare: req.body.adult_fare,
                    junior: req.body.junior,
                    junior_fare: req.body.junior_fare,
                    senior: req.body.senior,
                    senior_fare: req.body.senior_fare,
                    ph: req.body.ph,
                    ph_fare: req.body.ph_fare,
                    total_fare: req.body.total_fare,
                    numberOfStops: req.body.numberOfStops,
                    datetime: req.body.datetime,
                    status: req.body.status,
                }

            }
        }
    );

    res.send({ status: "success" });




})


router.post('/addtickettouser', async (req, res) => {
    console.log(req.body.PassengerNumber);
    console.log(" server routed to /addtickettouser");


    const user = await User.find({ phoneNumber: req.body.PassengerNumber });
    // console.log(user);

    console.log(req.body.PassengerNumber);
    console.log(" RES OF USER UPDATEONE");

    let result = await User.updateOne(
        { phoneNumber: req.body.PassengerNumber },
        {
            $push: {
                Tickets: {
                    TicketId: req.body.ticketid,
                    PassengerNumber: req.body.PassengerNumber,
                    busid: req.body.busid,
                    src: req.body.src,
                    destination: req.body.destination,
                    adult: req.body.adult,
                    adult_fare: req.body.adult_fare,
                    junior: req.body.junior,
                    junior_fare: req.body.junior_fare,
                    senior: req.body.senior,
                    senior_fare: req.body.senior_fare,
                    ph: req.body.ph,
                    ph_fare: req.body.ph_fare,
                    total_fare: req.body.total_fare,
                    numberOfStops: req.body.numberOfStops,
                    datetime: req.body.datetime,
                    status: req.body.status,
                }

            }
        }
    );
    // console.log(user);
    res.send({ status: "success" });
})







// router.post('/register',async (req,res)=>{
//     console.log("Register");
//     console.log(req.body);

//     const user =new User({ 
//         phoneNumber:req.body.phoneNumber,
//         otp:req.body.otp,
//         logindate:req.body.logindate,
//         user_details:req.body.user_details,
//         role:req.body.role,

//             });

//     try{
//         const savedUser = await user.save();
//         res.send(savedUser);
//     }catch(err){
//         res.status(400).send(err);
//     }
// });



router.post('/route', async (req, res) => {
    console.log("route login");
    console.log(req.body);


    //HI

    const route = new Route({
        RouteDetails: {
            route_id: 3,
            route_no: "1F",
            distance: "11.5 KM",
            origin: "BTM Layout",
            destination: "Krishnarajendra Market",
            intermediateStops: [{ "busstop": "BTM Layout,BTM Layout 2nd Stage,Kuvempunagara Bus Stand" }, { "busstop": "Udupi Garden 16th Main,BTM Layout,Opp Axis Bank" }, { "busstop": "BTM water Tank,BTM LAYOUT,OPPOSITE OF CORPORATION BANK" }, { "busstop": "MICO Layout,BTM LAYOUT,IN FRONT OF METRIC STREAM" }, { "busstop": "Jayadeva Hospital,BTM MICO LAYOUT,OPPOSITE OF JAYADEVA HOSPITAL" }, { "busstop": "East End,Adjacent to Shekhar Hospital" }, { "busstop": "Jayanagara Pump House,JAYANAGARA 9TH BLOCK,BESIDE SAINT MARY ENTERPRISES" }, { "busstop": "Carmel Convent Jayanagara,JAYANAGARA 4TH T BLOCK,BESIDE THINK SPAN TECHNOLOGIES" }, { "busstop": "Jayanagara General Hospital,JAYANAGARA 4TH T BLOCK,RAJEEV GANDHI UNIVERSITY OF HEALTH" }, { "busstop": "Church,JAYANAGARA 4TH T BLOCK,BESIDE THASHI'S HERBAL" }, { "busstop": "Jayanagara 4th Block,TTMC" }, { "busstop": "Jayanagara 3rd Block,JAYANAGARA 3RD BLOCK,OPPOSITE OF UTL TECHNOLOGIS" }, { "busstop": "Madavan Park,JAYANAGARA 3RD BLOCK,OPPOSITE OF ORIENTAL INSUARENCE" }, { "busstop": "Southend Circle,BASAVANAGUDI,BESIDE GANDHARVA FAMILY BAR" }, { "busstop": "Nagasandra Circle,BASAVANAGUDI,BESIDE PROSPER PARK APPARTMENT" }, { "busstop": "Netakallappa Circle,BASAVANAGUDI,OPPOSITE OF GURU RAGHAVENDRA BANK" }, { "busstop": "Basavanagudi Police Station,BASAVANAGUDI,BESIDE ACHIEVE SCHOOL OF EDUCATION" }, { "busstop": "Gandhi Bazaar,BASAVANAGUDI,BESIDE ASHOKA PLAZA" }, { "busstop": "Ramakrishna Ashrama,GAVIPURAM EXTENTION,OPPOSITE OF STATE BANK OF INDIA" }, { "busstop": "Bangalore High School,KEMPE GOWDA NAGARA,IN FRONT OF MORE MEGHA STORE" }, { "busstop": "Chamarajapet,CHAMARAJA PETE,BESIDE VENKUS & CO. PETROL BUNK" }, { "busstop": "Makkalakoota" }, { "busstop": "Krishnarajendra Market" }]

        }
    });

    try {
        const savedRoute = await route.save();
        res.send(savedRoute);
    } catch (err) {
        res.status(400).send(err);
    }
});


//image upload #kyc doc upload# buffer
//KycDocUpload
router.post('/upload', upload.single('file'), async (req, res) => {
    console.log(`POST request upload avatar ${req.file.originalname}`);
    // console.log(req.file)
    console.log(req.body.UserPhoneNumber)

    const newAvatar = req.file;

    const avatar_ = new Avatar(
        {
            fieldname: req.file.fieldname,
            originalname: req.file.originalname,
            encoding: req.file.encoding,
            mimetype: req.file.mimetype,
            buffer: req.file.buffer,
            size: req.file.size,
            UserPhoneNumber: req.body.UserPhoneNumber,

            // UserPhoneNumber: req.file.UserPhoneNumber,

        });
    const savedAvatar = await avatar_.save();
    return res.status(200).json(savedAvatar);


});


module.exports = router;