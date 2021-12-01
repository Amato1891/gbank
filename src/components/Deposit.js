import React from 'react';
import Card from './Card';
import { LoginAuth, Transactions } from './Index';

function Deposit() {
    const auth = React.useContext(LoginAuth);
    let history = React.useContext(Transactions);
    const [deposit, setDeposit] = React.useState('');
    const [validTransaction, setValidTransaction] = React.useState(false);
    const [confirmationMessage, setConfirmationMessage] = React.useState('');
    const[warning, setWarning] = React.useState('');

    if(auth.currentUser === !null){
      auth.show = true;
   };

   //Get time
  const currentTime = new Date();
  let time = JSON.stringify(currentTime)
  let timeSlice = time.slice(1,11)
 // console.log(timeSlice)
  
 // Handle user deposit and update balance
    function handleSubmit(e) {
        let newBalance = auth.currentUser.balance + deposit;
        auth.currentUser.balance = newBalance;
        history.depositTransactions = [...history.depositTransactions, deposit];
        setValidTransaction(false);
        setConfirmationMessage(`Deposit of $ ${deposit} was successful!`)
        console.log(deposit)
        e.preventDefault();
    }

    //Get user deposit input and Error handling for invalid transactions
    const handleChange = (event) => {
      setWarning('');
      console.log(typeof(Number(event.target.value)))
      if((event.target.value.length > 0 && !Number(event.target.value)) || Number(event.target.value < 0)){
        setWarning(`Warning! Value entered must be a number and cannot be negative!`)
      }
      if((Number(event.target.value)) > 0) {
        setValidTransaction(true)
      } else {
        return setValidTransaction(false)};
        setDeposit(Number(event.target.value));
        event.preventDefault();
      };

      let list = history.depositTransactions.map((item, index) => {
      return(
        
          <li style={{color:"green"}} key= {index}>
            {`${timeSlice}: $${item}`}
          </li>
        
      )
      })
   //   console.log(list)

    return (<>
    <div className= "container">
      <div className="row">
      <div className="col-sm">
        <Card
          bgcolor="success"
          header="Deposit"
          text ={<span style ={{fontWeight:"bold"}}>{confirmationMessage}</span>}
          body= {auth.show ? (  
            <>
            <form onSubmit={handleSubmit}>
                {`Account Balance for ${auth.currentUser.name} $ ${auth.currentUser.balance}`}
                <div id='warning' style={{color:'yellow'}}>{warning}</div>
            <input type="text" id="deposit" placeholder="Deposit Amount" onChange={handleChange}></input>
            <button type="submit" className="btn btn-dark" disabled= {validTransaction === false} >Deposit</button>
            </form>
            </>
          ):(
            <>
           {`No Active User`}
            </>
          )
        }
  />
  </div>
  <div className="col-sm">

<Card
bgcolor="dark"
header="Recent Deposits"
text ={ <span>
  {list}
</span>}
>
</Card>
  </div>
  </div>
  </div>
      </>
    );
 };

 export default Deposit