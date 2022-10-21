import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

import getProductById from "../functions/getProductById";

import theme from "../lib/themes";

import Button from "../components/button";

import CartSVG from "../assets/icons/cart.svg";

import { useCartContext } from "../context/cartContext";
import { useUserContext } from "../context/userContext";
import Header from "../components/header";

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
      <Header/>
      <HeaderContainer>
        <Link
          to="/"
          style={{
            color: `${theme.color.white}`,
            cursor: "pointer",
            padding: 14,
            fontSize: `${theme.fontSize.small}`,
            marginTop:4,
            borderRadius: 6,
            textDecoration: "none",
            backgroundColor: `${theme.color.primary}`,
          }}
        >
          Back to home
        </Link>
      </HeaderContainer>
      <Card>
        <TextContainer>
          <LabelContainer>
            <Label>{productInfo?.name}</Label>
            <Link to="/cart">
              <Icon src={CartSVG} alt="cart icon" />
            </Link>
          </LabelContainer>
          <Description>{productInfo?.description}</Description>
        </TextContainer>
        <ItemImage src={productInfo?.images[0]} alt={productInfo?.name} />
        <ButtonContainer>
          <Button
            backgroundColor={theme.color.lightBlue}
            colorLabel={theme.color.white}
            title="ADD TO CAR"
            onClick={addToCart}
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
    display: grid;
    align-content: space-around;
    justify-content: space-between;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Label = styled.h1`
  padding: 8px;
  font-size: ${theme.fontSize.base};
  font-weight: 500;
  line-height: ${theme.fontSize.subtitle};
  margin-bottom: 0;
`;

const Description = styled.p`
  color: ${theme.color.black};
  display: none;
  font-size: ${theme.fontSize.normal};
  @media (min-width: 768px) {
    display: flex;
  }
`;

const TextContainer = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
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
    width: 100%;
    padding: 10px 0;
    align-items: space-between;
    flex-direction: column;
    justify-content: center;
  }
`;
const LabelContainer = styled.div`
  display: flex;
  align-items: center;

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

const HeaderContainer = styled.div`
  display: flex;
  padding: 0 20px;
  min-width: 288px;
  align-items: center;
  justify-content: flex-end;
`;