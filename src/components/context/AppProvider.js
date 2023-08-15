import axios from "axios";
import ProductContext from "./productContext";
import {useState,useEffect} from "react";

const userEmail = localStorage.getItem('email');
const firstmail=userEmail.replace('@','');
const mail=firstmail.replace('.','');

const AppProvider =({children})=>{

  const initialToken=localStorage.getItem('token');
    const[token,setToken]=useState(initialToken);
    
const[itemArr,setItemArr]=useState([]);
    const userIsLoggedIn=!!token;

    const loginHandler=(token)=>{
        setToken(token);
        localStorage.setItem('token',token)
    }
    
    const logoutHandler=()=>{
        setToken(null);
        localStorage.removeItem('token')
    }
    setTimeout(() => logoutHandler(), 300000);
    
    const add=(items)=>{
    fetch(`https://ecommerce-project-f97a2-default-rtdb.firebaseio.com/${mail}.json`, {
    method: 'POST',
    body: JSON.stringify(items),
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
  
		itemArr.forEach((product)=>
			 (items.id === product.id)
			
		)
     setItemArr([...itemArr, items]);
      }
    
 
 const remove=(id)=>{
  fetch(`https://ecommerce-project-f97a2-default-rtdb.firebaseio.com/${mail}/${id}.json`, {
    method: "DELETE",
  })
  const arr = itemArr.filter((item)=>item.id !== id);
  setItemArr(arr);
}

 useEffect(()=>{
  remove()
 },[])
  useEffect(() => {
    axios.get(`https://ecommerce-project-f97a2-default-rtdb.firebaseio.com/${mail}.json`)
    .then((response) => {
          
          const post=[];
          for(let key in response.data){
              post.push({...response.data[key],id:key})
          }
          
          setItemArr([...post])
        })
      .catch((error) => {
          console.error('Fetch error:', error);
        });
    }, [mail])
  
      
        
    return(
      <ProductContext.Provider  value={{
        cartItems: itemArr,
        addToCart:add,
        removeItem:remove,
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