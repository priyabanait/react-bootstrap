import ProductContext from "./productContext";


import { useReducer,useState } from "react";

const AppProvider =({children})=>{

  const initialToken=localStorage.getItem('token');
    const[token,setToken]=useState(initialToken);
    

    const userIsLoggedIn=!!token;

    const loginHandler=(token)=>{
        setToken(token);
        localStorage.setItem('token',token)
    }
    
    const logoutHandler=()=>{
        setToken(null);
        localStorage.removeItem('token')
    }
    
  const initalState = {
   
    cartItems: [],
  };

  const CartReducer = (state, action) => {
    if(action.type==="ADD_TO_CART") 
     return {
      
       ...state,
       cartItems: [...state.cartItems, action.payload]
        
         };
         
       
      if(action.type==="REMOVE_ITEM") 
         return {
           ...state,
           cartItems: state.cartItems.filter(
             (item) => item.id !== action.payload
           ),
         };
      
     return state;
    }

  const [state, dispatch] = useReducer(CartReducer, initalState);

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
   
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  
  console.log(state.cartItems);
    return(
      <ProductContext.Provider  value={{
        cartItems: state.cartItems,
        addToCart,
        removeItem,
        token:token,
        isLogin:userIsLoggedIn,
        login:loginHandler,
        logout:logoutHandler
      }}>
      {children}
    </ProductContext.Provider>
    )
   
   }
   export default AppProvider;