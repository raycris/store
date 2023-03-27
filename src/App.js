import React, { useState, useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import { useUserContext } from "./context/userContext";

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

import Header from "./components/header";
import Footer from "./components/footer";

import { getActiveProducts } from "./functions";

import "./App.css";

function App() {
  const { user, setUser } = useUserContext();
  const [products, setProducts] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  let searchedItems = [];

  onAuthStateChanged(auth, (firebaseUser) => {
    firebaseUser ? setUser(firebaseUser) : setUser(null);
  });

  useEffect(() => {
    async function getProducts() {
      const products = await getActiveProducts();
      setProducts(products);
    }
    getProducts();
  }, []);

  if (!searchValue.length >= 1) {
    searchedItems = products;
  } else {
    searchedItems = products.filter((product) => {
      const productName = product.name.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return productName.includes(searchText);
    });
  }

  return (
    <>
      <Header setSearchValue={setSearchValue} searchValue={searchValue} />
      <Routes>
        <>
          <Route path="/" element={<Home searchedItems={searchedItems} />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="profile" element={<Profile />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
