import React from "react";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Signup from "./Signup";
import SinglePet from './SinglePet';
import ShoppingCart from "./ShoppingCart";
import CustomersList from "./CustomersList";
import Product from "./Product";
import Home from './Home';
import { setContext } from '@apollo/client/link/context';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoMatchPage from "./NoMatchPage";

// establish a new link to the GraphQL server at its /graphql endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// instantiate the Apollo Client instance and create the connection to the API endpoint
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
      return (
        <ApolloProvider client={client}>
        <BrowserRouter>
          <NavBar />
          <div className="container-fluid">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/product" element={<Product />} />
              <Route path="/dashboard">
                <Route path=":username" element={<Dashboard />} />
                <Route path="" element={<Dashboard />} />
              </Route>
              <Route path="/pet/:id" element={<SinglePet />} />
              <Route path="/customers" element={<CustomersList />} />
              <Route path="/cart" element={<ShoppingCart />} />
              <Route path="*" element={<NoMatchPage />} />
            </Routes>
          </div>
        </BrowserRouter>
        </ApolloProvider>
      );
    
  }

  export default App
