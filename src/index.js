import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { CartContextProvider } from "./context/cartContext";
import { UserContextProvider } from "./context/userContext";

import Header from "./components/header";
import Footer from "./components/footer";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;


const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <UserContextProvider>
    <CartContextProvider>
      <BrowserRouter>
        <Container>
          {/* <Header /> */}
          <App />
          <Footer />
        </Container>
      </BrowserRouter>
    </CartContextProvider>
  </UserContextProvider>
);

