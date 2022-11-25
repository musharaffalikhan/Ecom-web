import React, { useState } from "react";
import Header from "./pages/Header";
import Cart from "./components/Cart/Cart";
import { Route, Switch } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/Homepage";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div>
       <main> 
        <Switch>
          <Route path="/store" exact>
            {cartIsShown && <Cart onClose={hideCartHandler} />}
            <Header onShowCart={showCartHandler} />
          </Route>
          <Route path="/aboutpage">
            <AboutPage />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/contactus">
            <ContactUs/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
