import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"
import "./App.css";
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap";
import { AppContext } from "./libs/contextLib";
import { useHistory } from "react-router-dom";
import axiosInstance from "./axiosApi";
import { onError } from "./libs/errorLib";


// Row = 12 cols or 100%
/*
We are doing a few things here:

Creating a fixed width container using Bootstrap in div.container.
Adding a Navbar inside the container that fits to its container¡¯s width using the attribute fluid.
Using a couple of Bootstrap spacing utility classes (like mb-# and py-#) to add margin bottom (mb) and padding vertical (py). These use a proportional set of spacer units to give a more harmonious feel to our UI.

The Navbar.Collapse component ensures that on mobile devices the two links will be collapsed.

Unfortunately, when you click on them they refresh your browser 
while redirecting to the link. We need it to route it to the new link 
without refreshing the page since we are building a single page app.

To fix this we need a component that works with React Router and 
React Bootstrap called React Router Bootstrap. 
It can wrap around your Navbar links and use the React Router to route your app 
to the required link without refreshing the browser.

We are doing one other thing here. 
We are grabbing the current path the user is on from the window.location object. 
And we set it as the activeKey of our Nav component. 
This¡¯ll highlight the link when we are on that page.
*/

function App() {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const history = useHistory();
  
  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    axiosInstance.post('/token/verify/', {
                token: localStorage.getItem("access_token"),
    }).then(function(response) {
        console.log(response)
        userHasAuthenticated(true);
    }).catch(function (error) {
        //console.log(error);
        onError(error);
    });

    setIsAuthenticating(false);
  }
  
  function handleLogout() {
    // add sign out login...
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    userHasAuthenticated(false);
    history.push("/login");
  }
  
  return (
   !isAuthenticating && (
    <div className="App container-fluid py-3">
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        <LinkContainer to="/">
          <Navbar.Brand className="font-weight-bold text-muted">
            Scratch
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
            {isAuthenticated ? (
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            ) : (
            <>
              <LinkContainer to="/signup">
                <Nav.Link>Signup</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Routes />
      </AppContext.Provider>
    </div>
   )
  );
}

export default App;
