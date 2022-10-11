import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./App.css";

const stripePromise = loadStripe(
  "pk_test_51LrWoaEQABU5G7hOQA1dkX45SSrOnrkgfj4Z3KPPVRM7mvm6VnvGeQqBy6oYeAsGC55IwDE3CZZ3BwPweoSaMV0S00u3Co8NQA"
);

const checkoutForm = () => {
  return <form></form>
}

function App() {
  return (
    <Elements stripe={stripePromise}>
      <form></form>
    </Elements>
  );
}

export default App;
