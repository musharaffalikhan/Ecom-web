import { useContext } from "react";
import CartContext from "../../store/cart-context";
import AddToCart from "./AddToCart";
import classes from "./Albums.module.css";

const Albums = (props) => {
    const cartCtx=  useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = amount =>{
    cartCtx.addItem({
        id:props.id,
        title:props.title,
        amount:amount,
        price:props.price,
        imageURL:props.imageUrl,
    });
  };

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
          <AddToCart onAddToCart={addToCartHandler}/>
        </div>
      </div>
    </div>
  );
};
export default Albums;
