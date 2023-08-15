import React,{useContext} from 'react'
import './Store.css'
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
    <footer>
<div id='footer-title'> The Generics</div>
<div id='footer-icon'>
<ul>
  <li><a href="https://www.youtube.com">
    <img src="https://prasadyash2411.github.io/ecom-website/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg" alt=''></img>
  </a></li>
  <li><a href="https://spotify.com">
    <img src='https://prasadyash2411.github.io/ecom-website/img/Spotify%20Logo.png' alt=''></img>
  </a></li>
  <li><a href="https://facebook.com">
    <img src='https://prasadyash2411.github.io/ecom-website/img/Facebook%20Logo.png' alt=''></img>
  </a></li>
</ul>
</div>
 </footer>

   </section>
  )
}
