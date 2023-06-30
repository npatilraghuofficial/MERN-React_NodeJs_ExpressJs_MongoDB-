
import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (

      <footer className="footer sticky"  style={{position: "sticky"}} >

        {/* <Container fluid style={{position: "sticky"}}>
          <nav>
            <ul className="footer-menu " style={{position: "sticky"}} >
              <li>
              <a href="dashboard.php"><i class="fas fa-home fa-3x  mx-3 "></i>
                </a>
              </li>
              <li >
              <a href="myorders.php"><i class="fas fa-shopping-bag fa-3x  mx-3 "></i></a>
              </li>
              <li>
              <a href="myorders.php"><i class="fas fa-bell fa-3x  mx-3  " > </i></a>
               
                
              </li>
              <li>
              <a href="myorders.php"><i class="fas fa-shopping-bag fa-3x  mx-3  "></i></a>

                <a href="#pablo" onClick={(e) => e.preventDefault()}>
           
                </a>
              </li>
            </ul>
         
          </nav>

        </Container> */}
        

        {/* <footer>

<style>
  .n1:hover {
    background-color: whitesmoke;
    text-decoration: none;
  }
</style>
<div class="n1">
  <a href="dashboard.php"><i class="fas fa-home"></i>
    <p>Home</p>
  </a>
</div>
<div class="n1">
  <a href="mybookings.php"><i class="fas fa-bars"><sup><span class="badge">
          <font color="red">1</font>
        </span></sup></i>
    <p>Bookings</p>
  </a>
</div>
<div class="n1">
  <a href="myorders.php"><i class="fas fa-shopping-bag"><sup><span class="badge">
          <font color="red">3</font>
        </span></sup></i>
    <p>Orders</p>
  </a>
</div>
<div class="n1">
  <a href="notification.php"><i class="fas fa-bell"><sup><span class="badge">
          <font color="red">9</font>
        </span></sup></i>
    <p>Notifications</p>
  </a>
</div>
</footer> */}


      </footer>
    );
  }
}

export default Footer;
