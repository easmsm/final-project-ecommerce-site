import React, { Component } from "react";
import NavBar from "./NavBar";
// import ShoppingCart from "./ShoppingCart";
import Login from "./Login";

// need to add back in the routes
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
