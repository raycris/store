import React, { useState, useEffect } from "react";
import styled from "styled-components";

import theme from "../lib/themes";

import MagnifyingGlassSVG from "../assets/icons/magnifying-glass.svg";
import LogoutSVG from "../assets/icons/logout.svg";

import { signOut } from "firebase/auth";
import { auth } from "../firebase/credenciales";
import { getActiveProducts } from "../functions";
import { Home } from "../views";



function Header( {searchValue, setSearchValue}) {
  // const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState(null);

  // let searchedItems = [];

  // useEffect(() => {
  //   async function getProducts() {
  //     const products = await getActiveProducts();
  //     setProducts(products);
  //   }
  //   getProducts();
  // }, []);


  // if (!searchValue.length >= 1) {
  //   searchedItems = products;
  // } else {
  //   searchedItems = products.filter((todo) => {
  //     const todoText = todo.name.toLowerCase();
  //     const searchText = searchValue.toLowerCase();
  //     return todoText.includes(searchText);
  //   });
  // }
  // console.log(products);
  
  // console.log(searchedItems);

  function logout() {
    signOut(auth);
  }

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <Conatiner>
      <SearchLabelContainer>
        <Icon
          src={MagnifyingGlassSVG}
          style={{ marginRight: 8, marginLeft: 4 }}
          alt="magnifying glass icon"
        />
        <SearchBar
          placeholder="Search for brand"
          onChange={onSearchValueChange}
          value={searchValue}
        ></SearchBar>
      </SearchLabelContainer>
      <Icon
        src={LogoutSVG}
        onClick={logout}
        style={{ marginRight: 8, cursor: "pointer" }}
        alt="Logout icon"
      />
    </Conatiner>
  );
}

export default Header;

const Conatiner = styled.section`
  width: 100%;
  height: 74px;
  display: flex;
  min-width: 288px;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.color.lightBlue};
`;

const SearchLabelContainer = styled.span`
  width: 80%;
  height: 34px;
  cursor: pointer;
  margin: 0 10px;
  border: 1px solid ${theme.color.primary};
  display: flex;
  align-items: center;
  border-radius: 8px;
  justify-content: space-evenly;
  background-color: ${theme.color.white};
  &:hover {
    background-color: ${theme.color.hoverGreen};
  }

  @media (min-width: 768px) {
    width: 350px;
  }
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

const SearchBar = styled.input`
  width: 100%;
  height: 44px;
  border: none;
  display: flex;
  align-items: center;
  border-radius: 8px;
  justify-content: space-between;
  background-color: transparent;
  &:focus {
    outline: none !important;
  }
`;
