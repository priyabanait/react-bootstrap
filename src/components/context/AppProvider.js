import axios from "axios";
import ProductContext from "./productContext";
import { useReducer,useState,useEffect} from "react";

const userEmail = localStorage.getItem('email');
  const firstmail=userEmail.replace('@','');
  const mail=firstmail.replace('.','');

const CartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
  
  fetch(`https://ecommerce-project-f97a2-default-rtdb.firebaseio.com/${mail}.json`, {
    method: 'POST',
    body: JSON.stringify(action.payload),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  
  .catch(error => {
    console.error('Fetch error:', error);
  });
   return {
    ...state,
    cartItems: [...state.cartItems, {...action.payload,qty:1}]
  };
}
console.log(action.payload);
    if(action.type==="REMOVE_ITEM") {
        fetch(`https://ecommerce-project-f97a2-default-rtdb.firebaseio.com/${mail}/${action.payload}.json`, {
           method: "DELETE",
         })
         
       return {
         ...state,
         cartItems: state.cartItems.filter(
           (item) => item.id !== action.payload
         ),
       };
      }
   return state;
  }
const AppProvider =({children})=>{

  const initialToken=localStorage.getItem('token');
    const[token,setToken]=useState(initialToken);
    const [itemsArr, updateItemsArr] = useState([]);

    const userIsLoggedIn=!!token;

    const loginHandler=(token)=>{
        setToken(token);
        localStorage.setItem('token',token)

    }
    
    const logoutHandler=()=>{
        setToken(null);
        localStorage.removeItem('token')
    }
    setTimeout(() => logoutHandler(), 800000);
    
  const initalState = {
   
    cartItems: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initalState);

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
   
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  
 
  localStorage.setItem('enterdEmail',JSON.stringify(state.cartItems))
  useEffect(() => {
    axios.get(`https://ecommerce-project-f97a2-default-rtdb.firebaseio.com/${mail}.json`)
    .then((response) => {
          
          const post=[];
          for(let key in response.data){
              post.push({...response.data[key],id:key})
          }
          
          updateItemsArr([...post])
        })
      .catch((error) => {
          console.error('Fetch error:', error);
        });
    }, [mail])
  
      
        
    return(
      <ProductContext.Provider  value={{
        cartItems: itemsArr,
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