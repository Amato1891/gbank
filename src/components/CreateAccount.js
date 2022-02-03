import React from 'react';
import {
  Link
} from "react-router-dom";
import Card from './Card';
import { UserContext} from '../App';

function CreateAccount(){
    const [show, setShow]         = React.useState(true);
    const [name, setName]         = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError]       = React.useState('');
    const ctx = React.useContext(UserContext);  
  let disable = true;
if(name || email || password)disable=false;
  
// Creates new account and checks for errors
    function handleCreate(){
      if (password.length < 8){
         setError('Password must be atleast 8 characters')
         return};
      if (!name){
        setError('Name cannot be blank')
        return;
      }
      if (!email) {
        setError('Email cannot be blank')
        return;
      }
      if (!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        setError('Email adress is not valid')
        return;
      }
      ctx.users.push({name,email,password,balance:0});
      setError('');
      setShow(false);
      disable = true;
    }    
  // Clears form if user chooses to make another acc
    function clearForm(){
      setName('');
      setEmail('');
      setPassword('');
      setShow(true);
    }
  
    return (
      <Card
        bgcolor="primary"
        header="Create Account"
        status={<h6 id="error-msg">{error}</h6>}
        body={show ? (  
                <>
                Name<br/>
                <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
                Email address<br/>
                <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                Password<br/>
                <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-dark" onClick={handleCreate} disabled={disable}>Create Account</button>
                </>
              ):(
                <>
                <h5>Account created successfully, what would you like to do next?</h5>
                <button type="submit" className="btn btn-dark" onClick={clearForm}>Add another account</button><hr/>
                <Link id="login-link" to="/login"> <button type="submit" className="btn btn-dark" >Login to your account</button></Link>
               
                
                </>
              )}
      />
    )

    
  };

  export default CreateAccount