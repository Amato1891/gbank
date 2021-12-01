import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css"
import { Route, HashRouter, Switch } from "react-router-dom";
import NavBar from "./Navbar";
import CreateAccount from "./CreateAccount";
import Login from "./Login";
import Balance from "./Balance";
import AllData from "./AllData";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import Home from './Home';
export const UserContext= React.createContext(null);
export const LoginAuth = React.createContext(null);
export const Transactions = React.createContext(null);

export default function Spa() {
  
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
  
  ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
  );

  