import React, { Component } from "react";

export default class Product extends Component {
    constructor(props){
        super(props);



        this.state={
           product: this.props.product,
        };
    }
    
    render() {
      
    
        return (
          <div className="col-lg-6">
            <div className="card m-2">
              <div className="card-body">
                <div className="text-muted">
                  # {this.state.product.id}
                  {/* delete button starts */}
                  <span
                    className="pull-right hand-icon"
                    onClick={() => {
                      this.props.onDelete(this.state.product);
                    }}
                  >
                    <i className="fa fa-times"></i>
                  </span>
                  {/* delete button ends */}
                </div>
    
                <h5 className="pt-2 border-top">
                  {this.state.product.productName}
                </h5>
    
                <div>$ {this.state.product.price}</div>
              </div>
              {/* card body ends here */}
    
              <div className="card-footer">
                <div className="float-left">
                  <span className="badge">{this.state.product.quantity}</span>
    
                  <div className="btn-group">
                    <button
                      className="btn btn-outline-success"
                      onClick={() => {
                        this.props.onIncrement(this.state.product, 10);
                      }}
                    >
                      +
                    </button>
    
                    <button
                      className="btn btn-outline-success"
                      onClick={() => {
                        this.props.onDecrement(this.state.product, 0);
                      }}
                    >
                      -
                    </button>
                  </div>
                </div>
                {/* float-left ends here */}
    
                <div className="float-right">{this.props.children}</div>
              </div>
              {/* card-footer ends here */}
            </div>
          </div>
        );
      }
    
      componentDidMount() {
      }
    
      componentDidUpdate() {
      }
    
      //Executes when the current instance of current component is being deleted from memory
      componentWillUnmount() {
      }
    }


    // const [productData, setProducts] = useState([
    //     {id:1, productName: "Dog Boarding", price: 100, quantity: 20},
    //     {id:2, productName: "Cat Boarding", price: 100, quantity: 20},
    //     {id:3, productName: "Dog Grooming", price: 50, quantity: 20},
    //     {id:4, productName: "Cat Grooming", price: 50, quantity: 20},
    //     {id:5, productName: "Dog Toy", price: 10, quantity: 20},
    //     {id:6, productName: "Cat Toy", price: 10, quantity: 20}
    // ])


    // <>
             
    //           {productData.map((product) => (
    //             <div id='myProducts'>
    //               <p id='productName'>{product.productName}</p>
    //               <p>{product.description}</p>
    //               <p>{product.price}</p>
    //               <p>{product.quantity}</p>
    //             </div>
    //           ))}
    //       </>