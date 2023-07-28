
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import AppProvider from './components/context/AppProvider';
import Cart from './components/Cart';
import Nav from './components/Nav';
function App() {
  const[showCart,setShowCart]=useState(true);

  function handleCart(value){
    setShowCart(value);
    
	}
  
  return (
    <AppProvider>
      <Nav handleCart={handleCart}></Nav>
      
     
      {
  showCart? <Header ></Header>:<Cart ></Cart>
  
}
    </AppProvider>
    
  );
}

export default App;
