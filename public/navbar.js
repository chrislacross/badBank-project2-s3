function NavBar({ name, setLoggedInUser, balance }) {
  const history = useHistory();

  function logout() {
    history.push("/");
    setLoggedInUser(undefined);
    alert("You are now logged out.");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          BadBank
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav nav-pills nav-fill mr-auto">
            {!name && (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="#/CreateAccount/">
                    Create Account
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#/login/">
                    Login
                  </a>
                </li>
              </>
            )}
            {name && (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="#/deposit/">
                    Deposit
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#/withdraw/">
                    Withdraw
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="#/balance/">
                    Balance
                  </a>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link" onClick={logout}>
                  Logout
                  </a>
                </li>

                {/* <li className="nav-item" >
              <a className="nav-link" onClick={logout}>
                Logout
              </a>
            </li> */}
              </>
            )}
            {/* <li className="nav-item">
              <a className="nav-link" href="#/alldata/">
                AllData
              </a>
            </li> */}
          </ul>
          {name && (
            <nav class="navbar navbar-expand-lg bg-light">
              <div class="container-fluid">
                <span class="navbar-text">
                  Hello {name}! Your Account Balance is ${balance}.{" "}
                </span>
              </div>
            </nav>
          )}
        </div>
      </nav>
    </>
  );
}
