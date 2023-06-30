
import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import AdminLayout from "layouts/Admin.js";
import Login from "./components/Authentication/Login";
import ConductorLogin from "components/Authentication/ConductorLogin";
import ManagerLogin from "components/Authentication/ManagerLogin";
import SignUp from "./components/Authentication/SignUp";
import VerifyPhone from "components/Authentication/VerifyPhone";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
    <Route path="/login" component={Login} />
    <Route path="/ConductorLogin" component={ConductorLogin} />
    <Route path="/ManagerLogin" component={ManagerLogin} />


    <Route path="/SignUp" component={SignUp} />

    <Route path="/VerifyPhone" component={VerifyPhone} />

    <Route path="/ShowDirection" component={"/admin/Map/ShowDirection"} />
    <Route path="/logout" component={"/admin/Logout"} />



      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />

      <Route path="/user" component={"/admin/dashboard"} />

      <Route path="/KycDocUpload" component={"/admin/KycDocUpload"} />
      {/* <Route path="/ViewKYCDocuments" component={"/admin/manager/ViewKYCDocuments"} /> */}



      <Route path="/notifications" component={"/admin/notifications"} />

      <Route path="/qrcodescan" component={"/admin/QrCodeScan"} />


      <Route path="/userlogin" component={"/admin/UserLogin/UserLogin"} />

      {/* <Route path="/verifyphone" component={"/admin/UserLogin/VerifyPhone"} /> */}


      <Route path="/buyticketinbus" component={"/admin/eticket/BuyTicketInBus"} />


      <Route path="/checkoutticket" component={"/admin/eticket/CheckOutTicket"} />




      <Route path="/displayticket" component={"/admin/eticket/DisplayTicket"} />
      <Route path="/displaytickets" component={"/admin/eticket/DisplayTickets"} />

      <Route path="/viewmytickets" component={"/admin/eticket/ViewMyTickets"} />

      <Route path="/paynow" component={"/admin/eticket/PayNow"} />

      <Route path="/reserve" component={"/admin/eticket/ReserveTicket"} />


      <Route path="/viewdailypass_AC" component={"/admin/epass/ViewDailyPass_AC"} />
      <Route path="/viewdailypass_Non_Ac" component={"/admin/epass/ViewDailyPass_Non_AC"} />




      <Route path="/ScanAndVerifyTicket" component={"/admin/eticket/ScanVerifyTicket"} />

      <Route path="/ScanVerifyPass_Daily_ePass_AC" component={"/admin/epass/ScanVerifyPass_Daily_ePass_AC"} />
      <Route path="/ScanVerifyPass_Weekly_ePass_AC" component={"/admin/epass/ScanVerifyPass_Weekly_ePass_AC"} />

      <Route path="/ScanVerifyPass_Monthly_ePass_AC" component={"/admin/epass/ScanVerifyPass_Monthly_ePass_AC"} />




      <Route path="/chooseDailyPass" component={"/admin/epass/ChooseDailyPass"} />

      <Route path="/chooseMonthlyPass" component={"/admin/epass/ChooseMonthlyPass"} />
      <Route path="/chooseWeeklyPass" component={"/admin/epass/ChooseWeeklyPass"} />


      <Route path="/weeklypass_AC" component={"/admin/epass/WeeklyPass_AC"} />

      <Route path="/viewweeklypass" component={"/admin/epass/ViewWeeklyPass"} />

      <Route path="/monthlypass" component={"/admin/epass/MonthlyPass"} />

<Route path="/viewmonthlypass_AC" component={"/admin/epass/ViewMonthlyPass_AC"} />
<Route path="/viewmonthlypassNon_AC" component={"/admin/epass/ViewMonthlyPassNon_AC"} />


<Route path="/viewbuses" component={"/admin/eticket/ViewBuses"} />



<Route path="/managerlogin" component={"/admin/manager/ManagerLogin"} />

<Route path="/verifymanagerphone" component={"/admin/manager/VerifyManagerPhone"} />

<Route path="/assignroutestobus" component={"/admin/manager/AssignRoutesToBus"} />

<Route path="/addbus" component={"/admin/manager/AddBus"} />

<Route path="/generateqrcode" component={"/admin/manager/GenerateQrCode"} />


<Route path="/viewassignedduty" component={"/admin/manager/ViewAssignedDuty"} />

<Route path="/updateduty" component={"/admin/manager/UpdateDuty"} />


<Route path="/conductorlogin" component={"/admin/conductor/ConductorLogin"} />

<Route path="/conductorverifyphone" component={"/admin/conductor/ConductorVerifyPhone"} />

<Route path="/conductordashboard" component={"/admin/conductor/ConductorDashboard"} />



<Route path="/viewscannedverifiedtickets" component={"/admin/conductor/ViewScannedVerifiedTickets"} />


<Route path="/scanverifyticket" component={"/admin/conductor/ScanVerifyTicket"} />


<Route path="/viewassignedduty" component={"/admin/conductor/ViewAssignedDuty"} />

<Route path="/mapindex" component={"/admin/Map/MapIndex"} />



{/* <Route path="/documentverify" component={"/admin/manager/DocumentVerify"} /> */}

{/* <Route path="/managerdashboard" component={"/admin/manager/ManagerDashboard"} /> */}







      {/* <Route path="/displayticket" component={"/admin/eticket/DisplayTicket"} /> */}



      <Redirect from="/" to="/Login" />
    </Switch>
  </BrowserRouter>
);
