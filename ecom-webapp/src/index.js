import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import CartProvider from "./store/Cartprovider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </CartProvider>
);
