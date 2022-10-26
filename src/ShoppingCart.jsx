import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
    //executes when the component is mounted
    constructor(props){
        super(props);//calling super class constructor to prevent error with this.state

     //initialization of the state
     this.state = {
        products:[
            {id:1, productName: "Dog Boarding", price: 100, quantity: 20},
            {id:2, productName: "Cat Boarding", price: 100, quantity: 20},
            {id:3, productName: "Dog Grooming", price: 50, quantity: 20},
            {id:4, productName: "Cat Grooming", price: 50, quantity: 20},
            {id:5, productName: "Dog Toy", price: 10, quantity: 20},
            {id:6, productName: "Cat Toy", price: 10, quantity: 20}
        ],
    };
    }

    render() {
        return ( 
            <div className="container-fluid">
            <h4>Shopping Cart</h4>

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
     );
    }

    //render ends here

    //executes after constructor and render method (includes life cycle of child components, if any) of current component
    componentDidMount() {
        //fetch data from data source
    }

    componentDidUpdate(prevProps,prevState) {
        console.log("componentDidUpdate",
        prevProps,
        prevState, 
        this.props, 
        this.state
        );

    
    if(prevProps.x != this.props.x) {
        //make http call
    }
    };


    //increment for the + and - buttons
    handleIncrement = (product, maxValue) => {
        //get index of the selected product
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);
        
        if(allProducts[index].quantity<=maxValue){
            allProducts[index].quantity++;
            //update the state of the current component
            this.setState({products:allProducts});
        }
    };

    handleDecrement = (product, minValue) => {
        //get index of the selected product
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);

        if(allProducts[index].quantity>minValue){
            allProducts[index].quantity--;
            //update the state of the current component
            this.setState({products:allProducts});
        }
    };

    //executes when the user clicks on Delete button
    handleDelete=(product) => {
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);

        if(window.confirm("Are you sure you want to delete this item?")) {
            //delete product based on index
        allProducts.splice(index,1);

        //update the state of the current component
        this.setState({products:allProducts});
        }
      };
    }


