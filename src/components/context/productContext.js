
import React from "react";
 const ProductContext= React.createContext({
    token:"",
    isLogin:false,
    login:(token)=>{},
    logout:()=>{}
})
 export default ProductContext;