import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import Header from "./header";
import Footer from "./footer";

const GlobalStyle = createGlobalStyle`
    html {
        font-family:  Helvetica, Arial, sans-serif
    }
    body {
        margin: 0
    }
`;

const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 800px;
`;

const Page = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <title>Daily Nexus Data</title>
      <Header />
      <Main>
        <Content>{children}</Content>
      </Main>
      <Footer />
    </>
  );
};

export default Page;
