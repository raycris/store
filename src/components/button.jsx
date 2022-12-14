import React from "react";
import styled from "styled-components";

import theme from "../lib/themes";

const Button = ({ ...props }) => {
  return (
    <Container backgroundColor={props.backgroundColor} onClick={props.onClick}>
      <Label colorLabel={props.colorLabel}>{props.title}</Label>
    </Container>
  );
};

export default Button;

const Container = styled.button`
  width: 48%;
  height: 42px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  border-radius: 6px;
  background-color: ${(props) => `${props.backgroundColor}`};

  @media (min-width: 768px) {
    width: 80%;
    margin: 8px 0;
  }
`;

const Label = styled.h2`
  color: ${(props) => `${props.colorLabel}`};
  font-size: ${theme.fontSize.small};
  text-align: center;
  font-weight: bold;
`;
