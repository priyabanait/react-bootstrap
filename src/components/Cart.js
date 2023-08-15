import React,{useContext,useState,useEffect} from 'react'
import './Store.css'

import ProductContext from './context/productContext';


export default function Cart() {
    const {cartItems, removeItem } = useContext(ProductContext);
   
    const [price, setPrice] = useState(0);
    
    const handleRemoveItem = (itemId) => {
      removeItem(itemId);
    };
    const handlePrice = ()=>{
      let ans = 0;
      cartItems.map((item)=>(
          ans += item.amount * item.price
      ))
      setPrice(ans);
  }
  
  useEffect(()=>{
    handlePrice();
})


    function purchaseHandler(){
      
       alert('Thank you for the purchase.');
    }
    
    const handleChange = (event)=>{
     return event.target.value;
    }
      
    
  return (
    <section>
      <div className='article' id='carts'>
      <div className='name'>
      
     <h1>ITEM</h1>
     <h1 className='item'>PRICE</h1>
     <h1 className='item'>QUANTITY</h1>
      </div>
        {
            
          cartItems?.map((item,i)=>(
              
                <div className="cart_box" key={i}>
                    <div className="cart_img">
                  
                        <img src={item.imageUrl} alt='' />
                       <p>{item.album}</p>
                        
                        <span className='price'> {item.price}</span>
                        <div className='text'>
                        <input type='text' defaultValue='1' onClick={handleChange}></input>
                    </div>
                    </div>
                    
                    <div>
                       <button onClick={() => handleRemoveItem(item.id)}>REMOVE</button>
                    </div>
                </div>
            ))}
        <div className='total'>
            <span>Total:</span>
            <span>{price}</span>
        </div>
        <div>
        <button className='purchase' onClick={purchaseHandler}>PURCHASE</button>
    </div>
    </div>
    </section>
  )
}