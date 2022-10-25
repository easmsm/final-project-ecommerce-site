import React, { Component } from "react";
import NavBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";
import MainContent from "./CustomersList";

export default class App extends Component {
    render() {
        return (<React.Fragment>
                <NavBar />
                <ShoppingCart />
            </React.Fragment>
        );
    }
}