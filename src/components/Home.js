import React from 'react';
import {
  Link
} from "react-router-dom";
import Card from './Card';

function Home() {
    
    return(
       <Card
        bgcolor="primary"
        txtcolor="white"
        header="Welcome to the Bank of G"
        title={(<div><Link id="login-link" to="/login">Login</Link> to start a transaction.</div>)}
        text={(<span>Dont have an account? <Link id="create-account-link" to="/createaccount"> Create one here.</Link></span>)}
        body={(<img src="https://static.thenounproject.com/png/92146-200.png" className="img-fluid" alt="Bank IMG"/>)}
       />
    )
}

export default Home