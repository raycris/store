import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import styled from "styled-components";

import "./App.css";
import {
  Home,
  Product,
  Profile,
  Car,
  Checkout,
  Login,
  NotFound,
} from "./views";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="product/:id" element={<Product />} />
      <Route path="profile" element={<Profile />} />
      <Route path="car" element={<Car />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;