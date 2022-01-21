import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class CustomersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageTitle: "Customers",
      customersCount: 5,
      customers: [
        {
          id: 1,
          name: "Bimbo",
          phone: "159-785",
          address: { city: "San Andres" },
          photo: "https://picsum.photos/id/1010/60",
        },
        {
          id: 2,
          name: "Zomba",
          phone: "254-856",
          address: { city: "Alexandria" },
          photo: "https://picsum.photos/id/1011/60",
        },
        {
          id: 3,
          name: "Farha",
          phone: null,
          address: { city: "Seattle" },
          photo: "https://picsum.photos/id/1012/60",
        },
        {
          id: 4,
          name: "Semeda",
          phone: "425-968",
          address: { city: "Amsterdam" },
          photo: "https://picsum.photos/id/1013/60",
        },
        {
          id: 5,
          name: "Niko",
          phone: null,
          address: { city: "London" },
          photo: "https://picsum.photos/id/1014/60",
        },
      ],
    };
    this.onRefreshClick = this.onRefreshClick.bind(this);
  }

  //Executed by user to refresh customersCount
  onRefreshClick() {
    this.setState({
      customersCount: this.state.customersCount + 1,
    });
  }

  renderPhoneNumber = (phone) =>
    phone ? (
      phone
    ) : (
      <span className="bg-warning p-2 text-center">No Phone</span>
    );

  getCustomerRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>{cust.name}</td>
          <td>
            <img src={cust.photo} alt={cust.name + " Photo"} />
            <div>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => {
                  this.onChangePictureClick(cust, index);
                }}
              >
                Change Picture
              </button>
            </div>
          </td>
          <td>{this.renderPhoneNumber(cust.phone)}</td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };

  onChangePictureClick = (cust, index) => {
    const custArr = this.state.customers;
    custArr[index].photo = "https://picsum.photos/id/104/60";
    this.setState({ customers: custArr });
  };

  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}
          <span className="badge bg-secondary m-2">
            {this.state.customersCount}
          </span>

          <button className="btn btn-info " onClick={this.onRefreshClick}>
            Refresh
            <FontAwesomeIcon icon="sync" />
          </button>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer Name</th>
              <th>Photo</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }
}
