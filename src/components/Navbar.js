import React from 'react';
import "./style.css"

function NavBar() {

    return(<>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#/"><img src="https://cdn-icons-png.flaticon.com/512/60/60817.png" alt="Home img"></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" id="tooltip" aria-current="page" href="#/CreateAccount/">Create Account
          <span id ="tooltiptext">Create Account</span></a>
        </li>
        <li className='nav-item' >
          <a className="nav-link" id="tooltip" href="#/login/">Log In<span id ="tooltiptext">Log into your account here.</span></a>
        </li>
        <li className="nav-item" >
          <a className="nav-link" id="tooltip" href="#/deposit/">Deposit<span id ="tooltiptext">Make a deposit into your account</span></a>
        </li>
        <li className="nav-item"  >
          <a className="nav-link" id="tooltip" href="#/withdraw/">Withdraw<span id ="tooltiptext">Withdraw funds from your account</span></a>
        </li>
        <li className="nav-item" >
          <a className="nav-link" id="tooltip" href="#/balance/">Balance<span id ="tooltiptext">Check your account balance</span></a>
        </li>
           <li className="nav-item"  >
          <a className="nav-link" id="tooltip" href="#/alldata/">All Data<span id ="tooltiptext">See all account data</span></a>
        </li>
      </ul>
    </div>
  </div>
</nav>          
  </> );
}

export default NavBar