import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartProd = (
    <ul className={classes["cart-items"]} >
      {cartCtx.items.map((item, i) => (
        <>
    

          <div id="cart-header" className={classes["cart-row"]} style={{marginTop: "10px"}}>
          <span id="cart-column" className={classes["cart-item"]}>
          <img src={item.imageURL} alt={item.title} style={{width:'40px', height:"30px", paddingRight: "5px"}}/>
          {item.title}
          </span>
          <span id="cart-column" className={classes["cart-price"]}>
          {item.price}   
          </span>
          <span id="cart-column" className={classes["cart-quantity"]}>
          {item.amount}
          </span>
        </div>
        </>
      ))}
    </ul>
  );
  console.log(cartCtx);

  return (
    <Modal onClose={props.onClose}>
      <section id="cart" className={classes.container}>
        <h2 className={classes["cart-h2-section-h2"]}>CART</h2>
        <button className={classes.cancel} onClick={props.onClose}>
          X
        </button>
        <div id="cart-header" className={classes["cart-row"]}>
          <span id="cart-column" className={classes["cart-item"]}>
            ITEMS
          </span>
          <span id="cart-column" className={classes["cart-price"]}>
            PRICE
          </span>
          <span id="cart-column" className={classes["cart-quantity"]}>
            QUANTITY
          </span>
        </div>
        {cartProd}

        <div className={classes["cart-total"]}>
          <span>
            <span className={classes["total-title"]}>
              <strong>Total</strong>
              <span id="total-value">{totalAmount}</span>
            </span>
          </span>
        </div>
        {hasItems && (
          <button className={classes["purchase-btn"]} type="button">
            PURCHASE
          </button>
        )}
      </section>
    </Modal>
  );
};
export default Cart;
