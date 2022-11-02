import React, {useState} from "react";
import Auth from './utils/auth';
//Might need these import in the future
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

  const loggedIn = Auth.loggedIn();
  
    
        return (
           <>
              <h1>Products/Services</h1>
              {productData.map((product) => (
                <div id='myProducts'>
                  <p id='productName'>{product.productName}</p>
                  <span>Description:</span><p>{product.description}</p>
                  <span>Price:</span><p>${product.price}.00</p>
                  <span>Quantity:</span><p>{product.quantity}</p>
                  {loggedIn && (
                  <button>Select Service/Product</button>
                  )}
                </div>
              ))}
          </>
        );
      }

    export default Product;