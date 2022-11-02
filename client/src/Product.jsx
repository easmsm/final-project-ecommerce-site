import React, {useState} from "react";
// import { useQuery } from '@apollo/client';
// import {QUERY_PRODUCTS} from "./utils/queries";


const Product = () => {
   
    // query to database for products
    // const {loading, data} = useQuery(QUERY_PRODUCTS)
    // console.log('PRODUCTS DATA:', data && data)
    const [productData, setProducts] = useState([
      {id:1, productName: "Dog Boarding", description: "One Night", price: 100, quantity: 20},
      {id:2, productName: "Cat Boarding", description: "One Night", price: 100, quantity: 20},
      {id:3, productName: "Dog Grooming", description: "Hair Trimming", price: 50, quantity: 20},
      {id:4, productName: "Cat Grooming", description: "Hair Trimming", price: 50, quantity: 20},
      {id:5, productName: "Dog Toy", description: "Bone", price: 10, quantity: 20},
      {id:6, productName: "Cat Toy", description: "Scratching Post",  price: 10, quantity: 20}
  ])
  
    
        return (
           <>
              <h1>Products/Services</h1>
              {productData.map((product) => (
                <div id='myProducts'>
                  <p id='productName'>{product.productName}</p>
                  <span>Description:</span><p>{product.description}</p>
                  <span>Price:</span><p>${product.price}.00</p>
                  <span>Quantity:</span><p>{product.quantity}</p>
                  <button>Select Service/Product</button>
                </div>
              ))}
          </>
      
          // <div className="col-lg-6">
          //   <div className="card m-2">
          //     <div className="card-body">
          //       <div className="text-muted">
          //         # {this.state.product.id}
          //         {/* delete button starts */}
          //         <span
          //           className="pull-right hand-icon"
          //           onClick={() => {
          //             this.props.onDelete(this.state.product);
          //           }}
          //         >
          //           <i className="fa fa-times"></i>
          //         </span>
          //         {/* delete button ends */}
          //       </div>
    
          //       <h5 className="pt-2 border-top">
          //         {this.state.product.productName}
          //       </h5>
    
          //       <div>$ {this.state.product.price}</div>
          //     </div>
          //     {/* card body ends here */}
    
          //     <div className="card-footer">
          //       <div className="float-left">
          //         <span className="badge">{this.state.product.quantity}</span>
    
          //         <div className="btn-group">
          //           <button
          //             className="btn btn-outline-success"
          //             onClick={() => {
          //               this.props.onIncrement(this.state.product, 10);
          //             }}
          //           >
          //             +
          //           </button>
    
          //           <button
          //             className="btn btn-outline-success"
          //             onClick={() => {
          //               this.props.onDecrement(this.state.product, 0);
          //             }}
          //           >
          //             -
          //           </button>
          //         </div>
          //       </div>
          //       {/* float-left ends here */}
    
          //       <div className="float-right">{}</div>
          //     </div>
          //     {/* card-footer ends here */}
          //   </div>
          // </div>
        );
      }

    export default Product;