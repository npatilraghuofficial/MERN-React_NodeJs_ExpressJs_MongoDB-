
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import { NavLink } from 'react-router-dom';

import {

  Row,
  Col,
  Button
} from "react-bootstrap";



import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'popper.js/dist/popper.min.js';
import '@fortawesome/fontawesome-free/js/all.min.js';
import '@fortawesome/fontawesome-free/js/fontawesome.min.js';

class VisibleFilter extends Component {

  componentDidMount() {

    var textfield = document.getElementById(this.props.searchField);
    var table = document.getElementById(this.props.id);

    function searchTable(textfield, container, row, column) {

      var search,
        filter,
        found,
        table,
        rows,
        columns,
        i,
        j;

      search = document.querySelector(textfield);
      filter = search.value.toUpperCase();
      table = document.querySelector(container);
      rows = table.querySelectorAll(row);

      for (i = 0; i < rows.length; i++) {

        columns = rows[i].querySelectorAll(column);

        if (i == 0) {

          columns = table.rows.item(i).cells.length;
          continue;

        }

        for (j = 0; j < columns.length; j++) {

          if (columns[j].innerHTML.toUpperCase().indexOf(filter) > -1) {

            found = true;

          }

        }

        if (found) {

          rows[i].style.display = "";

          found = false;

        } else {

          rows[i].style.display = "none";

        }

      }

    }

    var txt = "#" + this.props.searchField;
    var tdata = "#" + this.props.id;

    textfield.addEventListener("keyup", function () {
      searchTable(txt, tdata, "tr", "td");
    });

  }

  render() {
    return (
      <div>
        <input type="text" id={this.props.searchField} />
        <table id={this.props.id}>

          <tr>
            {this.props.headlines.map((elements) => {
              return <th>{elements.name}</th>
            })}
          </tr>
          {this.props.datas.map((elements) => {
            return <tr>

              <td>{elements.map_json_content}</td>
            </tr>
          })}
        </table>
      </div>
    );
  }

}

VisibleFilter.propTypes = {
  id: PropTypes.string.isRequired,
  searchField: PropTypes.string.isRequired,
  headlines: PropTypes.array.isRequired,
  datas: PropTypes.array.isRequired
}

// #############################################

class DynamicFilter extends Component {

  componentDidMount() {

    var textfield = document.getElementById(this.props.searchField);
    var tableContainer = document.getElementById(this.props.id);

    function searchTable(textfield, container, row, column) {

      var search,
        filter,
        found,
        table,
        rows,
        columns,
        i,
        j;

      search = document.querySelector(textfield);
      filter = search.value.toUpperCase();
      table = document.querySelector(container);
      rows = table.querySelectorAll(row);

      for (i = 0; i < rows.length; i++) {

        columns = rows[i].querySelectorAll(column);

        if (i == 0) {

          columns = table.rows.item(i).cells.length;
          continue;

        }

        for (j = 0; j < columns.length; j++) {

          if (columns[j].innerHTML.toUpperCase().indexOf(filter) > -1) {

            found = true;

          }

        }

        if (found) {

          tableContainer.style.display = "none";
          rows[i].style.display = "";

          found = false;

        } else {

          tableContainer.style.display = "";
          rows[i].style.display = "none";

        }

      }

    }

    var txt = "#" + this.props.searchField;
    var tdata = "#" + this.props.id;

    textfield.addEventListener("keyup", function () {
      searchTable(txt, tdata, "tr", "td");
    });

  }

  render() {
    const hiding = {
      display: "none"
    }
    return (
      <div>
        <input type="text" id={this.props.searchField} />
        <table id={this.props.id} style={hiding}>
          <tr>
            {this.props.headlines.map((elements) => {
              return <th>{elements.name}</th>
            })}
          </tr>
          {this.props.datas.map((elements) => {
            return <tr>
              <td>{elements.origin}</td>
              <td>{elements.desti}</td>
              <td>{elements.email}</td>
              <td>{elements.birthday}</td>
            </tr>
          })}
        </table>
      </div>
    );
  }

}

DynamicFilter.propTypes = {
  id: PropTypes.string.isRequired,
  searchField: PropTypes.string.isRequired,
  headlines: PropTypes.array.isRequired,
  datas: PropTypes.array.isRequired
}

// #############################################

class ModernFilter extends Component {

  componentDidMount() {

    var fieldSearch = "#" + this.props.searchField;
    var tableFilter = "#" + this.props.id + " .row";

    console.log(fieldSearch);
    console.log(tableFilter);

    $(document).ready(function () {

      $(fieldSearch).keyup(function () {

        var filter = $(this).val();
        var count = 0;

        $(tableFilter).each(function () {

          if ($(this).text().search(new RegExp(filter, "i")) < 0) {

            $(this).hide();

          } else {

            $(this).show();

            count++;

          }

        });

      });

    });

  }


  render() {
    

    const handling = {
      textAlign: "left"
    }
    const big = {
      fontWeight: "bold",

    }
    const hiding = {
      display: "none"
    }

    const overflow = {
      overflow: "hidden"
    }
    return (
      <div>
        <label>Search desired Destination To see Buses operating. </label>
        <small>Note:only few bus details are available</small>

        <input type="text" className='form-control' placeholder="where you want to go??" id={this.props.searchField} />

        <div className="container-fluid" style={handling}>
          <div className="row " style={big}>
            {this.props.headlines.map((elements) => {
              return <div className="col"><b>{elements.name}</b></div>
            })}
          </div>




          <Row>
            <Col></Col>
          </Row>

          <div className="container-fluid" id={this.props.id} style={handling}>
            <h4 className="form-control align-center"><center><b>Intermediary stops</b></center></h4>
            {this.props.datas.map((elements) => {
              return <div className="row">

               
                  <div className="form-control col" style={overflow}><b>{elements.id}</b></div>

                  <div className="form-control col" style={overflow}>{elements.origin}</div>
                  <div className=" form-control col" style={overflow}>{elements.destination}</div><br></br>
                  <div className="form-control col" style={overflow}>{elements.route_no}</div>
                  <Button className="btn btn-success col" style={overflow} onClick={()=>{window.location.href=`/admin/eticket/buyticketinbus/${elements.id}`}}> Book-Now</Button>

                  <div className="  container-fluid row" >  {elements.map_json_content.map((stops) => {
                    return <tr className="container-fluid row" style={hiding}><td>{stops.busstop}</td> </tr>
             
              
              })
             }
                </div>





                <div>
                </div>




              </div>
             
            })}
          </div>
        </div>
      </div >

    );
  }

}

ModernFilter.propTypes = {
  id: PropTypes.string.isRequired,
  searchField: PropTypes.string.isRequired,
  headlines: PropTypes.array.isRequired,
  datas: PropTypes.array.isRequired
}

// #############################################

export {
  VisibleFilter,
  DynamicFilter,
  ModernFilter
}
