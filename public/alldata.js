
function AllData(){
  //const ctx = React.useContext(UserContext);
  const [data, setData] = React.useState('');

//console.log(ctx.users[0])
React.useEffect(() => {
  //fetch all accounts from API
  fetch('/account/all')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    setData(JSON.stringify(data));
  });
}, []);

  return (
    <>
    <h5>Data Storage Area</h5>
  {data}
  </>);
}
{JSON.stringify(ctx)}<br/>;
     <CardWide
      txtcolor="black"
      header="Total Users"
      title="All users will be displayed below"
      text="Go to Deposit or Withdrawal pages to modify the balance of the last user on list."
      body={(
        
        <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Balance($)</th>
          </tr>
        </thead>
        <tbody>
        {ctx.users.map((data) => {
                    return (
          <tr>
            <td>{data.name}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>{user.balance}</td>
          </tr>
                    )
        })}
        </tbody>
      </table>
        
    
    )}

  />   
//   </> )}