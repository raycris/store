import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ItemCard from "../components/ItemCard";
import getActiveProducts from "../functions/getActiveProducts";

const Home = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    async function getProducts() {
      const products = await getActiveProducts();
      setProducts(products);
    }
    getProducts();
  }, []);

  return (
    <Container>
      {products
        ? products.map((itemProduct) => (
            <li key={itemProduct.id}>
              <ItemCard product={itemProduct} />
            </li>
          ))
        : null}
    </Container>
  );
};

export default Home;

const Container = styled.ul`
  padding: 0;
  list-style: none;
  justify-content: center;
`;
