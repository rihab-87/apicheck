import React from 'react';
import {Navbar,Nav,FormControl,Button,Form} from 'react-bootstrap';

const Navbaruser = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Facebook</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Profile</Nav.Link>
      <Nav.Link href="#pricing">Notification</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar> 
        </div>
    );
}

export default Navbaruser;
