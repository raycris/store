import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { CartContextProvider } from "./context/cartContext";
import { UserContextProvider } from "./context/userContext";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <UserContextProvider>
    <CartContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartContextProvider>
  </UserContextProvider>
);
