import { Switch, Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";

import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import CartContext from "./components/store/cart-context";

function App() {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx.isisLoggedIn);

  return (
    
      <Layout>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          {!cartCtx.isisLoggedIn && (
            <Route path="/auth">
              <AuthPage />
            </Route>
          )}
          <Route path="/profile">
            {cartCtx.isisLoggedIn && <UserProfile />}
            {!cartCtx.isisLoggedIn && <Redirect to="/auth" />}
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Layout>
  );
}

export default App;
