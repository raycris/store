import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useCartContext } from "../context/cartContext";
import { useUserContext } from "../context/useContext";

import styled from "styled-components";

import Button from "../components/button";

import theme from "../lib/themes";

import loginEmail from "../functions/loginEmail";
import createCheckoutSession from "../functions/createCheckoutSession";

const Cart = () => {
  const { cart } = useCartContext();
  const { user } = useUserContext();
  const [isModal, setIsModal] = useState(false);

  function isAuthenticated() {
    user ? createCheckoutSession(user.id, cart) : setIsModal(true);
  }

  function login(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginEmail(email, password);
    setIsModal(false);
    createCheckoutSession(user.id, cart);
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
      ) : null}
      <h2>You cart</h2>
      {cart.map((item) => (
        <p key={item?.id}>{item.name}</p>
      ))}
      <Button
        title="BUY"
        backgroundColor={theme.color.primary}
        colorLabel={theme.color.white}
        onClick={isAuthenticated}
      />
      <Link to="/">Back to home</Link>
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
