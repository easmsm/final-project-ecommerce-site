import React, { Component } from "react";
import NavBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";

export default class App extends Component {
    render() {
        return (<React.Fragment>
                <NavBar />
                <ShoppingCart />
            </React.Fragment>
        );
    }
}

// trying to solve error with components not populating
// export default App;