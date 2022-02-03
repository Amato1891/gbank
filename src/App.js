import 'bootstrap/dist/css/bootstrap.css';
import './components/style.css'
import React from 'react';
import "./components/style.css"
import { Route, HashRouter, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";
import Balance from "./components/Balance";
import AllData from "./components/AllData";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import Home from './components/Home';
export const UserContext= React.createContext(null);
export const LoginAuth = React.createContext(null);
export const Transactions = React.createContext(null);

function Spa() {
  
    return (
      <HashRouter>
        <LoginAuth.Provider value = {{currentUser: null, show: false}}>
          <Transactions.Provider value = {{depositTransactions:[], withdrawalTransactions:[]}}>
        <UserContext.Provider
         value={
           {users:
           [
             {name:'Jim', email:'amato1891@yahoo.com',password:'secret',balance:0}, {name:'John', email:'john@yahoo.com',password:'secret',balance:0}]}}> 
        
        <NavBar/> 
        <Switch>
        <Route exact path="/"><Home/></Route>
                <Route path="/login"><Login/></Route>
                <Route path="/CreateAccount"><CreateAccount/></Route>
                <Route path="/Balance"><Balance/></Route>
                <Route path="/AllData"><AllData/></Route>
                <Route path="/Deposit"><Deposit/></Route>
                <Route path="/Withdraw"> <Withdraw/></Route>
        </Switch>
        </UserContext.Provider> 
        </Transactions.Provider>
        </LoginAuth.Provider>
      </HashRouter>
    );
  }

export default Spa;