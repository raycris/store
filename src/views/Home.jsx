import React from "react";
import styled from "styled-components";

import ItemCard from "../components/ItemCard";

import Hero from "../assets/images/inicio.jpg";

const Home = ({ searchedItems }) => {
  return (
    <Container>
      <HeroContainer>
        <HeroImage src={Hero} alt="hero" />
      </HeroContainer>
      <ListContainer>
        {searchedItems
          ? searchedItems.map((item) => (
              <li key={item.id}>
                <ItemCard product={item} />
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
