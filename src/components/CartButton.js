import React,{useContext} from 'react'
import ProductContext from './context/productContext';
import CartIcon from './CartIcon'
import classes from './CartButton.module.css';
export default function CartButton() {
    const{cartItems}=useContext(ProductContext);
  return (
    <div>
      <button className={classes.button} >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      
      <span >{cartItems.length}</span>
    </button>
    </div>
  )
}
