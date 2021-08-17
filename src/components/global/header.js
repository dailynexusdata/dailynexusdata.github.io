import React from "react";

import { Link } from "gatsby";

import LabyrinthHeader from "../../images/headerLogo.png";

import styled from "styled-components"

const Logo = styled.img`
  width: 700px;

  @media (max-width: 700px) {
    width: 100%
  }
`;

const Container = styled.div`
  text-align: center;
  background-color: #FCF6D2;
`;

const Navigation = styled.nav`
  justify-content: center;
`;

const NavLink = styled(Link)`
  &,
  &:hover,
  &:focus,
  &:active {
    color: #b37319;
    font-weight: bold;
  }
`;

const Header = () => {
  return (
    <>
    <Container>
      <Logo src={LabyrinthHeader} />
      <Navigation>
        <NavLink to="../guides">Guides</NavLink>
      </Navigation>
    </Container>
    </>
  );
};

export default Header;
