import React from 'react';
import Card from './Card';
import { LoginAuth, Transactions } from './Index';

function Withdraw() {
    const auth = React.useContext(LoginAuth);
    let history = React.useContext(Transactions);
    const [withdraw, setWithdraw] = React.useState('');
    const [validTransaction, setValidTransaction] = React.useState(false);
    const[warning, setWarning] = React.useState('');
    const [confirmationMessage, setConfirmationMessage] = React.useState('');

    // Get time
    const currentTime = new Date();
  let time = JSON.stringify(currentTime)
  let timeSlice = time.slice(1,11)
 // console.log(timeSlice)

    //Handle user withdrawal and update balance
    function handleSubmit(e) {
        let newBalance = auth.currentUser.balance - withdraw;
        auth.currentUser.balance = newBalance;
        history.withdrawalTransactions = [...history.withdrawalTransactions, withdraw]; 
        setConfirmationMessage(`Withdrawal of $ ${withdraw} was successful!`)
        setValidTransaction(false);
        e.preventDefault();
    }

    //Get user Withdrawal input and Error handling for invalid transactions
    const handleChange = (event) => {
    //  console.log('handle withdraw amount', event.target.value)
      setWarning('');
      if(event.target.value.length > 0 && !Number(event.target.value)){
        setWarning(`Warning! Value entered must be a number!`)
      };
      if((Number(event.target.value)) > 0) {
        setValidTransaction(true)
      } else {
        return setValidTransaction(false)};
        if(Number(event.target.value) > auth.currentUser.balance) {
          setValidTransaction(false);
          let diff = auth.currentUser.balance - Number(event.target.value);
          setWarning(`Warning! You're attempting to withdraw $${Math.abs(diff)} more than whats available in your account!`)
      }
        setWithdraw(Number(event.target.value));
        event.preventDefault();
      };

      let list = history.withdrawalTransactions.map((item, index) => {
        return(
            <li style={{color:"red"}} key= {index}>
              {`${timeSlice}: $${item}`}
            </li>
        )
        })
       // console.log(list)

    return (<>

      <div className= "container">
      <div className="row">
      <div className="col-sm">

        <Card
          bgcolor="danger"
          header="Withdraw"
          text ={<span style ={{fontWeight:"bold"}}>{confirmationMessage}</span>}
          body= {auth.show ? (  
            <>
            <form onSubmit={handleSubmit}>
                Account Balance for {auth.currentUser.name}${auth.currentUser.balance}
                <div id='warning' style={{color:'yellow'}}>{warning}</div>
            <input type="text" id="withdraw" placeholder="Withdraw Amount" onChange={handleChange}></input>
            <button type="submit" className="btn btn-dark" disabled= {validTransaction === false}>Withdraw</button>
      
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
header="Recent Withdrawals"
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

 export default Withdraw