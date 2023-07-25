import { Navbar,Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import Margin from './components/Margin';

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#HOME">HOME</Navbar.Brand>
          <Navbar.Brand href="#STORE">STORE</Navbar.Brand>
          <Navbar.Brand href="#ABOUT">ABOUT</Navbar.Brand>
          <div>
                <span>
                <a href='cart' className='cart'>
                cart
                </a>
                </span> 
                  <span className='span'>0</span> 
               </div>
          </Container>
        </Navbar>
      <Margin></Margin>
      <Header></Header>
    </div>
    
  );
}

export default App;
