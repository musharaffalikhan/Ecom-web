import React from "react";
import Footer from "../components/Layout/Footer";
import MainHeader from "../components/Layout/MainHeader";
import classes from "./AboutPage.module.css";
const AboutPage = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <MainHeader />
        <h1 className={classes["header-h1"]}>The Generics</h1>
      </header>
      <section className={classes.container}>
        <h2 className={classes["section-h2"]}>ABOUT</h2>
        <div>
          <img
            className={classes.img}
            src="https://prasadyash2411.github.io/ecom-website/img/Band%20Members.png"
            alt="band"
          />
          <p className={classes.p}>
          Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows, hates no prosecutors will unfold in the enduring of which were born in it? Often leads smallest mistake some pain main responsibilities are to stand for the right builder of pleasure, accepted explain up to now. , The things we are accusing of these in the explication of the truth receives from the flattery of her will never be the trouble and they are refused to the pleasures and the pleasures of the pain, explain the treatment of excepturi of the blessed sufferings. I never said will unfold in him receives at another time he may please the one that those works, we are less than they, this refused to the pleasures of deleniti? Those are! Will unfold in times of pleasure, this pain will be a right enjoyed by corrupt, are accusing him of all pleasures, and seek his own, or, to the needs of the agony of the choice. We hate the fellow.
          </p>
        </div>
      </section>
      <Footer/>
    </React.Fragment>
  );
};
export default AboutPage;
