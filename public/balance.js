function Balance({balance}){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  
  const [data, setData]     = React.useState('');
  const history = useHistory();

  function goToDeposit() {
    history.push("/deposit/");
  
   };


  return (
    <Card
      bgcolor="info"
      header= {    <h4> Current Balance: ${balance} </h4>}
      status={status}
      body={show ?
        <BalanceForm setShow={setShow} setStatus={setStatus}/> :
        <BalanceMsg setShow={setShow}/>}
    />
  )


}

React.useEffect(() => {
  //fetch all accounts from API
  fetch('/account/all')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    setData(JSON.stringify(data));
  });
}, []);

function BalanceMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>
        Check balance again
    </button>
  </>);
}

function BalanceForm(props){
  const [email, setEmail]   = React.useState('');
  const [balance, setBalance] = React.useState('');  
  const ctx = React.useContext(UserContext);  



  function handle(){
    const user = data.email.find((user) => user.email == email);
    if (!user) {
      props.setStatus('fail!')      
      return;      
    }

    setBalance(user.balance);
    console.log(user);
    props.setStatus('Your balance is: ' + user.balance);      
    props.setShow(false);
  }

  return (<>


    Please select from the following actions:<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    <button type="button" 
      className="btn btn-light" 
      onClick={goToDeposit}>
      Deposit    </button>

  </>);

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
}