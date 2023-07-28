import React,{useContext} from 'react'
import './header.css'
import ProductContext from './context/productContext';
export default function Cart() {
    const {  cartItems, removeItem } = useContext(ProductContext);
    
  return (
    <section>
      <div className='article'>
      <div className='name'>
<h1>ITEM</h1>
<h1 className='item'>PRICE</h1>
<h1 className='item'>QUANTITY</h1>
      </div>
        {
            
            cartItems?.map((item)=>(
                <div className="cart_box" >
                    <div className="cart_img">
                   
                        <img src={item.imageUrl} alt='' />
                       <p>{item.album}</p>
                        
                        <span className='price'> {item.price}</span>
                        <span className='text'>
                        <input type='text' value={1}></input>
                        </span>
                    </div>
                   
                    <div>
                      

                        <button onClick={() => removeItem(item.id)}>REMOVE</button>
                    </div>
                </div>
            ))}
        <div className='total'>
            <span>Total:</span>
            <span>{
                cartItems.reduce((amount, item) => item.price + amount, 0)
               
              }</span>
        </div>
        <div>
        <button className='purchase'>PURCHASE</button>
    </div>
    </div>
    
    </section>
  )
}
