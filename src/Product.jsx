import React, { Component } from "react";

export default class Product extends Component {
    constructor(props){
        super(props);

        // console.log("Constructor - Product");


        this.state={
           product: this.props.product,
        };
    }
    
    render() {
        
        return (
            <div className="col-lg-6">
                <div className="card m-2">
                    <div className="card-body">
                     <div className="text-muted"># {this.state.product.id}
                     <span className="pull-right hand-con" onClick={() => {
                         this.props.onDelete(this.state.product);
                     }}><i className="fa fa-times"></i></span>
                     </div>

                    <h5 className="pt-2 border-top">{this.state.product.productName}</h5>
                
                 <div>$ {this.state.product.price}</div>
            </div>
        {/* card body ends here */}
        {/* this adds the button child component from shoppingcart.jsx to the card */}
        {/* add/remove number of purchase items */}

            <div className="card-footer">
                <div className="float-left">
                <span className="badge">{this.state.product.quantity}</span>

                <div className="btn-group">
                    <button
                    className="btn btn-outline-success"
                    onClick={() => {this.props.onIncrement(this.state.product, 20);}}>+</button>

                    <button 
                    className="btn btn-outline-success"
                    onClick={() => {this.props.onDecrement(this.state.product, 0);}}>-</button>
                </div>
            </div>
        {/* float left ends here */}

                <div className="float-right">{this.props.children}</div>
                </div>
        {/* card footer ends here */}
        </div>
    </div>
    );
   }

   componentDidMount() {
    //    console.log("componentDidMount - Product")
   }

   componentDidUpdate() {
        // console.log("componentDidUpdate - Product")
    }

   //executes when the current instance of current component is being deleted from memory
   componentWillUnmount() {
    //    console.log("componentWillUnmount - Product")
   }
  }