import CartContext from "./cart-context";
import { useState } from "react";

const CartProvider = (props) => {
    let [token, setcartitems] = useState([])

    const checkStatus = () => {
        if(token.length === 0){
            return false
        }else{
            return true
        }
    }

  const addItemToCartHandler = (token1) => {
    setcartitems([...token, token1])
  };
  const logoutHandler = () => {
    setcartitems([])
  } 

  const cartContext = {
    items: token,
    isisLoggedIn: checkStatus,
    logIn: addItemToCartHandler,
    logOut: logoutHandler

  };
  return(
     <CartContext.Provider value={cartContext}>
    {props.children}
    </CartContext.Provider>
  )
};
export default CartProvider;
