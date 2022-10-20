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
    align-items: center;
    justify-content: space-around;
    gap: 10px;
  }
`;

const ListContainer = styled.ul`
  padding: 0;
  list-style: none;
  justify-content: center;

  @media (min-width: 768px) {
    display: grid;
    /* align-items: center; */
    grid-template-columns: repeat(2, 1fr);
  }

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
  min-width: 288px;
  height: auto;
  background-size: cover;
`;
