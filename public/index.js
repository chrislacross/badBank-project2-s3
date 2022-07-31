function Spa() {
 /* const [users, setUsers] = React.useState([{name:'Abel',email:'abel@mit.edu',password:'secret',balance:100}])
  const adjustBalance = (amount) => {
    const newUsers = [...users];
    const user = newUsers.find((user) => {
      return user.name === name;
    }) 
    const user = newUsers[newUsers.length - 1]
    user.balance += amount
    setUsers(newUsers)
  };
  */
 const [loggedInUser, setLoggedInUser] = React.useState();
  async function updateBalance(transactionAmount) {
  const response = await fetch(`/account/balance/${loggedInUser.email}/${loggedInUser.password}/${transactionAmount}`)
  const newBalance = await response.text()


  setLoggedInUser({
    ...loggedInUser, 
    balance:+newBalance
  })
 }

  return (
    <HashRouter>
      <NavBar name={loggedInUser?.name} setLoggedInUser={setLoggedInUser} balance={loggedInUser?.balance}/>
      {/* <UserContext.Provider value={{users: users, adjustBalance:adjustBalance}}> */}
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          {!loggedInUser && <><Route path="/CreateAccount/" >
            <CreateAccount setLoggedInUser={setLoggedInUser}/>
            </Route>
          <Route path="/login/" >
            <Login setLoggedInUser={setLoggedInUser}/>
          </Route></>}
          {loggedInUser && <><Route path="/deposit/" >
            <Deposit updateBalance={updateBalance} name={loggedInUser?.name} balance={loggedInUser?.balance}/>
            </Route>
          <Route path="/withdraw/" >
            <Withdraw updateBalance={updateBalance} name={loggedInUser?.name} balance={loggedInUser?.balance}/>
            </Route>
            <Route path="/balance/" >
            <Balance name={loggedInUser?.name} balance={loggedInUser?.balance}/>
          </Route>
            </>}
          {/* <Route path="/alldata/" component={AllData} /> */}
        </div>
      {/* </UserContext.Provider>       */}
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
