import React from "react";
import styles from "./AddressList.module.css";
import GeoRoute from "./GeoRoute";

class AddressList extends React.Component {
  state = {
    addresses: [
      {
        name: "Bommasandra",
        street: "bommasandra",
        city: "Bangalore",
        state: "karnataka",

      },
      {
        name: "PES UNIVERSITY",
        street: "DWARAKA NAGAR",
        city: "Bangalore",
        state: "Karnataka",

      },
      {
        name: "Majestic",
        street: "Bus stand",
        city: "Bangalore",
        state: "Karnataka",

      },
      {
        name: "Hebbala",
        street: "Bus stand",
        city: "Bangalore",
        state: "Karnataka",

      },



    ]
  };

  render() {
    const addresses = this.state.addresses;
    console.log(localStorage.getItem("PurchasedTickets"));
    const journey = JSON.parse(localStorage.getItem("PurchasedTickets"));

    const name_ = JSON.stringify(journey.destination);
    const newName = name_.split(',');
    console.log(newName[0]);
    console.log(newName[1]);
    console.log(newName[2]);
    console.log(name_);
    const new__ = newName[0];
    sessionStorage.setItem("journey_dest", new__);


    console.log(journey);

    const newAddress = {
      name: new__,
      street: (newName[1]),
      city: "Bangalore",
      state: "Karnataka",


    }
    console.log(newAddress);
    const newAddresses = JSON.parse(sessionStorage.getItem("AllTickets"));
    console.log(newAddresses);
    const newAddressList = newAddresses.map((t) => {
      const s = t.src;
      const source = s.split(",");
      const d = t.destination;;
      const destination = d.split(",");

      const newAddress_ = {
        name: destination[0],
        street: destination[1],
        city: "Bangalore",
        state: "Karnataka",

      }
      this.state.addresses.unshift(newAddress_);
      console.log(this.state.addresses);

    });







    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Your Detination</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>

            {addresses.map((address, i) => (
              <tr className={styles.mytr} key={i}>
                <td> {address.name}</td>
                <td>
                  {address.street} {address.city}
                  {", "}
                  {address.state}
                  {"  "} {address.zip}
                  <GeoRoute
                    name={address.name}
                    street={address.street}
                    city={address.city}
                    state={address.state}
                    zip={address.zip}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default AddressList;
