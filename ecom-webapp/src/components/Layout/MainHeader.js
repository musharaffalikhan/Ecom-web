import { useState } from "react";
import { NavLink } from "react-router-dom";
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
            <NavLink activeClassName={classes.active} className={classes["header-ul-a"]} to="/home">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/store">STORE</NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/aboutpage">ABOUT</NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/contactus">CONTACT</NavLink>
          </li> 
          {
            !checkToken() &&     <li>
            <NavLink activeClassName={classes.active} to="/login">LOGIN</NavLink>
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
