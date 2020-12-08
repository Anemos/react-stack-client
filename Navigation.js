import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
import {
 Navbar,
 Nav,
 NavDropdown,
 Form,
 FormControl,
 Button
} from "react-bootstrap";
import Todaynews from './Todaynews';
import Weeknews from './Weeknews';
import Monthnews from './Monthnews';
 
const Navigation = () => {
 const [modalShow, setModalShow] = useState(false);
 
 return (
  <Router>
   <Navbar bg="dark" variant="dark" expand="md">
     <Navbar.Brand href="#home">TOP5 뉴스</Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
       <Nav className="mr-auto">
         <Nav.Link href="/">Today News</Nav.Link>
         <Nav.Link href="/week">Weekly News</Nav.Link>
         <Nav.Link href="/month">Monthly News</Nav.Link>
                      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
       </Nav>
       <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-success">Search</Button>
                                    </Form>
     </Navbar.Collapse>
   </Navbar>
   <br />
                            <Switch>
                                <Route exact path="/">
                                    <Todaynews />
                                </Route>
                                <Route path="/week">
                                    <Weeknews />
                                </Route>
                                <Route path="/month">
                                    <Monthnews />
                                </Route>
                            </Switch>
  </Router>
 );
};
export default Navigation;