import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import styled from "styled-components";
import Button from "./components/button";

import Shoes1 from "./assets/images/shoes1.png";

import "./App.css";

const stripePromise = loadStripe(
  "pk_test_51LrWoaEQABU5G7hOQA1dkX45SSrOnrkgfj4Z3KPPVRM7mvm6VnvGeQqBy6oYeAsGC55IwDE3CZZ3BwPweoSaMV0S00u3Co8NQA"
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log(paymentMethod);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <PictureContaine>
        <ShoesImage src={Shoes1} alt="Nike Dunk Low Clark Atlanta University" />
      </PictureContaine>

      <CardElementContainer>
        <CardElement />
      </CardElementContainer>
      <Button />
    </FormContainer>
  );
};

function App() {
  return (
    <MainContainer>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  align-items: center;
`;

const FormContainer = styled.form`
  width: 90%;
  border: 1px solid red;
  height: 450px;
  display: flex;
  margin: 0 auto;
  min-width: 288px;
  flex-direction: column;
  background-color: aliceblue;
`;

const CardElementContainer = styled.article`
  margin: 12px 0;
  height: 50px;
  border-radius: 6px;
  background-color: #f4f3f1;
`;

const ShoesImage = styled.img`
  width: 86%;
  background-repeat: no-repeat;
  background-size: contain;
`;

const PictureContaine = styled.picture`
  display: flex;
  justify-content: center;
`;
