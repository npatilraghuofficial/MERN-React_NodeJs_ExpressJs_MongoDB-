
import React, { Component } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { useEffect } from "react";

import { Nav } from "react-bootstrap";

import logo from "assets/img/reactlogo.png";
import { useState } from "react";

function Sidebar({ color, image, routes }) {
  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };

  useEffect(() => {
    const role = localStorage.getItem("role");
     if (role === "conductor") {
    setConductor(true);
  } else if (role === "user") {
    setUser(true);
  } else if (role === "manager") {
  
    setManager(true);
  }
  

  }, []);

  const [conductor, setConductor] = useState(false);
  const [user, setUser] = useState(false);
  const [manager, setManager] = useState(false);


 


  return (
    <>
     {user && (<>
        <div className="sidebar" data-image={image} data-color={color}>
          <div
            className="sidebar-background"
            style={{
              backgroundImage: "url(" + image + ")"
            }}
          />
          <div className="sidebar-wrapper">
            <div className="logo d-flex align-items-center justify-content-start">
              <a
                className="simple-text logo-mini mx-1"
              >
                <div className="logo-img">
                  {/* <img src={require("assets/img/logo_2.png")} alt="..." /> */}
                </div>
              </a>
              <a className="simple-text" href="#">
                e-Ticket App
              </a>
            </div>
            <Nav>
              {routes.map((prop, key,) => {
                if (!prop.redirect)
                  if (prop.key <= 3)
                    return (
                      <li
                        className={
                          prop.upgrade
                            ? "active active-pro"
                            : activeRoute(prop.layout + prop.path)
                        }
                        key={key}
                      >
                        <NavLink
                          to={prop.layout + prop.path}
                          className="nav-link"
                          activeClassName="active"
                        >
                          <i className={prop.icon} />
                          <p>{prop.name}</p>
                        </NavLink>
                      </li>
                    );
                return null;
              })}
            </Nav>

          </div>
        </div>
      </>)}

      {conductor && (<>
        <div className="sidebar" data-image={image} data-color={color}>
          <div
            className="sidebar-background"
            style={{
              backgroundImage: "url(" + image + ")"
            }}
          />
          <div className="sidebar-wrapper">
            <div className="logo d-flex align-items-center justify-content-start">
              <a
                className="simple-text logo-mini mx-1"
              >
                <div className="logo-img">
                  {/* <img src={require("assets/img/logo_2.png")} alt="..." /> */}
                </div>
              </a>
              <a className="simple-text" href="#">
                e-Ticket App
              </a>
            </div>
            <Nav>
              {routes.map((prop, key,) => {
                if (!prop.redirect)
                  if (prop.key ==5)
                    return (
                      <li
                        className={
                          prop.upgrade
                            ? "active active-pro"
                            : activeRoute(prop.layout + prop.path)
                        }
                        key={key}
                      >
                        <NavLink
                          to={prop.layout + prop.path}
                          className="nav-link"
                          activeClassName="active"
                        >
                          <i className={prop.icon} />
                          <p>{prop.name}</p>
                        </NavLink>
                      </li>
                    );
                return null;
              })}
            </Nav>

          </div>
        </div>
      </>)}

     

      {manager && (<>
        <div className="sidebar" data-image={image} data-color={color}>
          <div
            className="sidebar-background"
            style={{
              backgroundImage: "url(" + image + ")"
            }}
          />
          <div className="sidebar-wrapper">
            <div className="logo d-flex align-items-center justify-content-start">
              <a
                className="simple-text logo-mini mx-1"
              >
                <div className="logo-img">
                  {/* <img src={require("assets/img/logo_2.png")} alt="..." /> */}
                </div>
              </a>
              <a className="simple-text" href="#">
                e-Ticket App
              </a>
            </div>
            <Nav>
              {routes.map((prop, key,) => {
                if (!prop.redirect)
                  if (prop.key == 4)
                    return (
                      <li
                        className={
                          prop.upgrade
                            ? "active active-pro"
                            : activeRoute(prop.layout + prop.path)
                        }
                        key={key}
                      >
                        <NavLink
                          to={prop.layout + prop.path}
                          className="nav-link"
                          activeClassName="active"
                        >
                          <i className={prop.icon} />
                          <p>{prop.name}</p>
                        </NavLink>
                      </li>
                    );
                return null;
              })}
            </Nav>
          </div>
        </div>
      </>)}

      



    </>
  );
}

export default Sidebar;
