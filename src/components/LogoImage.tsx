import React from "react";
import logo from "../assets/images/logo.png";
import styled from "styled-components";

const Logo = styled.img`
  width: 300px;
`;

const LogoImage: React.FC = () => {
  return <Logo src={logo} alt="logo" />;
};

export default LogoImage;
