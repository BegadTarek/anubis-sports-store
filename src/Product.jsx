import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product,
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="col-lg-3">
          <div className="card m-3">
            <div className="card-body">
              <div className="text-muted">
                #{this.state.product.id}
                <span
                  className="float-end hand-icon"
                  onClick={() => {
                    this.props.onDelete(this.state.product);
                  }}
                >
                  <FontAwesomeIcon icon="times"></FontAwesomeIcon>
                </span>
              </div>
              <h5 className="pt-2 border-top">
                {this.state.product.productName}
              </h5>
              <span>{this.state.product.price} LE</span>
            </div>
            <div className="card-footer">
              <div className="float-start">
                <span className="badge bg-secondary m-1">
                  {this.state.product.quantity}
                </span>
                <div className="btn-group">
                  <button
                    className="btn btn-outline-success"
                    onClick={() => {
                      this.props.onIncrement(this.state.product, 10);
                    }}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-outline-success"
                    onClick={() => {
                      this.props.onDecrement(this.state.product, 0);
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="float-end">{this.props.children}</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
