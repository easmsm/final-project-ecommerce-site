import React from "react";
import { Link } from "react-router-dom";
import Auth from './utils/auth';

//need to add NavBar links
//need to update from bootstrap

const NavBar = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
      };
    
      return (
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
          <Link to="/" className="navbar-brand">
              Pet Shop
            </Link>
    
        <nav className="text-center">
            {Auth.loggedIn() ? (
          <>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link to="/dashboard" className="nav-link active" aria-current="page">Me</Link>
            </li>
            <li className="nav-item">
            <Link to="/product" className="nav-link">Services</Link>
            </li>
          <a href="/"className="nav-link" onClick={logout}>
            Logout
          </a>
          </ul>
          </div>
        </>
      ) : (
        <>  <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/login" className="nav-link active" aria-current="page">Login/Signup</Link>
            </li>
            <li className="nav-item">
              <Link to="/product" className="nav-link">Services</Link>
            </li>
            </ul>
            </div>
              </>
            
          )}
        </nav>
          </div>
        </nav>
      );
}

export default NavBar;