import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import { useUserContext } from "./context/useContext";

import { auth } from "./firebase/credenciales";
import { onAuthStateChanged } from "firebase/auth";

import {
  Home,
  Product,
  Profile,
  Cart,
  Checkout,
  Login,
  NotFound,
} from "./views";

function App() {
  const { user, setUser } = useUserContext();
  onAuthStateChanged(auth, (firebaseUser) => {
    firebaseUser ? setUser(firebaseUser) : setUser(null);
  });
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="product/:id" element={<Product />} />
      <Route path="profile" element={<Profile />} />
      <Route path="cart" element={<Cart />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
