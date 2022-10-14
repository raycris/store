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

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  align-items: center;
`;

const FormContainer = styled.form`
  width: 90%;
  border: 1px solid red;
  height: 450px;
  display: flex;
  margin: 0 auto;
  min-width: 288px;
  flex-direction: column;
  background-color: aliceblue;
`;

const CardElementContainer = styled.article`
  margin: 12px 0;
  height: 50px;
  border-radius: 6px;
  background-color: #f4f3f1;
`;

const ShoesImage = styled.img`
  width: 86%;
  background-repeat: no-repeat;
  background-size: contain;
`;

const PictureContaine = styled.picture`
  display: flex;
  justify-content: center;
`;
