import React, {useState} from 'react';
import { Button, Modal } from 'react-bootstrap';
import {NavLink}   from "react-router-dom";


function ViewWeeklyPass() {
  const [show, setShow] = useState(true);
   
  const handleClose = () => setShow(true);
  const handleShow = () => setShow(true);
   
  return (
    <div className="container">
      <h1>My Weekly-Pass <img src={require("assets/img/bus_ticket_blue_small.png")}  class = "img-responsive" alt="..." />
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
<td colspan="2">Pass Number- PASS1 status:Verified <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/verified.png")}
                    ></img>
</td>


<NavLink to="/admin/qrcodescan"><td  colspan="2"> <b> 
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
<td scope="col" colspan="2">User ID:</td>
<td scope="col" colspan="2"> user123 </td>
</tr>






</thead>
<tbody>
<tr>
<th scope="row" colspan="2">Issue Date & Time </th>

<td colspan="3">22/09/2022  10:30 AM</td>
</tr>
<th scope="row" colspan="2">Expiry Date & Time</th>

<td colspan="3">28/09/2022  11:59 PM</td>
<tr></tr>




<tr>
<th scope="row">Fare</th>
<td colspan="4"><li>BasicCharge = 250</li>
<li> Service Charge = 30</li>
<li>Tax = 10</li> <li>others = 10</li> </td>
 <td> </td>

</tr>

<tr>
<th scope="row">Total Fare</th>
<td colspan="2"><b>300 INR </b></td>
</tr>


</tbody>
</table>


          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
           OK
          </Button>
      
      
    </div>
  );
}

export default ViewWeeklyPass


    

   
