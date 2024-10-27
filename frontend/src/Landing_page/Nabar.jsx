import React from "react";
import logo from "../assets/media/images/logo.svg";
import { Link } from "react-router-dom";

function Nabar() {
  return (
    
      <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor: "#fff"}}>
        <div class="container p-2">
          <Link class="navbar-brand" to='/'>
            <img src={logo} alt="logo" style={{width:"25%"}}/>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          
            <form class="d-flex" role="search">
            <ul class="navbar-nav  mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to='/signup'>
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to='/about'>
                  About
                </Link>
              </li>
              <li class="nav-item ">
                <Link class="nav-link active" to='/products'>
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to='/pricing'>
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to='/support'>
                  Support
                </Link>
              </li>
             
              
            </ul>
            </form>
          </div>
        </div>
      </nav>
   
  );
}

export default Nabar;