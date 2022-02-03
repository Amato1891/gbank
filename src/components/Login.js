import React from 'react';
import Card from './Card';
import { UserContext, LoginAuth, Transactions } from '../App';
import "./style.css"

function Login(){
  const ctx = React.useContext(UserContext);
  const auth = React.useContext(LoginAuth);
  let history = React.useContext(Transactions);
  const [show,setShow] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  let disable = true;
if(email || password) disable=false;

//Check if user entered a matching email and password combo
function handleSubmit(e){
  e.preventDefault();
  setError('');
    for(let i = 0; i < ctx.users.length; i++){
    if(email === ctx.users[i].email && password === ctx.users[i].password) {
    console.log('Success');
    auth.currentUser = ctx.users[i];
    auth.show = true;
    if(show === false)setShow(true);
    if(show === true)setShow(false);
    setEmail('');
    setPassword('');
    return
    };
  };
  console.log('Failed Login');
  setError('Email & Password do not match our records.')
  };

  //Logs current user out
  function handleLogOut(e){
    e.preventDefault();
    history.depositTransactions = [];
    history.withdrawalTransactions = [];
    auth.currentUser = null;
    auth.show = false;
    if(show === false)setShow(true);
    if(show === true)setShow(false);
    console.log("current user", auth.currentUser);
  };

  return(
    <Card
      bgcolor="secondary"
      header="Login"
      text= {auth.show ? (
        <>
        {`Currently Logged In: ${auth.currentUser.name}`}
        </>
      ) : (
        <>
        {"No current User"}<br/>
        {<span style={{color:"red", fontWeight:"bold"}}>{error}</span>}
        </>
      )}
      body={ auth.show ? (
        <>
<form onSubmit={handleSubmit}>
      Enter Email
   <input type="email" id="email" placeholder="Enter Email" onChange={e => setEmail(e.currentTarget.value)}/> <hr/>Password
   <input type="password" id="password" placeholder="Enter password" onChange={e => setPassword(e.currentTarget.value)}/>
   <button type="reset" className="btn btn-dark" onClick={handleLogOut}>Log Out</button>
</form>
        </>
      ) : (
        <>
        <form onSubmit={handleSubmit}>
      Enter Email
   <input type="email" id="email" placeholder="Enter Email" onChange={e => setEmail(e.currentTarget.value)}/> <hr/>Password
   <input type="password" id="password" placeholder="Enter password" onChange={e => setPassword(e.currentTarget.value)}/>
   <button type="submit" className="btn btn-dark" disabled={disable}>Login</button><hr/>
</form>
        </>
      )  
      }
    />
);
};

export default Login