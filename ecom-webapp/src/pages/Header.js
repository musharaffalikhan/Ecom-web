import React from "react";
import AvailableAlbums from "../components/Albums/AvailableAlbums";
import Footer from "../components/Layout/Footer";
import classes from "./Header.module.css";
import HeaderCartButton from "../components/Layout/HeaderCartButton";
import MainHeader from "../components/Layout/MainHeader";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <MainHeader/>
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
