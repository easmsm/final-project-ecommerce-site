import React, { Component } from "react";
import NavBar from "./NavBar";
// import ShoppingCart from "./ShoppingCart";
import Login from "./Login";

export default class App extends Component {
    render() {
        return (
            <React.Fragment>
            <NavBar />
            <Login />
            </React.Fragment>
        );
    }
}
