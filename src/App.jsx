import React, { Component } from "react";
import NavBar from "./NavBar";
import CustomersList from "./CustomersList";
import ShoppingCart from "./ShoppingCart";
import Login from "./Login";
import Dashboard from "./Dashboard";
import NoMatchPage from "./NoMatchPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/customers" element={<CustomersList />} />
            <Route path="*" element={<NoMatchPage />} />
          </Routes>
        </Router>
      </React.Fragment>
    );
  }
}
