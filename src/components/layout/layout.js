import React from "react";
import { MDXProvider } from "@mdx-js/react";
import styled from "styled-components";

import Page from "../global/page";
import Code from "./code";

const Divider = styled.hr`
  border: 0;
  border-top: 2px solid #d3d3d3;
`;

const StyledH2 = styled.h2`
  margin: 40px 0 0 0;
`;

const h2 = ({ children }) => {
  console.log(children);
  return (
    <>
      <Divider />
      <StyledH2>{children}</StyledH2>
    </>
  );
};

const h3 = styled.h3`
  margin: 20px 0 0 0;
`;

const p = styled.p`
  margin: 20px 0;
`;

const img = styled.img`
  width: 100%;
`;

const shortcodes = { code: Code, h2, p, h3, img, Divider };

export default function Layout({ children }) {
  return (
    <Page>
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
      <Divider />
    </Page>
  );
}
