

import './App.css';

import About from './components/About';
import Store from './components/Store';
import Home from './components/Home';
import Cart from './components/Cart';
import ProductContext from './components/context/productContext';
import AuthForm from './components/AuthForm';
import {Route,Routes,Navigate} from "react-router-dom";
import MainNavigation from './components/MainNavigation';

import { useContext } from 'react';


function App() {
  
const context=useContext(ProductContext);



  
  return (
    <>

  <MainNavigation></MainNavigation>
           
            
    
               
                <Routes>
                {context.isLogin &&<Route path="/" element={<Home />} />}
                {context.isLogin &&<Route path="/store" element={<Store />} />}
                {context.isLogin &&<Route path="/cart" element={<Cart />} />} 
                    {context.isLogin &&<Route path="/about" element={<About />} />}
                   { context.isLogin &&<Route path="/cart" element={<Cart />} />}
                    {!context.isLogin &&<Route path="auth" element={<AuthForm />} />}
                 
                   <Route path="*" element={<Navigate to="/auth" />} />
                </Routes>
              
          
       
       
    </>
    
  );
}

export default App;
