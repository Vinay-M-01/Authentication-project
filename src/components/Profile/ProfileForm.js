import { useRef, useContext } from 'react';
import CartContext from '../store/cart-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const newPasswordInputRef = useRef()
  const cartCtx = useContext(CartContext)
  console.log(cartCtx)

  const submitHandler =(e) =>{
    e.preventDefault()

    const enteredNewPassword = newPasswordInputRef.current.value 

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBQmo4Ut73CtOvfa_0Mf02t_z3qMgP4dIQ',{
      method: "POST",
      body: JSON.stringify({
        idToken: cartCtx.items[0].token,
        password: enteredNewPassword,
        returnSecureToken: true
      }),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      //bkjnfdmgj
    })
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="7" ref={newPasswordInputRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
