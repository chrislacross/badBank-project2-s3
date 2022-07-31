function Withdraw({updateBalance, name, balance}){
  //const ctx = React.useContext(UserContext);
  //const user = ctx.users[ctx.users.length-1];

const [amount, setAmount] = React.useState(0);

const withdrawBalance = () => {
  //if (ctx.withdrawBalance(amount) >0) return;
  if(balance < amount) {
    alert(`You do not have sufficient funds to withdraw $${amount}.`);
    return
  }
  //ctx.adjustBalance(0-amount)
  updateBalance(-amount)
  alert(`Your withdrawal of $${amount} has been processed.`)

  }

//console.log(ctx.users)
  const handleChange = (e) => setAmount(+e.target.value)

  /*  var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
    greet = 'Good Morning';
else if (hrs >= 12 && hrs <= 17)
    greet = 'Good Afternoon';
else if (hrs >= 17 && hrs <= 24)
    greet = 'Good Evening';

document.getElementById('lblGreetings').innerHTML =
    '<b>' + greet + '</b> and welcome to Encodedna.com!';
*/

  return (


    <Card
    txtcolor="black"
    header= {    <h4> Current Balance: ${balance} </h4>}
    title={<p>Hello {name}! Please enter the amount you would like to withdraw.</p>}
    text="Select Withdraw after you enter your withdrawal amount."
    body={(
   <>

    <input  value={amount} onChange={handleChange} className="form-control" /> <br/>
    <button type="submit" disabled={!amount} className="btn btn-primary" onClick={withdrawBalance}>Withdraw</button>

  </>
    )}

  />    
);  
    }

    //ctx.users[ctx.users.length-1].balance