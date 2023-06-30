import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { NavLink } from "react-router-dom";
import { Button } from 'react-bootstrap';


export default function ChooseDailyPass() {
  return (
    <>
    
   
    
   
<br></br>
<NavLink to="/admin/epass/dailypass_AC">
<Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          height="60"
          title=""
        />
        <img
                alt="..."
              className="card-user image-responsive img-responsive" height="210px"
              src={require("assets/img/bus_ticket_green.png")}
              ></img>
       
         
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          
             Buy AC-Bus Pass<sup><span class="badge badge-pill badge-success sm">New</span></sup>
    <Typography gutterBottom variant="h5" component="div">
        <hr></hr>
    <NavLink to="/admin/epass/viewDailyPass_AC">
                <Button
                  defaultValue="view"
                  placeholder="buy"
                  type="button"
                  className="btn btn-outline-success btn-lg form- control d-grid gap-2 md-6"
                >View Pass

                </Button>
                </NavLink>

       </Typography>
          </Typography>
        
        </CardContent>
      </CardActionArea>
      <CardActions>
        
      </CardActions>
     
    </Card>
    </NavLink> 
    <br></br>
<NavLink to="/admin/epass/dailypass_Non_AC">
<Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          height="60"
          title=""
        />
        <img
                alt="..."
              className="card-user image-responsive img-responsive" height="210px"
              src={require("assets/img/bus_ticket_green.png")}
              ></img>
       
         
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          
             Buy Non AC-Bus Pass<sup><span class="badge badge-pill badge-success sm">New</span></sup>

    <Typography gutterBottom variant="h5" component="div">
        <hr></hr>
    <NavLink to="/admin/epass/viewDailyPass_Non_AC">
                <Button
                  defaultValue="view"
                  placeholder="buy"
                  type="button"
                  className="btn btn-outline-success btn-lg form- control d-grid gap-2 md-6"
                >View Pass

                </Button>
                </NavLink>

       </Typography>
          </Typography>
        
        </CardContent>
      </CardActionArea>
      <CardActions>
        
      </CardActions>
     
    </Card>
    </NavLink> 


    </>
  );
}