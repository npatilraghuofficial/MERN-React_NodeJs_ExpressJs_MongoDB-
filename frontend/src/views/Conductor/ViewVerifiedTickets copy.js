import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

import { useEffect } from "react";
import axios from "axios";
import { data } from 'jquery';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';


import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const Tickets = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];








function ViewVerifiedTickets() {


  const [show, setShow] = useState(true);


  const [Ticket, setTicket] = useState([]);

  const [TicketId, setTicketId] = useState("");

  const [currentTicket, setCurrentTicket] = useState({});

  const [DutyDetails, setDutyDetails] = useState([]);


  const [expiry, setExpiry] = useState("");

  const [Purchase, setPurchase] = useState("");

  const [Fare, setFare] = useState("");

  const [PhoneNumber, setPhoneNumber] = useState("");
  const [busId,setBusId] = useState(false);


  useEffect(() => {
    const fetchdata = async () => {
      const phoneNumber = JSON.parse(localStorage.getItem("phoneNumberToken"));
      const TicketId = JSON.parse(localStorage.getItem("TicketId"));
      setTicketId(TicketId);
      console.log(DutyDetails);

const busid = JSON.parse(sessionStorage.getItem("BusId"));
setBusId(true);

      const result = fetch("http://localhost:9000/user/ViewVerifiedTickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          phoneNumber: phoneNumber,
          TicketId: TicketId,
          BusId:busid,
        })
      }).then((response) => {
        return response.json();
      }).then((json) => {
        // const passdetails = json.data[0].ePass_details.Daily_ePass_AC;
        // const DutyDetails_ = Object.entries(json.data);
   

        console.log(json.data);
sessionStorage.setItem("DutyData_view", JSON.stringify(json.data));
        console.log(JSON.parse(sessionStorage.getItem("DutyData_view")));

        setDutyDetails(JSON.parse(sessionStorage.getItem("DutyData_view")));

        console.log(DutyDetails);



        // const expiry = json.data[0].ePass_details.Daily_ePass_AC.ExpiryDate;


        const PhoneNumber = JSON.parse(localStorage.getItem("phoneNumberToken"));



        setPhoneNumber(PhoneNumber);



        console.log(Ticket);




      });








      // sessionStorage.setItem("user_pass_id", Pass_id);
      // sessionStorage.setItem("user_pass_type", Daily_ePass_AC);
      // sessionStorage.setItem("Verify_Pass_Type", "ScanVerifyPass_Daily_ePass_AC");



      // sessionStorage.setItem("user_data", JSON.stringify(json.data));
      // console.log(sessionStorage.getItem("user_pass_id"));
      // console.log(sessionStorage.getItem("user_data"));
      // console.log(sessionStorage.getItem("user_pass_type"));





      // setPassDetails(passdetails);


    };
    fetchdata();
  }, []);



  const handleClose = () => setShow(true);
  const handleShow = () => setShow(true);







  return (
    <>
    {busId &&  (<>
      <div class="container">
        <div class="row">  <>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table" className='table-responsive'>
              <TableHead>
                <TableRow>
                  <StyledTableCell>TicketId</StyledTableCell>
                  <StyledTableCell align="right">Source</StyledTableCell>
                  <StyledTableCell align="right">Destination</StyledTableCell>

                  <StyledTableCell align="right">Status</StyledTableCell>
                  <StyledTableCell align="right">Fare</StyledTableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {DutyDetails[0]?.Tickets?.map((t) => (

                  <StyledTableRow key={t.TicketId} >
  <StyledTableCell component="th" scope="row" >
                    {t.TicketId}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row" >
                    {t.src}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row" >
                    {t.destination}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row" >
                    {t.status}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row" >
                    {t.total_fare}
                    </StyledTableCell>

                   
                  
                                     


                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </></div>
      </div>
    </>


      )}
     

{!busId && (<>
  <div class="alert alert-danger" role="alert">
          <h4 class="alert-heading"></h4>
          <p>Please View Assigned Duty.</p>
          
               </div>
               <>
               <button type="button" class="btn btn-primary" onClick={() => {
            window.location.href = "/admin/conductor/viewduty";
          }}>View Assigned Duty</button></>
        </>)}
     
    </>
  );
                
              
                

}


export default ViewVerifiedTickets
