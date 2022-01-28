import React, { Component } from "react";
import ShopProduct from "./ShopProduct";

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allProducts: [],
    };
  }

  handleIncrement = (product, maxValue) => {
    let updatedProducts = [...this.state.allProducts];
    let index = updatedProducts.indexOf(product);
    if (updatedProducts[index].quantity < maxValue) {
      updatedProducts[index].quantity++;
      this.setState({
        allProducts: updatedProducts,
      });
    }
  };

  handleDecrement = (product, minValue) => {
    let updatedProducts = [...this.state.allProducts];
    let index = updatedProducts.indexOf(product);
    if (updatedProducts[index].quantity > minValue) {
      updatedProducts[index].quantity--;
      this.setState({
        allProducts: updatedProducts,
      });
    }
  };

  componentDidMount = async () => {
    //fetch full product list
    const response = await fetch("http://localhost:5000/allProducts", {
      method: "GET",
    });
    const allProds = await response.json();
    this.setState({ allProducts: allProds });
  };

  componentDidCatch(error, info) {
    console.log(error, info);
    localStorage.lastError = `${error}\n${JSON.stringify(info)}`;
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <h4 className="m-1">Shop</h4>

          <div className="row">
            {this.state.allProducts.map((prod) => {
              return (
                <ShopProduct
                  key={prod.id}
                  product={prod}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                >
                  <button className="btn btn-primary">Buy Now</button>
                </ShopProduct>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
