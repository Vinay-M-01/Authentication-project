import CartContext from "./cart-context";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const CartProvider = (props) => {
  const histroy = useHistory()
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
    histroy.replace("/auth")
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
