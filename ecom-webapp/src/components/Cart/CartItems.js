import classes from "./CartItems.module.css";

const CartItems = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <div className={classes["cart-items"]}>
      <div className={classes["cart-row"]} id="in-cart-album1">
        <span id="cart-column" className={classes["cart-item"]}>
          
          <img
            className={classes["cart-img"]}
            src={props.imageUrl}
            alt="album images"
          />
          <span>{props.title}</span>
        </span>
        <span id="cart-column" className={classes['cart-price']}>{price}</span>
        <span id="cart-column" className={classes['cart-quantity']}>
            <input className={classes['input']} type="text" value="1"/>
            <button className={classes['button']}>REMOVE</button>
        </span>
      </div>
    </div>
  );
};
export default CartItems;
