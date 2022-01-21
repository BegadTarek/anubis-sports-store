import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, productName: "Astronaut", price: 250, quantity: 0 },
        { id: 2, productName: "Casette", price: 250, quantity: 0 },
        { id: 3, productName: "Circle Lights", price: 250, quantity: 0 },
        { id: 4, productName: "FDI", price: 250, quantity: 0 },
        { id: 5, productName: "Good Vibes", price: 250, quantity: 0 },
        { id: 6, productName: "Custom Design", price: 300, quantity: 0 },
      ],
    };
  }

  handleIncrement = (product, maxValue) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;
      this.setState({
        products: allProducts,
      });
    }
  };

  handleDecrement = (product, minValue) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;
      this.setState({
        products: allProducts,
      });
    }
  };

  handleDelete = (product) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (window.confirm("Are you sure you want to remove this item?")) {
      allProducts.splice(index, 1);
      this.setState({
        products: allProducts,
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <h4 className="display-4 m-2">Shopping Cart</h4>

          <div className="row">
            {this.state.products.map((prod) => {
              return (
                <Product
                  key={prod.id}
                  product={prod}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                  onDelete={this.handleDelete}
                >
                  <button className="btn btn-primary">Buy Now</button>
                </Product>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
