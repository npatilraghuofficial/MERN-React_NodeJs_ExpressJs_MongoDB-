
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";

import Notifications from "views/Notifications.js";

import QrCodeScan from "views/QrCodeScan.js";


import BuyTicketInBus from "views/eticket/BuyTicketInBus";

import PayNow from "views/eticket/PayNow";
import DisplayTicket from "views/eticket/DisplayTicket";


import ReserveTicket from "views/eticket/ReserveTicket";
// import DailyPass from "views/epass/DailyPass";

// import ViewDailyPass_AC from "views/epass/ViewDailyPass";
import ViewDailyPass_Non_AC from "views/epass/ViewDailyPass_Non_AC";




// import ViewWeeklyPass from "views/epass/ViewWeeklyPass";

// import WeeklyPass from "views/epass/WeeklyPass";



import ViewMonthlyPass from "views/epass/ViewMonthlyPass";

// import MonthlyPass from "views/epass/MonthlyPass";
import ViewBuses from "views/eticket/ViewBuses";
import TrackMyJourney from "views/eticket/TrackMyJourney";
import TrackMap from "views/epass/TrackMap";
import ManagerLogin from "views/manager/ManagerLogin";
import VerifyManagerPhone from "views/manager/VerifyManagerPhone";
import ManagerDashboard from "views/manager/ManagerDashboard";
import DocumentVerify from "views/manager/DocumentVerify";
import AssignRoutesToBus from "views/manager/AssignRoutesToBus";
import GenerateQrCode from "views/manager/GenerateQrCode";
import ViewAssignedDuty from "views/manager/ViewAssignedDuty";
import ConductorLogin from "views/Conductor/ConductorLogin";
import ConductorVerifyPhone from "views/Conductor/ConductorVerifyPhone";
import ConductorDashboard from "views/Conductor/ConductorDashboard";
import ScanVerifyTicket from "views/Conductor/ScanVerifyTicket";
import ViewVerifiedTickets from "views/Conductor/ViewVerifiedTickets";
import ViewDuty from "views/Conductor/ViewDuty";
import MapIndex from "views/Map/MapIndex";
import ViewStopWiseFare from "views/Conductor/ViewStopWiseFare";
import SearchMap from "views/SearchMap/SearchMap";
import ScanVerifyPass_Daily_ePass_AC from "views/epass/ScanVerifyPass_Daily_ePass_AC";
import ScanVerifyPass_Weekly_ePass_AC from "views/epass/ScanVerifyPass_Weekly_ePass_AC";
import ScanVerifyPass_Monthly_ePass_AC from "views/epass/ScanVerifyPass_Monthly_ePass_AC";
import ScanVerifyPass_Daily_ePass_Non_AC from "views/epass/ScanVerifyPass_Daily_ePass_Non_AC";
import ViewMonthlyPass_Non_AC from "views/epass/ViewMonthlyPass_Non_AC";
import ScanVerifyPass_Monthly_ePass_Non_AC from "views/epass/ScanVerifyPass_Monthly_ePass_Non_AC";
import ViewWeeklyPass_Non_AC from "views/epass/ViewWeeklyPass_Non_AC";
import ScanVerifyPass_Weekly_ePass_Non_AC from "views/epass/ScanVerifyPass_Weekly_ePass_Non_AC";
import QrCodeScanForPass from "views/epass/QrCodeScanForPass";
import ViewDailyPass_AC from "views/epass/ViewDailyPass_AC";
import ViewMonthlyPass_AC from "views/epass/ViewMonthlyPass";
import ViewWeeklyPass_AC from "views/epass/ViewWeeklyPass_AC";
import DailyPass_AC from "views/epass/DailyPass_AC";
import MonthlyPass_AC from "views/epass/MonthlyPass_AC";
import WeeklyPass_AC from "views/epass/WeeklyPass_AC";
import WeeklyPass_Non_AC from "views/epass/WeeklyPass_Non_AC";
import ChooseDailyPass from "views/epass/ChooseDailyPass";
import DailyPass_Non_AC from "views/epass/DailyPass_Non_AC";
import ChooseMonthlyPass from "views/epass/ChooseMonthlyPass";
import ChooseWeeklyPass from "views/epass/ChooseWeeklyPass";
import MonthlyPass_Non_AC from "views/epass/MonthlyPass_Non_AC";
import QrCodeScanForTicket from "views/eticket/QrCodeScanForTicket";
import ViewMyTickets from "views/eticket/ViewMyTickets";
import DisplayTickets from "views/eticket/DisplayTickets";
import ScanAndVerifyTicket from "views/eticket/ScanAndVerifyTicket";
import UpdateDuty from "views/manager/UpdateDuty";
import KycDocUpload from "views/KycDocUpload";
import ViewKYCDocuments from "views/manager/ViewKYCDocuments";
import AddBus from "views/manager/AddBus";
import Logout from "Logout";


const dashboardRoutes = [
 
  {
    key:1,
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin"
  },
  
  {
    key:2,
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin"
  },
  {
    key:3,
    path: "/kycDocUpload",
    name: "Upload KYC Doc's",
    icon: "nc-icon nc-circle-09",
    component: KycDocUpload,
    layout: "/admin"
  },


  {key:4,
    path: "/manager/managerdashboard",
    name: "D-Manager",
    icon: "nc-icon nc-chart-pie-35",
    component:ManagerDashboard,
    layout: "/admin"
  },
  {key:4,
    path: "/logout",
    name: "logout",
    icon: "nc-icon nc-chart-pie-35",
    component:Logout,
    layout: "/admin"
  },
  {key:5,
    path: "/conductor/ConductorDashboard",
    name: "D-Conductor",
    icon: "nc-icon nc-chart-pie-35",
    component:ConductorDashboard,
    layout: "/admin"
  },
  {key:5,
    path: "/logout",
    name: "logout",
    icon: "nc-icon nc-chart-pie-35",
    component:Logout,
    layout: "/admin"
  },

  {key:3,
    path: "/logout",
    name: "logout",
    icon: "nc-icon nc-chart-pie-35",
    component:Logout,
    layout: "/admin"
  },
 
  // {
  //   path: "/table",
  //   name: "Table List",
  //   icon: "nc-icon nc-notes",
  //   component: TableList,
  //   layout: "/admin"
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-paper-2",
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-atom",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: Maps,
  //   layout: "/admin"
  // },
  {
    key:"44",
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin"
  },



  // {
  //   path: "/UserLogin/UserLogin",
  //   name: "Login",
  //   icon: "nc-icon ",
  //   component:UserLogin,
  //   layout: "/admin"
  // },

  // {
  //   path: "/UserLogin/verifyphone",
  //   name: "verify User",
  //   icon: "nc-icon ",
  //   component:VerifyPhone,
  //   layout: "/admin"
  // },

 
  {
    key:55,
    path: "/manager/ViewKYCDocuments",
    name: "VIEW KYC DOC",
    icon: "nc-icon ",
    component:ViewKYCDocuments,
    layout: "/admin"
  },

  {key:44,
    path: "/manager/updateduty",
    name: "update duty",
    icon: "nc-icon nc-chart-pie-35",
    component:UpdateDuty,
    layout: "/admin"
  },

  

 
  { key:44,
    path: "/eticket/buyticketinbus/:id",
    name: "Ticket Inside Bus",
    icon: "nc-icon ",
    component:BuyTicketInBus,
    layout: "/admin"
  },


  {  key:55,
    path: "/eticket/PayNow",
    name: "Pay Now",
    icon: "nc-icon ",
    component:PayNow,
    layout: "/admin"
  },

  { key:66,
    path: "/eticket/DisplayTicket",
    name: "disp e-Ticket",
    icon: "nc-icon ",
    component:DisplayTicket,
    layout: "/admin"
  },
  { key:66,
    path: "/eticket/DisplayTickets",
    name: "disp e-Tickets_",
    icon: "nc-icon ",
    component:DisplayTickets,
    layout: "/admin"
  },
  { key:66,
    path: "/eticket/ViewMyTickets",
    name: "disp All e-Ticket",
    icon: "nc-icon ",
    component:ViewMyTickets,
    layout: "/admin"
  },

  { key:7,
    path: "/eticket/ReserveTicket",
    name: "Reserve Ticket",
    icon: "nc-icon ",
    component:ReserveTicket,
    layout: "/admin"
  },


  {
    key:8,
    path: "/epass/dailypass_AC",
    name: "Buy Daily Pass_AC",
    icon: "nc-icon ",
    component:DailyPass_AC,
    layout: "/admin"
  },
   
  {
    key:8,
    path: "/epass/dailypass_Non_AC",
    name: "Buy Daily Pass_Non_AC",
    icon: "nc-icon ",
    component:DailyPass_Non_AC,
    layout: "/admin"
  },
  {
    key:8,
    path: "/epass/MonthlyPass_Non_AC",
    name: "Buy Monthlypass_Non_AC",
    icon: "nc-icon ",
    component:MonthlyPass_Non_AC,
    layout: "/admin"
  },
  {
    key:8,
    path: "/epass/WeeklyPass_Non_AC",
    name: "Buy Weeklypass_Non_AC",
    icon: "nc-icon ",
    component:WeeklyPass_Non_AC,
    layout: "/admin"
  },
   
  { key:9,
    path: "/epass/viewdailypass_AC",
    name: "View Daily Pass AC",
    icon: "nc-icon ",
    component:ViewDailyPass_AC,
    layout: "/admin"
  },


  { key:10,
    path: "/epass/weeklyPass_AC",
    name: "Buy Weekly Pass-AC",
    icon: "nc-icon ",
    component:WeeklyPass_AC,
    layout: "/admin"
  },

  
  {key:11,
    path: "/epass/viewweeklyPass_AC",
    name: "View Weekly Pass-AC",
    icon: "nc-icon ",
    component:ViewWeeklyPass_AC,
    layout: "/admin"
  },

  {key:12,
    path: "/epass/monthlyPass_AC",
    name: "Buy Monthly Pass-AC",
    icon: "nc-icon ",
    component:MonthlyPass_AC,
    layout: "/admin"
  },
  {key:13,
    path: "/epass/ViewMonthlyPass_AC",
    name: "View Monthly Pass-AC",
    icon: "nc-icon ",
    component:ViewMonthlyPass_AC,
    layout: "/admin"
  },

  {key:14,
    path: "/eticket/ViewBuses",
    name: "View Buses",
    icon: "nc-icon ",
    component:ViewBuses,
    layout: "/admin"
  },

  {
    path: "/eticket/trackmyjourney",
    name: "Track",
    icon: "nc-icon ",
    component:TrackMyJourney,
    layout: "/admin"
  
  },



  {
    key:15,
    path: "/epass/components/gMap/Map.js",
    name: "TrackMap",
    icon: "nc-icon ",
    component:TrackMap,
    layout: "/admin",
   href:"https://www.google.com/maps/dir//Kathreguppe,+Banashankari+3rd+Stage,+Banashankari,+Bengaluru,+Karnataka+560085/@12.937674,77.5541221,13z/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x3bae3e2f336729cf:0x51b6d1bd19e6627d!3e3",

  },

  {
    key:16,
    path: "/manager/managerlogin",
    name: "Manager",
    icon: "nc-icon ",
    component:ManagerLogin,
    layout: "/admin"
  },


  {
    key:17,
    path: "/manager/verifymanagerphone",
    name: "V-Manager",
    icon: "nc-icon ",
    component:VerifyManagerPhone,
    layout: "/admin"
  },



  {
    key:19,
    path: "/manager/documentverify",
    name: "Doc's verify",
    icon: "nc-icon ",
    component:DocumentVerify,
    layout: "/admin"
  },
 


  {
    key:20,
    path: "/manager/assignroutestobus",
    name: "Assign",
    icon: "nc-icon ",
    component:AssignRoutesToBus,
    layout: "/admin"
  },
  {
    key:20,
    path: "/manager/addbus",
    name: "ADD-BUS",
    icon: "nc-icon ",
    component:AddBus,
    layout: "/admin"
  },

  {
    key:55,
    path: "/manager/generateqrcode",
    name: "G-QR CODE",
    icon: "nc-icon nc-scan-55",
    component:GenerateQrCode,
    layout: "/admin"
  },


  {
    key:22,
    path: "/manager/viewassignedduty",
    name: "ViewDuty",
    icon: "nc-icon ",
    component:ViewAssignedDuty,
    layout: "/admin"
  },



  {key:23,
    path: "/conductor/ConductorLogin",
    name: "C-Login",
    icon: "nc-icon ",
    component:ConductorLogin,
    layout: "/admin"
  },

  {key:24,
    path: "/conductor/ConductorVerifyPhone",
    name: "C-Verify",
    icon: "nc-icon ",
    component:ConductorVerifyPhone,
    layout: "/admin"
  },


 
  // {
  //   key:26,
  //   path: "/conductor/ScanVerifyTicket",
  //   name: "SCAN-V_Ticket",
  //   icon: "nc-icon ",
  //   component:ScanVerifyTicket,
  //   layout: "/admin"
  // },
  
  {
    path: "/QrCodeScan",
    name: "",
    icon: "nc-icon ",
    component: QrCodeScan,
    layout: "/admin"
  },


  {
    path: "/epass/QrCodeScanForPass",
    name: "Pass Scan",
    icon: "nc-icon ",
    component: QrCodeScanForPass,
    layout: "/admin"
  },
  {
    path: "/eticket/QrCodeScanForTicket",
    name: "Ticket Scan",
    icon: "nc-icon ",
    component: QrCodeScanForTicket,
    layout: "/admin"
  },
  {key:27,
    path: "/conductor/viewscannedverifiedtickets",
    name: "view-V_Ticket",
    icon: "nc-icon ",
    component:ViewVerifiedTickets,
    layout: "/admin"
  },
  {
    key:28,
    path: "/conductor/ViewDuty",
    name: "view Duty",
    icon: "nc-icon ",
    component:ViewDuty,
    layout: "/admin"
  }
,

  {
    key:9,
    path: "/Map/MapIndex",
    name: "g-map",
    icon: "nc-icon ",
    component:MapIndex,
    layout: "/admin"
  }
,
  {
    key:10,
    path: "/conductor/ViewStopWiseFare",
    name: "c-stopwise",
    icon: "nc-icon ",
    component:ViewStopWiseFare,
    layout: "/admin"
  }
,

{
  key:6,
  path: "/SearchMap/SearchMap",
  name: "SearchMap",
  icon: "nc-icon nc-maps-55",
  component:SearchMap,
  layout: "/admin"
}
,

{
  key:110,
  path: "/eticket/ScanAndVerifyTicket",
  name: "ScanVerifTicket",
  icon: "nc-icon nc-maps-55",
  component:ScanAndVerifyTicket,
    layout: "/admin"
},

{
  key:110,
  path: "/epass/ScanVerifyPass_Daily_ePass_AC",
  name: "ScanVerifyPass_Daily_ePass_AC",
  icon: "nc-icon nc-maps-55",
  component:ScanVerifyPass_Daily_ePass_AC,
  layout: "/admin"
},
{
  key:111,
  path: "/epass/ScanVerifyPass_Weekly_ePass_AC",
  name: "ScanVerifyPass_Weekly_ePass_AC",
  icon: "nc-icon nc-maps-55",
  component:ScanVerifyPass_Weekly_ePass_AC,
  layout: "/admin"
},
{
  key:111,
  path: "/epass/ScanVerifyPass_Monthly_ePass_AC",
  name: "ScanVerifyPass_Monthly_ePass_AC",
  icon: "nc-icon nc-maps-55",
  component:ScanVerifyPass_Monthly_ePass_AC,
  layout: "/admin"
},

{
  key:111,
  path: "/epass/ScanVerifyPass_Daily_ePass_Non_AC",
  name: "ScanVerifyPass_Daily_ePass_Non_AC",
  icon: "nc-icon nc-maps-55",
  component:ScanVerifyPass_Daily_ePass_Non_AC,
  layout: "/admin"
},
{
  key:111,
  path: "/epass/ScanVerifyPass_Monthly_ePass_Non_AC",
  name: "ScanVerifyPass_Monthly_ePass_Non_AC",
  icon: "nc-icon nc-maps-55",
  component:ScanVerifyPass_Monthly_ePass_Non_AC,
  layout: "/admin"
},
{
  key:111,
  path: "/epass/ScanVerifyPass_Weekly_ePass_Non_AC",
  name: "ScanVerifyPass_Weekly_ePass_Non_AC",
  icon: "nc-icon nc-maps-55",
  component:ScanVerifyPass_Weekly_ePass_Non_AC,
  layout: "/admin"
},





{ key:103,
  path: "/epass/viewDailypass_Non_AC",
  name: "View Daily Pass Non AC",
  icon: "nc-icon nc-bel-55",
  component:ViewDailyPass_Non_AC,
  layout: "/admin"
},
{ key:103,
  path: "/epass/viewMonthlypass_Non_AC",
  name: "View MonthlyPass Non AC",
  icon: "nc-icon nc-bel-55",
  component:ViewMonthlyPass_Non_AC,
  layout: "/admin"
},{ key:103,
  path: "/epass/viewWeeklypass_Non_AC",
  name: "View WeeklyPass Non AC",
  icon: "nc-icon nc-bel-55",
  component:ViewWeeklyPass_Non_AC,
  layout: "/admin"
}
,
{ key:103,
  path: "/epass/ChooseDailyPass",
  name: "Choose DailyPass",
  icon: "nc-icon nc-bel-55",
  component:ChooseDailyPass,
  layout: "/admin"
},
{ key:103,
  path: "/epass/ChooseMonthlyPass",
  name: "ChooseMonthlyPass",
  icon: "nc-icon nc-bel-55",
  component:ChooseMonthlyPass,
  layout: "/admin"
},
{ key:103,
  path: "/epass/ChooseWeeklyPass",
  name: "ChooseWeeklyPass",
  icon: "nc-icon nc-bel-55",
  component:ChooseWeeklyPass,
  layout: "/admin"
}




















 
 








 
];

export default dashboardRoutes;
