import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useCartContext } from "../context/cartContext";
import { useUserContext } from "../context/userContext";

import styled from "styled-components";


import theme from "../lib/themes";

import loginEmail from "../functions/loginEmail";
import createCheckoutSession from "../functions/createCheckoutSession";

const Cart = () => {
  const { cart } = useCartContext();
  const { user } = useUserContext();
  const [isModal, setIsModal] = useState(false);

  function isAuthenticated() {
    user ? createCheckoutSession(user.uid, cart) : setIsModal(true);
  }

  function login(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginEmail(email, password);
    setIsModal(false);
    createCheckoutSession(user.uid, cart);
  }
  return (
    <Container>
      {isModal ? (
        <BlurBackground>
          <Card>
            <h3>Sign in or Register</h3>
            <ModalForm onSubmit={(e) => login(e)}>
              <Input type="text" name="email" placeholder="E-mail" />
              <Input type="password" name="password" placeholder="Password" />
              <Button
                title="Login"
                backgroundColor={theme.color.primary}
                colorLabel={theme.color.white}
              />
            </ModalForm>
          </Card>
        </BlurBackground>
      ) : (
        <div style={{ backgroundColor: "blue" }}></div>
      )}
      <HeaderContainer>
        <Label>Order preview</Label>
        <Link
          to="/"
          style={{
            color: `${theme.color.white}`,
            padding: 14,
            fontSize: `${theme.fontSize.small}`,
            borderRadius: 6,
            cursor: "pointer",
            textDecoration: "none",
            backgroundColor: `${theme.color.primary}`,
          }}
        >
          Back to home
        </Link>
      </HeaderContainer>
      {cart.map((item) => (
        <CartContainer key={item?.name}>
          <ProductImage src={item.images} alt={item.images} />
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

const BlurBackground = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 30;
  display: flex;
  position: absolute;
  min-width: 288px;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
  background-color: rgba(0, 0, 0, 0.5);
`;

const Card = styled.section`
  width: 90%;
  height: 300px;
  margin: 16px auto;
  display: flex;
  min-width: 288px;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16);
  align-items: center;
  border-radius: 6px;
  flex-direction: column;
  justify-content: center;
  background-color: ${theme.color.white};
`;

const ModalForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 10px 0;
`;

const CartContainer = styled.section`
  width: 90%;
  margin: 16px auto;
  display: flex;
  cursor: pointer;
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
