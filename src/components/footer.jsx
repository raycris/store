import React from "react";
import styled from "styled-components";

import theme from "../lib/themes";

import Ig from "../assets/icons/instagram.svg";
import GitHub from "../assets/icons/github.svg";
import Twitter from "../assets/icons/twitter.svg";
import LinkedIn from "../assets/icons/linkedin.svg";

const socialMedias = [
  { id: 1, name: "GitHub", icon: GitHub, url: "https://github.com/raycris" },
  {
    id: 2,
    name: "instagram",
    icon: Ig,
    url: "https://www.instagram.com/raycrismaldonado/",
  },
  {
    id: 3,
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/raycris97",
  },
  {
    id: 4,
    name: "LinkedIn",
    icon: LinkedIn,
    url: "https://www.linkedin.com/in/raymaldonado/",
  },
];

const Footer = () => {
  return (
    <Container>
      {socialMedias.map((media) => (
        <a href={media.url} key={media.id}>
          <Icon src={media.icon} alt={media.name} />
        </a>
      ))}
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  width: 100%;
  height: 74px;
  display: flex;
  min-width: 288px;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${theme.color.darkGray};
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`;