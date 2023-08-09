import React from 'react'
import Button from './Button'
import './Home.css';
export default function Home() {
  return (
    <div>
     
     <Button></Button>
    <section id='container'>
      <h1 id='tour' className="text-center">TOURS</h1>
 <div className='tour-item'>
    <span className='date'>JUL 16</span>
    <span className='place'>DETROIT, MI</span>
    <span className='location'>DTE ENERGY MUSIC THEATRE</span>
<span className='buybtn'>BUY TICKETS</span>
 </div>
 <div className='tour-item'>
    <span className='date'>JUL 29</span>
    <span className='place'>PHOENIX, AZ</span>
    <span className='location'>AK-CHIN PAVILION</span>
<span className='buybtn'>BUY TICKETS</span>
 </div>
 <div className='tour-item'>
    <span className='date'>JUL 19</span>
    <span className='place'>TORONTO,ON</span>
    <span className='location'>BUDWEISER STAGE</span>
<span className='buybtn'>BUY TICKETS</span>
 </div>
 <div className='tour-item'>
    <span className='date'>JUL 22</span>
    <span className='place'>BRISTOW, VA</span>
    <span className='location'>JIGGY LUBE LIVE</span>
<span className='buybtn'>BUY TICKETS</span>
 </div>
 <div className='tour-item'>
    <span className='date'>AUG 2</span>
    <span className='place'>LAS VEGAS, NV</span>
    <span className='location'>T-MOBILE ARENA</span>
<span className='buybtn'>BUY TICKETS</span>
 </div>
 <div className='tour-item'>
    <span className='date'>AUG 7</span>
    <span className='place'>CONCORD, CA</span>
    <span className='location'>CONCORD, CACONCORD PAVILION</span>
<span className='buybtn'>BUY TICKETS</span>
 </div>
  </section>
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

    </div>
  )
}
