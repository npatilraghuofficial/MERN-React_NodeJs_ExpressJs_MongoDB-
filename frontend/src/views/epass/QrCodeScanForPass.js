import React, { useState } from "react";
import {
  Container,
  Card,
  CardContent,
  makeStyles,
  Grid,
} from "@material-ui/core"; // to import material UI
import { QrReader } from "react-qr-reader";
import {NavLink ,useHistory }   from "react-router-dom";
import { useEffect } from 'react';


import axios from "axios";





import {
  Badge,
  Button,
  Form,
  Navbar,
  Nav,
  Row,
  Col
} from "react-bootstrap";




function QrCodeScanForPass() {
    const [data, setData] = useState("");
    const history = useHistory();
    // const [selfie, setSelfie] = useState("");

    const getBusData=async(url)=>{
      console.log(url);
      const res=await axios.get(url);
      console.log(sessionStorage.getItem("Verify_Pass_Type"));
      const verifylink = sessionStorage.getItem("Verify_Pass_Type");
     
      history.push("/admin/epass/"+verifylink);
    }

    const classes = useStyles();
  useEffect(()=>{
    const verifylink = sessionStorage.getItem("Verify_Pass_Type");

  },[])

    return (
      <Container className={classes.container}>
        <Card>
          <h2 className={classes.title}>Scan Qr Code</h2>
          <CardContent>
            <Grid container spacing={1}>
              <br></br>
              <br></br>
              <Grid item xl={6} lg={8} md={6} sm={12} xs={12}>
                <QrReader
                  delay={300}
                  style={{ width: "100%" }}

                  constraints={{
                    facingMode: "user" //use this to set up for front cam

                    // facingMode: { exact: selfie ? "user" : "environment"}
                  }}
                  onResult={(result, error) => {
                    if (!!result) {
                      getBusData(result);
                    }
  
                    if (!!error) {
                      console.info(error);
                    }
                  }}
                />
                <h3>Scanned Code:</h3>
                <a>{data}</a>
            

               <hr>
               </hr>
                       
                        



              </Grid>
            </Grid>
            <NavLink to="/admin/eticket/buyticketinbus">  
              <Button class="btn-btn-primary" >Next</Button>

              </NavLink>

          </CardContent>
        </Card>
      </Container>
    );
  }
  
  const useStyles = makeStyles((theme) => ({
    container: {
      marginTop: 1,
    },
    title: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "green",
      color: "#fff",
      padding: 5,
    },
    btn: {
      marginTop: 10,
      marginBottom: 20,
    },
  }));
export default QrCodeScanForPass
