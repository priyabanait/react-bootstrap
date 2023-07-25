import React from 'react'
import './header.css'
import productsArr from '../data'
import { Container, Row,Col } from 'react-bootstrap'




export default function Header() {
    
  return (
    <section>
      <Container fluid >
        <div >
          <h2 className="text-center">MUSIC</h2>
         
        </div>
        <Row>{
            productsArr.map((item)=>(
                <Col sm={5}  
                key={item.id}>
               
                   <div className='image'>
                   <h4 className='album'>{item.album}</h4>
                   <img src={item.imageUrl} alt=''></img>
                   
                   <p className='price'>${item.price}</p>
                   <div className='tag'>
                   <button style={{color:'white',background:'#87CEFA '}}>ADD TO CART</button>
                   </div>
                  
                   </div>
                        
                  
                    
                    
                </Col>

)) 
        }
        
        </Row>
    </Container>
   </section>
  )
}
