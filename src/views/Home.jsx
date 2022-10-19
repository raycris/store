import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Button from "../components/button";
import ItemCard from "../components/ItemCard";

import theme from "../lib/themes";

import getActiveProducts from "../functions/getActiveProducts";

import { signOut } from "firebase/auth";
import { auth } from "../firebase/credenciales";

const Home = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    async function getProducts() {
      const products = await getActiveProducts();
      setProducts(products);
    }
    getProducts();
  }, []);

  function logout() {
    signOut(auth);
  }

  return (
    <>
      <Button
        title="Logout"
        backgroundColor={theme.color.primary}
        colorLabel={theme.color.white}
        onClick={logout}
      />
    <Container>
      {products
        ? products.map((itemProduct) => (
            <li key={itemProduct.id}>
              <ItemCard product={itemProduct} />
            </li>
          ))
        : null}
    </Container>
    </>
  );
};

export default Home;

const Container = styled.ul`
  padding: 0;
  list-style: none;
  justify-content: center;

  
  @media (min-width: 1024px) {
   display: grid;
   grid-template-columns: repeat(2, 1fr);
  }
`;
