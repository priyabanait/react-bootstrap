import React from 'react'
import { Navbar,Container } from 'react-bootstrap';
export default function Nav(props) {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#HOME">HOME</Navbar.Brand>
          <Navbar.Brand href="#STORE">STORE</Navbar.Brand>
          <Navbar.Brand href="#ABOUT">ABOUT</Navbar.Brand>
          <div className="cart" onClick={()=>props.handleCart(false)}>
                
                <span>
                    Cart 
                </span>
                <span> 0</span>
            </div>
        
          </Container>
        </Navbar>
    </div>
  )
}
