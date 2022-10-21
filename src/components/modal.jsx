import React from "react";
import styled from "styled-components";
import theme from "../lib/themes";

import Button from "./button";

import loginEmail from "../functions/loginEmail";
import createCheckoutSession from "../functions/createCheckoutSession";

const Modal = ({ setIsModal, cart, user }) => {
  function login(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginEmail(email, password);
    setIsModal(false);
    createCheckoutSession(user.uid, cart);
  }
  return (
    <BlurBackground>
      <ModalCard>
        <h3>Sign in or Register</h3>
        <Form onSubmit={(e) => login(e)}>
          <Input type="text" name="email" placeholder="E-mail" />
          <Input type="password" name="password" placeholder="Password" />
          <Button
            title="Login"
            backgroundColor={theme.color.primary}
            colorLabel={theme.color.white}
          />
        </Form>
      </ModalCard>
    </BlurBackground>
  );
};

export default Modal;

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

const ModalCard = styled.section`
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

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 10px 0;
`;
