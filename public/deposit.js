function Deposit({updateBalance, name, balance}){
 // const ctx = React.useContext(UserContext);

const [amount, setAmount] = React.useState(0);

const incrementBalance = () => {
  updateBalance(amount);
  
  alert(`Your deposit of $${amount} has been processed.`)

}

// console.log(ctx.users)


  return (
    <Card
    txtcolor="black"
    header={    <h4> Current Balance: ${balance} </h4>}
  
    title={<p>Hello {name}! Please enter the amount you would like to deposit.</p>}
    text="Select Deposit after you enter your deposit amount."
    body={(
   <>

    <input  value={amount} min="0" onChange={(e) => setAmount(+e.target.value)} className="form-control"/> <br/>
    <button type="submit" disabled={!amount} className="btn btn-primary" onClick={incrementBalance}>Deposit</button>

    </>
    )}

  />    
);  

}