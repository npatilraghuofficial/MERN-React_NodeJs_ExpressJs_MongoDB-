import React, {useState} from 'react';
import { Button, Modal } from 'react-bootstrap';


function CheckOutTicket() {
  const [show, setShow] = useState(false);
   
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   
  return (
    <div className="container">
    <h1>React Bootstrap Modal Example - ItSolutionStuff.com</h1>
 
    <Button variant="primary" onClick={handleShow}>
      Open Demo Model
    </Button>
 
   

<table class="table table-bordered table-responsive">
<thead>
<tr>
<th scope="col">P.No's</th>
<th scope="col">Type</th>
<th scope="col">Source</th>
<th scope="col">Dest</th>
<th scope="col">Fare</th>

</tr>
</thead>
<tbody>
<tr>
<th scope="row">2</th>

<td>Adult_1</td>
<td>KBS</td>
<td>ATB</td>

<td>30</td>
</tr>
<tr>
<th scope="row"></th>

<td>Adult_2</td>
<td>KBS</td>
<td>ATB</td>
<td>30</td>

</tr>


<tr>
<th scope="row">2</th>
<td>Juniors_1</td>
<td>KBS</td>
<td>ATB</td>
<td>25</td>

</tr>
<tr>
<th scope="row"></th>
<td>Juniors_2</td>
<td>KBS</td>
<td>ATB</td>
<td>25</td>

</tr>



<tr>
<th scope="row">2</th>
<td>Senior_1</td>
<td>KBS</td>
<td>ATB</td>

<td>20</td>
</tr>

<tr>
<th scope="row"></th>
<td>Senior_2</td>
<td>KBS</td>

<td>ATB</td>
<td>20</td>
</tr>

<tr>
<th scope="row">1</th>
<td>DisABLED</td>
<td>KBS</td>
<td>ATB</td>

<td>20</td>
</tr>

<tr>
<th scope="row">Fare</th>
<td colspan="3">Adult Fare= 2*30 = 60  Junior Fare= 2*25 = 50  Senior Fare= 2*20 = 40  PWD Fare= 1*20 = 20 </td>

</tr>

<tr>
<th scope="row">Total Fare</th>
<td colspan="2"><b>170</b></td>
</tr>


</tbody>
</table>


        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save It!
        </Button>
      
  </div>
  );
}

export default CheckOutTicket


    

   
