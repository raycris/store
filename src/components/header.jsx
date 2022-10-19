import React, { useState } from "react";
import styled from "styled-components";

import theme from "../lib/themes";

import Button from "./button";

import MagnifyingGlassSVG from "../assets/icons/magnifying-glass.svg";
import LogoutSVG from "../assets/icons/logout.svg";

import { signOut } from "firebase/auth";
import { auth } from "../firebase/credenciales";

function Header() {
  function logout() {
    signOut(auth);
  }

  return (
    <Conatiner>
      <SearchLabelContainer>
        <Icon src={MagnifyingGlassSVG} style={{ marginRight: 8 }} />
        <SearchBar placeholder="Search for brand"></SearchBar>
      </SearchLabelContainer>
      <Icon src={LogoutSVG} onClick={logout} style={{ marginRight: 8 }} />
    </Conatiner>
  );
}

export default Header;

const Conatiner = styled.section`
  width: 100%;
  height: 74px;
  min-width: 288px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.color.lightBlue};
`;

const SearchLabelContainer = styled.span`
  width: 80%;
  height: 34px;
  cursor: pointer;
  display: flex;
  margin: 0 10px;
  border: 1px solid ${theme.color.primary};
  align-items: center;
  border-radius: 8px;
  justify-content: space-evenly;
  background-color: ${theme.color.white};
  &:hover {
    background-color: ${theme.color.hoverGreen};
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