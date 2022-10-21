import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useCartContext } from "../context/cartContext";
import { useUserContext } from "../context/userContext";

import styled from "styled-components";

import theme from "../lib/themes";

import createCheckoutSession from "../functions/createCheckoutSession";

import Modal from "../components/modal";
import Header from "../components/header";

const Cart = () => {
  const { cart } = useCartContext();
  const { user } = useUserContext();
  const [isModal, setIsModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  function isAuthenticated() {
    user ? createCheckoutSession(user.uid, cart) : setIsModal(true);
  }

  return (
    <Container>
      <Header setSearchValue={setSearchValue} searchValue={searchValue} />
      {isModal ? (
        <Modal setIsModal={setIsModal} cart={cart} user={user} />
      ) : (
        <></>
      )}
      <HeaderContainer>
        <Label>Order preview</Label>
        <Link
          to="/"
          style={{
            color: `${theme.color.white}`,
            cursor: "pointer",
            padding: 14,
            fontSize: `${theme.fontSize.small}`,
            borderRadius: 6,
            textDecoration: "none",
            backgroundColor: `${theme.color.primary}`,
          }}
        >
          Back to home
        </Link>
      </HeaderContainer>
      {cart.map((item) => (
        <CartContainer key={item?.name}>
          <ProductImage src={item.images} alt={item?.name} />
          <TextLabel>{item.name}</TextLabel>
        </CartContainer>
      ))}
      <ButtonContainer>
        <Button onClick={isAuthenticated}>
          <ButtonLabel>Checkout</ButtonLabel>
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Cart;

const Container = styled.div`
  position: relative;
`;

const CartContainer = styled.section`
  width: 90%;
  margin: 16px auto;
  cursor: pointer;
  display: flex;
  min-width: 288px;
  max-width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16);
  border-radius: 6px;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    height: 176px;
    padding: 0 10px;
    max-width: 900px;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

const Label = styled.h2`
  color: ${theme.color.primary};
  font-size: ${theme.fontSize.subtitle};
`;
const TextLabel = styled.h2`
  color: ${theme.color.primary};
  font-size: ${theme.fontSize.normal};
  text-align: center;
`;
const HeaderContainer = styled.div`
  display: flex;
  padding: 0 20px;
  min-width: 288px;
  align-items: center;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  display: flex;
  min-width: 288px;
  margin-bottom: 10px;
  justify-content: center;
`;

const Button = styled.button`
  width: 48%;
  height: 42px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  border-radius: 6px;
  background-color: ${theme.color.orage};

  @media (min-width: 768px) {
    width: 300px;
  }
`;

const ButtonLabel = styled.h2`
  color: ${theme.color.white};
  font-size: ${theme.fontSize.small};
  text-align: center;
  font-weight: bold;
`;

const ProductImage = styled.img`
  width: 90%;
  min-width: 288px;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 100px;
    height: 176px;
  }
`;
