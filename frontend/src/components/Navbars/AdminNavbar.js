
import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Container, Nav, Dropdown, Button } from "react-bootstrap";
import { BrowserRouter  as Router,Routes,Route}   from "react-router-dom";
import {  NavLink } from "react-router-dom";


import routes from "routes.js";

function Header() {
  const location = useLocation();
  const mobileSidebarToggle = (e) => {
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open"); //THIS IS FOR LEFT nav-open
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  };

  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        console.log(routes[i].name);
        return routes[i].name;
      }
    }
    return "Brand";
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">

        {/* <Button
            variant="dark"
            className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2"
             >            
            <i className="fas fa-arrow-left lg"></i>
            </Button> */}

            
          <Navbar.Brand
            href="#home"
            onClick={(e) => e.preventDefault()}
            className="mr-2"
          >
            {getBrandText()}
          </Navbar.Brand>
          <Router></Router>

          <div className="container-fluid display-inner">
          <i class="fas fa-search fa-1x  mx-2 " > </i>
          <NavLink to="/admin/notifications"  > <i class="fas fa-bell fa-1.5" ><sup><span className="badge" ></span>3</sup> </i></NavLink>
                {/* <li className="current"><Link to="/register"><div>Register</div></Link></li> */}

                


 {/* <NavLink to="/admin/user"  ><i class="fas fa-user fa-1 x mx-2" > </i> </NavLink> */}

 
          </div>
         
        
        </div>
        <Button
            variant="dark"
            className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2 mx-2"
            onClick={mobileSidebarToggle}
            // onClick={mobileSidebarToggle} this is triggering fancy side bar
          >
            {/* <i className="fas fa-ellipsis-v"></i> */}
            <i className="fas fa-ellipsis-v"></i>
            </Button>

        
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" className="" onClick={mobileSidebarToggle}
 >  
        {/* onClick={mobileSidebarToggle} replace above to use 
          {/* <span className="navbar-toggler-bar burger-lines"></span> */}
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>

          <span className="navbar-toggler-bar burger-lines"></span>
      
      </Container>
    </Navbar>
  );
}

export default Header;
