import React, { Component } from "react";
import CartProduct from "./CartProduct";

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  handleIncrement = (product, maxValue) => {
    let updatedProducts = [...this.state.products];
    let index = updatedProducts.indexOf(product);
    if (updatedProducts[index].quantity < maxValue) {
      updatedProducts[index].quantity++;
      this.setState({
        products: updatedProducts,
      });
    }
  };

  handleDecrement = (product, minValue) => {
    let updatedProducts = [...this.state.products];
    let index = updatedProducts.indexOf(product);
    if (updatedProducts[index].quantity > minValue) {
      updatedProducts[index].quantity--;
      this.setState({
        products: updatedProducts,
      });
    }
  };

  handleDelete = (product) => {
    let updatedProducts = [...this.state.products];
    let index = updatedProducts.indexOf(product);

    if (window.confirm("Are you sure you want to remove this item?")) {
      updatedProducts.splice(index, 1);
      this.setState({
        products: updatedProducts,
      });
    }
  };

  componentDidMount = async () => {
    //fetch data from data source
    const response = await fetch("http://localhost:5000/products", {
      method: "GET",
    });
    const prods = await response.json();
    this.setState({ products: prods });
  };

  componentDidCatch(error, info) {
    console.log(error, info);
    localStorage.lastError = `${error}\n${JSON.stringify(info)}`;
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <h4 className="m-2">Shopping Cart</h4>

          <div className="row">
            {this.state.products.map((prod) => {
              return (
                <CartProduct
                  key={prod.id}
                  product={prod}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                  onDelete={this.handleDelete}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
