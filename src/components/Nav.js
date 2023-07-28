import React,{useContext} from 'react'
import { Navbar,Container } from 'react-bootstrap';
import ProductContext from './context/productContext';
export default function Nav(props) {
  const { cartItems} = useContext(ProductContext);
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#HOME">HOME</Navbar.Brand>
          <Navbar.Brand href="#STORE" onClick={()=>props.handleCart(true)}>STORE</Navbar.Brand>
          <Navbar.Brand href="#ABOUT">ABOUT</Navbar.Brand>
          <div className="cart" onClick={()=>props.handleCart(false)}>
                
                <span >
                    Cart 
                </span>
                <span> {cartItems.length}</span>
            </div>
        
          </Container>
        </Navbar>
    </div>
  )
}
