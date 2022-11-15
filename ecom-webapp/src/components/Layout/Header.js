import React from "react";
import AvailableAlbums from "../Albums/AvailableAlbums";

import Footer from "./Footer";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <ul className={classes["header-ul"]}>
          <li className={classes["header-li"]}>
            <a className={classes['header-ul-a']}>HOME</a>
          </li>
          <li className={classes["header-li"]}>
            <a className={classes['header-ul-a']}>STORE</a>
          </li>
          <li className={classes["header-li"]}>
            <a className={classes['header-ul-a']}>ABOUT</a>
          </li>
        </ul>
        <h1 className={classes["header-h1"]}>The Generics</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <section className={classes.container}>
        <h2 className={classes["section-h2"]}>Music</h2>
        <AvailableAlbums />
      </section>
      <Footer />
    </React.Fragment>
  );
};
export default Header;
