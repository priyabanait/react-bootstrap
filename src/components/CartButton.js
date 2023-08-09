import React,{useContext} from 'react'
import ProductContext from './context/productContext';
import CartIcon from './CartIcon'
import classes from './CartButton.module.css';
export default function CartButton() {
    const context=useContext(ProductContext);
  return (
    <div>
      <button className={classes.button} >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      
      <span >{context.cartItems.length}</span>
    </button>
    </div>
  )
}
