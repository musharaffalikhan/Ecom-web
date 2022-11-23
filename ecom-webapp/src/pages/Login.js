import MainHeader from "../components/Layout/MainHeader";
import React, { useRef, useState } from "react";
import classes from "./Login.module.css";
import { Redirect } from "react-router-dom";
import { useContext } from "react";
import axios from 'axios';
import LoginContext from "../store/login-context-main";

const Login = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isloggedIn, setIsloggedIn] = useState(false);
  const loginCtx = useContext(LoginContext)

const loginHandler = async(e) => {
    e.preventDefault()
    console.log(emailInputRef.current.value, passwordInputRef.current.value);

    try {
        const res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBqujFzVznyE7kjJGz9kAkx2gHi0aRqYH0',
        {email: emailInputRef.current.value, password: passwordInputRef.current.value, returnSecureToken: true });

        console.log(res.data.idToken);

        localStorage.setItem('accessToken', res.data.idToken);
         loginCtx.updateLoginStatus(true)
         setIsloggedIn(true)
    } catch (error) {
        alert(error.response.data.error.message)
    }
 


}



  return (
    <React.Fragment>
{isloggedIn && <Redirect
    to= '/store/'
  />}
      <header className={classes.header}>
        <MainHeader />
        <h1 className={classes["header-h1"]}>The Generics</h1>
      </header>
      <section className={classes.auth}>
        <h1>LOGIN</h1>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>
          <div className={classes.actions}>
            <button >LOGIN</button>
          </div>
        </form>
      </section>
    </React.Fragment>
  );
};
export default Login;
