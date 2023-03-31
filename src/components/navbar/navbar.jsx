import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';

function Navibar() {
    const currentUrl = window.location.href;
    const domainName = new URL(currentUrl).pathname;
    const [username, setUsername]= useState('');

    useEffect(() => {
        Axios.get('http://localhost:8080/users/user', {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then((response) => {
            console.log(response)
            setUsername(response.data);
          });
          
      }, []); 
      
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">ABC shopping center</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
       
        <Nav className="me-auto">
        
          
        </Nav>


        <Nav>
          <Nav.Link active={domainName=== "/"?"true":""}  href='/'>Home</Nav.Link>
          
          
          
        </Nav>
        <p style={{color:"white" , margin:"1%"}}>{username}</p>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Navibar;