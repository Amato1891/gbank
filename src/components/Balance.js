import React from 'react';
import Card from './Card';
import { LoginAuth } from './Index';
import "./style.css"

function Balance(){
    const auth = React.useContext(LoginAuth);
   
  // console.log(auth.currentUser)

   if(auth.currentUser === !null){
    auth.show = true;
 };
    
    return(
      <Card
        bgcolor="info"
        header= {auth.show ? (
          <>
          {`Account Balance For: ${auth.currentUser.name}`}
          </>
        ) : (
          <>
          {"Balance"}
          </>
        )}
        body={auth.show ? (
          <>
           {`Current Balance: ${auth.currentUser.balance}`}
          </>
        ) : (
          <>
          {`No Active User`}
          </>
        )}
  />
  )
  };

  export default Balance