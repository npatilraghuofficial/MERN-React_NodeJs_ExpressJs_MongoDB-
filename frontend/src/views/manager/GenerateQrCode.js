
import './GenerateQrCode.css';
import QRCode from "qrcode";
import { useState,useEffect } from 'react';


import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col
} from "react-bootstrap";

function GenerateQrCode() {

  const [dutyLink, setDutyLink] = useState();

  useEffect(() => {
    console.log(sessionStorage.getItem("dutyLink"));
    setUrl(sessionStorage.getItem("dutyLink"));
  }, []);


  const [url, setUrl] = useState('');
  const [qr, setQr] = useState('');

  let dateNow =new Date().toLocaleDateString();
  let timeNow  =new Date().toLocaleTimeString();
  const [time, setTime]= useState(timeNow)


  function clock() {
    timeNow = new Date().toLocaleTimeString();
    setTime(timeNow);

  }

  setInterval(clock,1000)



  console.log(qr);
  const generateCode =(e)=>{
    e.preventDefault();

    QRCode.toDataURL(url,{
      width: 280,
      margin:2,
      color:{
        darkcolor:'#EEEEEEFF'
      }
    },(err,url)=>{
      if(err){
        return console.log(err);
      }
      setQr(url)
    
    })
  }
  return (
    <Container fluid>
          {dateNow + '_' + time}

    <Row>
  
   
          
     

        <Col md="12">
        <Card className="card-user">
        
          <Card.Body>
           
             
          <form onSubmit={generateCode}>
    <Form.Control
      type='text'
      placeholder='Enter the data'
      value={url}
      onChange={(e)=> setUrl(e.target.value)}
    />
    <br/>

             



    <button type='submit'>Generate QR Code</button>
  </form>

  {qr ? (
    <>
      <div>
          <br/>
              <img src={qr} alt='Image QRCODE'/>
          <br/>
      </div>
      <div className='download'>
      
          <a href={qr} download='codeQR+BUSNO .png'  className='download'>Download </a>
      </div>
    </>
  )
  :''
  }

                
           

                



                
             




               



    
          </Card.Body>
          <hr></hr>
          <div className="button-container mr-auto ml-auto">
         
          
           
          </div>
        </Card>
      </Col>
      
    </Row>
  </Container>
  );
}

export default GenerateQrCode;
