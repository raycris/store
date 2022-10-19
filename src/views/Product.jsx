import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

import getProductById from "../functions/getProductById";

import theme from "../lib/themes";

import Button from "../components/button";

import CartSVG from "../assets/icons/cart.svg";

import { useCartContext } from "../context/cartContext";
import { useUserContext } from "../context/userContext";

const Product = () => {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState(null);
  const { cart, setCart } = useCartContext();
  const { user } = useUserContext();
  useEffect(() => {
    async function getProductInfo() {
      const product = await getProductById(id);
      setProductInfo(product);
    }
    getProductInfo();
  }, [id]);

  function addToCart() {
    setCart([...cart, productInfo]);
  }

  return (
    <PageBackGround>
      <Card>
        <LabelContainer>
          <Label>Product: {productInfo?.name}</Label>
          <Link to="/cart">
            <Icon src={CartSVG} alt="cart icon" />
          </Link>
        </LabelContainer>
        <ItemImage src={productInfo?.images[0]} alt={productInfo?.name} />
        <ButtonContainer>
          <Button
            backgroundColor={theme.color.lightBlue}
            colorLabel={theme.color.white}
            title="ADD TO CAR"
            onClick={addToCart}
          />
          <Button
            title="BUY NOW"
            backgroundColor={theme.color.primary}
            colorLabel={theme.color.white}
          />
        </ButtonContainer>
      </Card>
    </PageBackGround>
  );
};

export default Product;

const PageBackGround = styled.section`
  width: 100%;
  min-width: 288px;
  min-height: 100vh;
  padding-top: 16px;
`;

const Card = styled.section`
  width: 90%;
  margin: 16px auto;
  display: flex;
  min-width: 288px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16);
  border-radius: 6px;
  flex-direction: column;
  justify-content: center;
  background-color: ${theme.color.white};

  @media (min-width: 768px) {
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
    align-content: space-around;
  }
`;

const Label = styled.h1`
  padding: 8px;
  font-size: ${theme.fontSize.base};
  font-weight: 500;
  line-height: ${theme.fontSize.subtitle};
  margin-bottom: 0;
`;

const ItemImage = styled.img`
  border-radius: 6px;
  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  padding: 16px;
  align-items: center;
  justify-content: space-between;
  
  @media (min-width: 768px) {
    width:100%;
    justify-content:center;
    padding: 10px 0;
    align-items: space-between;
    flex-direction: column;
  }
`;
const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  justify-content: space-between;
  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

const Icon = styled.img`
  width: 26px;
  height: 26px;
  @media (min-width: 768px) {
    margin-top: 20px;
  }
`;
