import React ,{useState}from "react";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/Cartprovider";


function App() {
  const[cartIsShown, setCartIsShown] =useState(false);

  const showCartHandler = ()=>{
    setCartIsShown(true);
  };
  const hideCartHandler = ()=>{
    setCartIsShown(false);
  };


  return (
    <CartProvider>
      { cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
    </CartProvider>
  );
}

export default App;
