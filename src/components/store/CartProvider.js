import CartContext from "./cart-context";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const CartProvider = (props) => {
  const histroy = useHistory()
    let [token, setcartitems] = useState(localStorage.getItem('token'))

    const checkStatus = !!token

  const addItemToCartHandler = (token1) => {
    setcartitems(token1)
    
  };
  const logoutHandler = () => {
    setcartitems(null)
    histroy.replace("/auth")
    localStorage.removeItem('token')
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
