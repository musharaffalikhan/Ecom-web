import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";



const MainHeader = () => {
const [state, setState] = useState(false)
  function checkToken(){
    const token = localStorage.getItem('accessToken');

    return token? true : false;
  }

  function logout(){
    localStorage.removeItem('accessToken');
    setState(true)
  }
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes["header-ul"]}>
          <li className={classes["header-li"]}>
            <a  activeClassName={classes.active} className={classes["header-ul-a"]} href="/home">
              HOME
            </a>
          </li>
          <li>
            <a activeClassName={classes.active} href="/store">STORE</a>
          </li>
          <li>
            <a activeClassName={classes.active} href="/aboutpage">ABOUT</a>
          </li>
          <li>
            <a activeClassName={classes.active} href="/contactus">CONTACT</a>
          </li> 
          {
            !checkToken() &&     <li>
            <a activeClassName={classes.active} href="/login">LOGIN</a>
          </li>
          }

          {
            checkToken() &&     <li>
            <button onClick={logout}>LOGOUT</button>
          </li>
          }
      
        </ul>
      </nav>
    </header>
  );
};
export default MainHeader;
