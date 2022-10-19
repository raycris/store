import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Button from "../components/button";
import ItemCard from "../components/ItemCard";
import Header from "../components/header";

import theme from "../lib/themes";

import getActiveProducts from "../functions/getActiveProducts";

import Hero from "../assets/images/inicio.jpg";

import { signOut } from "firebase/auth";
import { auth } from "../firebase/credenciales";
import Footer from "../components/footer";

const Home = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    async function getProducts() {
      const products = await getActiveProducts();
      setProducts(products);
    }
    getProducts();
  }, []);

  // function logout() {
  //   signOut(auth);
  // }

  return (
    <Container>
      <Header />
      <HeroContainer>
        <HeroImage src={Hero} alt="" />
      </HeroContainer>
      <ListContainer>
        {products
          ? products.map((itemProduct) => (
              <li key={itemProduct.id}>
                <ItemCard product={itemProduct} />
              </li>
            ))
          : null}
      </ListContainer>
      <Footer />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListContainer = styled.ul`
  padding: 0;
  list-style: none;
  justify-content: center;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const HeroContainer = styled.picture`
  width: 100%;
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  background-size: cover;
`;
