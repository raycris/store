import React from "react";
import styled from "styled-components";
import theme from "../lib/themes";

const ItemCard = ({ product }) => {
  return (
    <Container>
      <ItemImage src={product.images[0]} alt={product.name} />
      <Label>{product.name}</Label>
      <Price>
        ${product.price.unit_amount / 100} {product.price.currency}
      </Price>
    </Container>
  );
};

export default ItemCard;

const Container = styled.section`
  width: 90%;
  margin: 16px auto;
  display: flex;
  min-width: 288px;
  max-width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16);
  border-radius: 6px;
  flex-direction: column;
  justify-content: center;
`;

const ItemImage = styled.img`
  height: auto;
  max-width: 400px;
  border-radius: 6px;
`;

const Label = styled.h3`
  padding: 8px;
  font-size: ${theme.fontSize.base};
  font-weight: 500;
  line-height: ${theme.fontSize.subtitle};
  margin-bottom: 0;
`;

const Price = styled.p`
  padding: 8px;
  font-size: ${theme.fontSize.normal};
  margin-top: 0;
  font-weight: bold;
`;
