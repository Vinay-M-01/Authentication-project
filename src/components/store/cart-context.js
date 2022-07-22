import React from 'react';

const CartContext = React.createContext({
  items: '',
  isisLoggedIn : false,
  logIn: (item) => {},
  logOut: () => {}
});

export default CartContext;