import React,{useContext} from 'react'
import './header.css'
import productsArr from '../data'
import { Container, Row,Col } from 'react-bootstrap'
import Margin from './Margin'
import ProductContext from './context/productContext'



export default function Header() {
  const { addToCart } = useContext(ProductContext);
  return (
    <section>
    <Margin></Margin>
      <Container fluid >
        <div >
          <h2 className="text-center">MUSIC</h2>
         
        </div>
        <Row>{
            productsArr.map((item)=>(
              
                <Col sm={5} key={item.id}>
                
                   <div className='image'>
                 
                   <h4 className='album'>
                   {item.album}</h4>
                   <img src={item.imageUrl} alt=''></img>
                   
                   <p className='price1'>${item.price}</p>
                   <div className='tag'>
                   <button style={{color:'white',background:'#87CEFA '}} onClick={() => addToCart(item)}>ADD TO CART</button>
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
