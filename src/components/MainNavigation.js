import React from 'react'
import {NavLink} from 'react-router-dom';
import { useContext } from 'react';
import './MainNavigation.css'

import ProductContext from './context/productContext';
import CartButton from './CartButton';
export default function MainNavigation() {
    const context=useContext(ProductContext);
  const isLogin=context.isLogin
  function logoutHandler(){
    context.logout();
  }
  return (
    <nav className="navbar">
    <div className="container">
      
      <div className="nav-elements">
        <ul>
        <li>
            {isLogin &&<NavLink to="/">HOME</NavLink>}
          </li>
          <li>
            { isLogin &&<NavLink to="/store">STORE</NavLink>}
          </li>

          <li>
           { isLogin &&<NavLink to="/about">ABOUT</NavLink>}
          </li>
          
          {!isLogin &&  <li>
            <NavLink to='/auth'>LOGIN</NavLink>
          </li>}
        

         <div id='cart'>
          {isLogin && <li><NavLink to='/cart'><CartButton></CartButton></NavLink></li>}
          {isLogin && <li>
            <button id='button' onClick={logoutHandler}>LOGOUT</button>
          </li>}
          
          </div>
         
        </ul>
      </div>
    </div>
  </nav>
  )
}
