import React from "react";

import { Link } from "gatsby";

import Page from "../components/global/page";

const Guides = () => {
  return (
    <Page>
      <div>
        <Link to="../installation">Installation</Link>
      </div>
      <div>
        <Link to="../colors">Colors</Link>
      </div>
      <div>
        <Link to="../d3/imports">D3 Imports</Link>
      </div>
      <div>
        <Link to="../d3/scales">D3 Scales</Link>
      </div>
      <div>
        <Link to="../style">Javascript Style Guide</Link>
      </div>
      <div>
        <Link to="../wrangling">Data Wrangling</Link>
      </div>
      <div>
        <Link to="../barchartExample">Bar Chart Example</Link>
      </div>
      <div>
        <Link to="../lineplotExample">Line Plot Example</Link>
      </div>
    </Page>
  );
};

export default Guides;
