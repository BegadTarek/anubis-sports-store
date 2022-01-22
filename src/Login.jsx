import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { email: "", password: "" };
  }

  onLoginClick = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div className="col-lg-9">
        <h4 className="m-1 p-2 border-bottom">Login</h4>

        <div className="form-group form-row">
          <label className="col-lg-4 m-1">Email:</label>
          <input
            type="text"
            className="form-control m-1"
            value={this.state.email}
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
          />
        </div>
        <div className="form-group form-row">
          <label className="col-lg-4 m-1">Password:</label>
          <input
            type="password"
            className="form-control m-1"
            value={this.state.password}
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          />
        </div>
        <div>
          <button className="btn btn-primary" onClick={this.onLoginClick}>
            Login
          </button>
        </div>
      </div>
    );
  }
}
