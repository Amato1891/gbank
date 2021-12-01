import React from 'react';
import Card from './Card';
import { UserContext } from './Index';
import "./style.css"


function AllData() {
    const ctx = React.useContext(UserContext);
    return(
        <>
        <Card 
        bgcolor="dark"
        header= {ctx.users.map((user, i) => (
          <li key={i}>
              <div>
              Name: {user.name}<br/>
              Email: {user.email}<br/>
              Password: {user.password}<br/>
              Balance: {user.balance}<br/>
              </div>
         </li>
          ))}
         
        >
         </Card>
        </>
      );
    }
    export default AllData
    