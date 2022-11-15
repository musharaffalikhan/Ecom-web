import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <footer className={classes["footer"]}>
      <div className={classes["footer-title"]}> The Generics </div>
      <div className={classes["footer-icons"]}>
        <ul className={classes["footer-icons-ul"]}>
          <li className={classes["footer-icons-li"]}>
            <a href="https://www.youtube.com/">
              <img
                className={classes["footer-icons-img"]}
                src="https://prasadyash2411.github.io/ecom-website/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg"
                alt="youtube"
              />
            </a>
          </li>
          <li className={classes["footer-icons-li"]}>
            <a href="https://facebook.com/">
              <img
                className={classes["footer-icons-img"]}
                src="https://prasadyash2411.github.io/ecom-website/img/Facebook%20Logo.png"
                alt="facebook"
              />
            </a>
          </li>
          <li className={classes["footer-icons-li"]}>
            <a href="https://spotify.com/">
              <img
                className={classes["footer-icons-img"]}
                src="https://prasadyash2411.github.io/ecom-website/img/Spotify%20Logo.png"
                alt="spotify"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
