
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';

import Cart from './components/Cart';
import Nav from './components/Nav';
function App() {
  const[showCart,setShowCart]=useState(true);

  function handleCart(value){
    setShowCart(value);
    
	}
  
  return (
    <React.Fragment>
      <Nav handleCart={handleCart}></Nav>
      
     
      {
  showCart? <Header ></Header>:<Cart ></Cart>
  
}
    </React.Fragment>
    
  );
}

export default App;
