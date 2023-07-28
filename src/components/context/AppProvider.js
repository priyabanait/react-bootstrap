import ProductContext from "./productContext";
import { ADD_TO_CART, REMOVE_ITEM } from './Types'
import CartReducer from "./CartReducer";
import { useReducer } from "react";

const AppProvider =({children})=>{
  const initalState = {
    showCart: false,
    cartItems: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initalState);

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };
    return(
      <ProductContext.Provider  value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        removeItem,
      }}>
      {children}
    </ProductContext.Provider>
    )
   
   }
   export default AppProvider;