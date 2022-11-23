import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
islogged: false
};

const loginReducer = (state, action) => {
  if (action.type === "UPDATESTATUS") {
    return {
     islogged: action.item
    };
  }

  return defaultCartState;
};
const LoginProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    loginReducer,
    defaultCartState
  );
  
  const updateLoginStatusHandler = (item) => {
    console.log("checking", item);
    dispatchCartAction({ type: "UPDATESTATUS", item: item });
  };

  const cartContext = {

    updateLoginStatus: updateLoginStatusHandler,
  
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default LoginProvider;
