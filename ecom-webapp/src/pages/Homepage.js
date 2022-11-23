import React from "react";
import Footer from "../components/Layout/Footer";
import MainHeader from "../components/Layout/MainHeader";
import classes from './Home.module.css';
const HomePage = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <MainHeader />
        <h1 className={classes["header-h1"]}>The Generics</h1>
        <button className={classes['latest-album']}>Get our Latest Album</button>
        <button className={classes['play-btn']}>►</button>
      </header>
      <section id="tours" className={classes.container}>
      <h2 className={classes["section-h2"]}>TOURS</h2>
       <div>
        <div className={classes['tour-item']} >
            <span className={classes['tour-date']}>JUL16</span>
            <span className={classes['tour-place']}>DETROIT, MI</span>
            <span className={classes['tour-spec-place']}>DTE ENERGY MUSIC THEATRE</span>
            <button className={classes['buy-btn']}>BUY TICKETS</button>
        </div>
        <div className={classes['tour-item']} >
            <span className={classes['tour-date']}>JUL19</span>
            <span className={classes['tour-place']}>TORONTO, ON</span>
            <span className={classes['tour-spec-place']}>BUDWEISER STAGE</span>
            <button className={classes['buy-btn']}>BUY TICKETS</button>
        </div>
        <div className={classes['tour-item']} >
            <span className={classes['tour-date']}>JUL22</span>
            <span className={classes['tour-place']}>BRISTOW, VA</span>
            <span className={classes['tour-spec-place']}>JIGGY LUBE LIVE</span>
            <button className={classes['buy-btn']}>BUY TICKETS</button>
        </div>
        <div className={classes['tour-item']} >
            <span className={classes['tour-date']}>JUL29</span>
            <span className={classes['tour-place']}>PHOENIX, AZ</span>
            <span className={classes['tour-spec-place']}>AK-CHIN PAVILION</span>
            <button className={classes['buy-btn']}>BUY TICKETS</button>
        </div>
        <div className={classes['tour-item']} >
            <span className={classes['tour-date']}>AUG2</span>
            <span className={classes['tour-place']}>LAS VEGAS, NV</span>
            <span className={classes['tour-spec-place']}>T-MOBILE ARENA</span>
            <button className={classes['buy-btn']}>BUY TICKETS</button>
        </div>
        <div className={classes['tour-item']} >
            <span className={classes['tour-date']}>AUG7</span>
            <span className={classes['tour-place']}>CONCARD, CA</span>
            <span className={classes['tour-spec-place']}>CONCARD PAVILION</span>
            <button className={classes['buy-btn']}>BUY TICKETS</button>
        </div>
       </div>
      </section>
      <Footer/>
    </React.Fragment>
  );
};
export default HomePage;
