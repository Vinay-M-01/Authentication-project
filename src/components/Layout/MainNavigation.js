import { Link } from 'react-router-dom';
import { useContext } from 'react';

import classes from './MainNavigation.module.css';
import CartContext from '../store/cart-context';

const MainNavigation = () => {

  const cartCtx = useContext(CartContext)
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          <li>
            {!cartCtx.isisLoggedIn() && <Link to='/auth'>Login</Link>}
          </li>
          <li>
            {cartCtx.isisLoggedIn() && <Link to='/profile'>Profile</Link>}
          </li>
          <li>
            {cartCtx.isisLoggedIn() && <button onClick={cartCtx.logOut}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
