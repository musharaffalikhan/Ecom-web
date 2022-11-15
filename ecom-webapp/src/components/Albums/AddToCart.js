import { useState, useRef } from "react";
import classes from "./AddToCart.module.css";
import Input from "../UI/Input";

const AddToCart = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
        setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);

  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button className={classes["shop-item-button"]}>ADD TO CART</button>
      {!amountIsValid && <p>please enter a valid amount</p>}
    </form>
  );
};
export default AddToCart;
