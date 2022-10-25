import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component
{
    state = {
        products: [
            {id:1, productName: "Dog Boarding", price: 100, quantity: 20},
            {id:2, productName: "Cat Boarding", price: 100, quantity: 20},
            {id:3, productName: "Dog Grooming", price: 50, quantity: 20},
            {id:4, productName: "Cat Grooming", price: 50, quantity: 20},
            {id:5, productName: "Dog Toy", price: 10, quantity: 20},
            {id:6, productName: "Cat Toy", price: 10, quantity: 20}
        ],
    };

    render() {
        return <div className="container-fluid">
            <h4>Shopping Cart</h4>
            <div className="row">
                {this.state.products.map((prod) => {
                    return <Product key={prod.id} id={prod.id} productName={prod.productName} price={prod.price} />;
                })}
            </div>
            </div>;
     };
    }
