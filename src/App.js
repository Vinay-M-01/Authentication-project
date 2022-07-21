import { Switch, Route } from "react-router-dom";
import { useContext } from "react";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import CartProvider from "./components/store/CartProvider";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import CartContext from "./components/store/cart-context";

function App() {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx.isisLoggedIn)

  return (
    <CartProvider>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/auth">
          <AuthPage />
          </Route>
          <Route path="/profile">
            <UserProfile />
          </Route>
        </Switch>
      </Layout>
    </CartProvider>
  );
}

export default App;
