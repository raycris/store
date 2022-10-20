import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ItemCard from "../components/ItemCard";


import getActiveProducts from "../functions/getActiveProducts";

import Hero from "../assets/images/inicio.jpg";

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

  // function logout() {
  //   signOut(auth);
  // }

  return (
    <Container>
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
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    gap: 10px;
    align-items: center;
    justify-content: space-around;
  }
`;

const ListContainer = styled.ul`
  padding: 0;
  list-style: none;
  justify-content: center;

  @media (min-width: 768px) {
    gap: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const HeroContainer = styled.picture`
  width: 100%;
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  min-width: 288px;
  background-size: cover;
`;
