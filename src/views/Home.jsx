import React, { useState, useEffect } from "react";
import getActiveProducts from "../functions/getActiveProducts";

const Home = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    async function getProducts() {
      const products = await getActiveProducts();
      setProducts(products);
    }
    getProducts()
  }, []);

  return (
    <ul>
      {products
        ? products.map((itemProduct) => (
            <li key={itemProduct.id}>{itemProduct.name}</li>
          ))
        : null}
    </ul>
  );
};

export default Home;
