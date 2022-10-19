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
        <ButtonContainer>
          <Label>Product: {productInfo?.name}</Label>
          <Link to="/cart">
            <Icon src={CartSVG} alt="cart icon" />
          </Link>
        </ButtonContainer>
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
  background-color: ${theme.color.gray};
`;

const Card = styled.section`
  width: 90%;
  margin: 16px auto;
  display: flex;
  min-width: 288px;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16);
  border-radius: 6px;
  flex-direction: column;
  justify-content: center;
  background-color: ${theme.color.white};
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
`;

const ButtonContainer = styled.div`
  display: flex;
  padding: 16px;
  align-items: center;
  justify-content: space-between;
`;

const Icon = styled.img`
  width: 26px;
  height: 26px;
`;
