import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
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

  componentDidMount = async () => {
    //fetch data from data source
    const response = await fetch("http://localhost:5000/products", {
      method: "GET",
    });
    const prods = await response.json();
    this.setState({ products: prods });
  };

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  componentDidCatch(error, info) {
    console.log(error, info);
    localStorage.lastError = `${error}\n${JSON.stringify(info)}`;
  }

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
