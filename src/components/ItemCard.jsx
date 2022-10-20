import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../lib/themes";

const ItemCard = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      style={{ textDecoration: "none", color: `${theme.color.primary}` }}
    >
      <Container>
        <ItemImage src={product.images[0]} alt={product.name} />
        <InfoCOntainer>
          <Label>{product.name}</Label>
          <Price>
            ${product.price.unit_amount / 100} {product.price.currency}
          </Price>
        </InfoCOntainer>
      </Container>
    </Link>
  );
};

export default ItemCard;

const Container = styled.section`
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
    margin: 10px;
    width: 288px;
    height: 350px;
    justify-content: space-around;
  }
`;

const ItemImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 400px;
  border-radius: 6px;
`;

const InfoCOntainer = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: red; */
`;

const Label = styled.h3`
  padding: 8px;
  font-size: ${theme.fontSize.base};
  font-weight: 500;
  line-height: ${theme.fontSize.subtitle};
  margin: 0;
`;

const Price = styled.p`
  padding: 8px;
  font-size: ${theme.fontSize.normal};
  margin-top: 0;
  font-weight: bold;
`;
