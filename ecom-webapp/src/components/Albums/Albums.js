import AddToCart from "./AddToCart";
import classes from "./Albums.module.css";

const Albums = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <div className={classes["music-content-div"]}>
      <div>
        <h3 className={classes["music-content-h3"]}>{props.title}</h3>
        <div className={classes["image-conatainer"]}>
          <img
            className={classes["prod-images"]}
            src={props.imageUrl}
            alt="album images"
          />
        </div>
        <div className={classes["music-content-prod-details"]}>
          <span>{price}</span>
          <AddToCart/>
        </div>
      </div>
    </div>
  );
};
export default Albums;
