

import './App.css';
import About from './components/About';
import Header from './components/Header';
import AppProvider from './components/context/AppProvider';
import Cart from './components/Cart';
import Home from './components/Home';


import {BrowserRouter,NavLink,Route,Routes} from "react-router-dom";

function App() {
  

  
  
  return (
    <AppProvider>

    <>
   
            <BrowserRouter>
          
                <div style={{
                    display: "flex",
                    background: 'black',
                    padding: '5px 0 5px 5px',
                    fontSize: '20px',
                    paddingLeft:'600px'
                  
                }}>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/home" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                         HOME
                        </NavLink>
                    </div>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/store" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                          STORE
                        </NavLink>
                    </div>
                    <div style={{ margin: '10px'}}>
                        <NavLink to="/about" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            ABOUT
                        </NavLink>
                    </div>
                    <div className="cart" >
                    <NavLink to="/cart" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            <span >
                    cart 
                </span>
                <span> 0</span>
                        </NavLink>
               
            </div>
           
                </div>
           
                <Routes>
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/store" element={<Header />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/cart" element={<Cart />} />
                </Routes>
              
            </BrowserRouter>
        </>
       
    </AppProvider>
    
  );
}

export default App;
