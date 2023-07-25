import React from 'react'
import './header.css'
export default function Cart() {
  
    const cartElements = [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        quantity: 2,
        album:'Album 1'
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        quantity: 3,
        album:'Album 2'
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        album:'Album 3' ,
        quantity: 1,
        
        }
        
        ]
  return (
    <section>
      <div className='article'>
      <div className='name'>
<h1>ITEM</h1>
<h1 className='item'>PRICE</h1>
<h1 className='item'>QUANTITY</h1>
      </div>
        {
            
            cartElements?.map((item)=>(
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
                      

                        <button>REMOVE</button>
                    </div>
                </div>
            ))}
        <div className='total'>
            <span>Total:</span>
            <span>Rs 0</span>
        </div>
        <div>
        <button className='purchase'>PURCHASE</button>
    </div>
    </div>
    
    </section>
  )
}
