import React from "react";
import { Button, Col, Modal, Row } from "reactstrap";
import PropTypes from "prop-types";
import "./GeoRoute.css";
import NavLink from "react-router-dom/NavLink";

// Takes the props: name, street, city, state as STRINGS.  Takes the prop zip as a NUMBER.

{/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAaqxl4Rve6wjojceW0oC6mXRoDjObVNE0&&libraries=places"> */}
    


const google = window.google;

class GeoRoute extends React.Component {
  state = {
    backdrop: true,
    map: "",
    modal: false,
    directionsService:true,
    directionsDisplay: true,
    userPosition: "",
    travelMode: "TRANSIT",
    positionDestination: "",
    zoom: 15,
    showDirections: true,
    markers: []
  };

  containerRef = React.createRef();
  directionsPanelRef = React.createRef();

  mountDiv = div => {
    if (div) {
      this.loadMap();
    }
  };

  reloadMap = () => {
    const map = new google.maps.Map(this.containerRef.current);
    this.setState({ map }, () => {
      this.calculateEndPoint();
    });
  };

  loadMap = () => {
    const { name, street, city, state, zip } = this.props;
    let streetAddress = `${street}, ${city}, ${state}, ${zip}`;
    const label = name;
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: streetAddress }, (results, status) => {
      if (status === "OK") {
        const positionDestination = results[0].geometry.location;
        this.setState({ positionDestination }, () => {
          const myMap = {
            center: this.state.positionDestination,
            zoom: this.state.zoom
          };
          const map = new google.maps.Map(this.containerRef.current, myMap);
          this.setState({ map }, () => {
            this.addMarker(positionDestination, label);
          });
        });

        return;
      }
    });
  };

  addMarker = (location, label) => {
    let marker = new google.maps.Marker({
      position: location,
      map: this.state.map,
      title: label
    });
    const markers = [...this.state.markers, marker];
    this.setState({ markers });
  };

  calculateEndPoint = () => {
    const geocoder = new google.maps.Geocoder();
    const { street, city, state, zip } = this.props;
    let streetAddressEnd = `${street},${city},${state},${zip}`;
    geocoder.geocode({ address: streetAddressEnd }, (results, status) => {
      if (status === "OK") {
        const positionDestination = results[0].geometry.location;
        this.setState({ positionDestination }, () => {
          this.findUserPosition();
        });
      } else {
        console.log(status);
      }
    });
  };

  findUserPosition = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const userPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      this.setState({ userPosition }, () => {
        this.calculateAndDrawRoute();
      });
    });
  };

  calculateAndDrawRoute = () => {
    const map = this.state.map;
    const userPosition = this.state.userPosition;
    const positionDestination = this.state.positionDestination;
    const directionsService = new google.maps.DirectionsService();
    const directionsDisplay = new google.maps.DirectionsRenderer();
    directionsService.route(
      {
        origin: userPosition,
        destination: positionDestination,
        travelMode: this.state.travelMode
      },
      function(response, status) {
        if (status === "OK") {
          directionsDisplay.setDirections(response);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
    directionsDisplay.setMap(map);
    this.setState({ map }, () => {
      directionsDisplay.setPanel(this.directionsPanelRef.current);
    });
  };

  onToggleRoute = () => {
    const modal = this.state.modal;
    this.setState({ modal: !modal });
  };

  onSelectTravelMode = travelMode => {
   
    document.getElementById("directions-panel").innerHTML = "";
    this.setState({ travelMode, map: [] }, () => {
      this.reloadMap();
    });
  };

  onSelectTravelMode2 = travelMode => {
    const { name,street, city, state, zip } = this.props;
    let streetAddressEnd = `${name},${street},${city},${state},${zip}`;
    alert(streetAddressEnd);                
      // <NavLink to="https://www.google.com/maps/dir//Majestic,+Bengaluru,+Karnataka/@12.9542626,77.5514073,13z/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x3bae16052b7ceb8b:0xf9db1b29f78b9f96!3e3"></NavLink>

window.location.href =`https://www.google.com/maps/dir//${streetAddressEnd}/`;


    document.getElementById("directions-panel").innerHTML = "";
    this.setState({ travelMode, map: [] }, () => {
      this.reloadMap();
    });
  };


  onCloseMainModal = () => {
    this.setState({ travelMode: "DRIVING" }, () => {
      this.onToggleRoute();
    });
  };

  onShowDirections = () => {
    this.setState({ showDirections: true }, () => {
      this.findUserPosition();
    });
  };

  onHideDirections = () => {
    document.getElementById("directions-panel").innerHTML = "";
    this.setState({ showDirections: false }, () => {
      this.setState({ map: [], travelMode: "DRIVING" }, () => {
        this.loadMap();
      });
    });
  };

  onClearMap = () => {
    let markers = this.state.markers;
    let lines = this.state.lines;
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    for (let i = 0; i < lines.length; i++) {
      lines[i].setMap(null);
    }
    markers = [];
    lines = [];
    this.setState({ markers, lines });
  };

  render() {
    return (
      <>
        <button className="btnMapAddress" onClick={this.onToggleRoute}>
          <i className="fas fa-map-marked-alt" />
        </button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.onToggleRoute}
          backdrop={this.state.backdrop}
          style={{ width: "1000px", maxWidth: "100vw" }}
        >
          <div className="root" ref={this.mountDiv}>
            <div className="address">
              <Row>
                {" "}
                <Col>
                  {this.state.showDirections && <span> Directions to: </span>}{" "}
                  {this.props.name}
                  {" - "} {this.props.street}
                  {", "}
                  {this.props.city}
                  {", "}
                  {this.props.state}
                  {"  "}
                  {this.props.zip}
                </Col>{" "}
                {!this.state.showDirections && (
                  <Col md="2" xs="2" >
                    <Button
                      outline
                      color="primary"
                      style={{ float: "right" }}
                      onClick={this.onShowDirections}
                    >
                      Directions
                    </Button>
                  </Col>
                )}
              </Row>
            </div>

            <div className="map" ref={this.containerRef} />
            {this.state.showDirections && (
              <>
                <div className="transit-modes">

                <Button
                    outline
                    color="primary"
                    name="TRANSIT"
                    value="TRANSIT"
                    onClick={() => this.onSelectTravelMode("TRANSIT")}
                    active={this.state.travelMode === "TRANSIT"}
                    style={{ width: "60px", marginLeft: "7px" }}
                  >
                    <i className="fa fa-bus" />
                  </Button>


                  {/* // <a href="https://www.google.com/maps/dir//Majestic,+Bengaluru,+Karnataka/@12.9542626,77.5514073,13z/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x3bae16052b7ceb8b:0xf9db1b29f78b9f96!3e3"> linik2</a> */}

                <Button
                    outline
                    color="primary"
                    name="TRANSIT"
                    value="TRANSIT"
                    onClick={() => this.onSelectTravelMode2("TRANSIT")}
                    active={this.state.travelMode === "TRANSIT"}
                    style={{ width: "60px", marginLeft: "7px" }}
                  >
                    <i className="fa fa-map-marker" />
                  </Button>

               
   <Button
                    outline
                    color="primary"
                    name="DRIVING"
                    value="DRIVING"
                    onClick={() => this.onSelectTravelMode("DRIVING")}
                    active={this.state.travelMode === "DRIVING"}
                    style={{ width: "60px", marginLeft: "0px" }}
                  >
                    <i className="fa fa-car" />
                  </Button>
                
                  

                  <Button
                    outline
                    color="primary"
                    name="hideDirections"
                    onClick={() => this.onHideDirections()}
                    style={{ width: "60px", marginRight: "0", float: "right" }}
                  >
                    <i className="fa fa-times" />
                  </Button>

                  
                </div>
                <div
                  className="directions"
                  id="directions-panel"
                  style={{ overflowY: "scroll" }}
                  ref={this.directionsPanelRef}
                />
              </>
            )}

            <div className="close-modal-btn">
              <Button
                color="primary"
                className="btn btn-primary   "
                onClick={this.onCloseMainModal}
                style={{ width: "100%", display: "block" }}
              >
                <i className="fa fa-times-circle mr-2" />
                Close
              </Button>
              <Button
                      outline
                      color="primary"
                      style={{ width: "100%", display: "block" }}
                      onClick={this.onShowDirections}
                    >
                     Get Direction
                    </Button>
            </div>
          </div>
        </Modal>
      </>
    );
  }
}

GeoRoute.propTypes = {
  name: PropTypes.string,
  street: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  zip: PropTypes.string
};

export default GeoRoute;
