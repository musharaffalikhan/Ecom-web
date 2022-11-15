import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItems from "./CartItems";

const cartItemsarr = [
  {
    title: "Album 1",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Album 2",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Album 3",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const Cart = () => {
  const cartProd = cartItemsarr.map((item) => (
    <CartItems
      key={item.id}
      title={item.title}
      imageUrl={item.imageUrl}
      price={item.price}
    />
  ));

  return (
    <Modal>
      <section id="cart" className={classes.container}>
        <h2 className={classes["cart-h2-section-h2"]}>CART</h2>

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
        <ul className={classes["cart-items"]}>{cartProd}</ul>
        <div className={classes["cart-total"]}>
          <span>
            <span className={classes["total-title"]}>
              <strong>Total</strong>
              <span id="total-value">34</span>
            </span>
          </span>
        </div>
        <button className={classes["purchase-btn"]} type="button">
          PURCHASE
        </button>
      </section>
    </Modal>
  );
};
export default Cart;
