import React from "react";

import { Link } from "gatsby";

import Page from "../components/global/page";

const Guides = () => {
  return (
    <Page>
      <Link to="../installation">Installation</Link>
      <Link to="../wrangling">Data Wrangling</Link>
    </Page>
  );
};

export default Guides;
