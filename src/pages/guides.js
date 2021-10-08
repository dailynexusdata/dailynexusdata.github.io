import React from "react";

import { Link } from "gatsby";

import Page from "../components/global/page";

const Guides = () => {
  return (
    <Page>
      <h1>Guides</h1>
      <div>
        <Link to="../installation">Installation</Link>
      </div>
      <div>
        <Link to="../videos">Videos</Link>
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
      <hr />

      <h1>Getting Started</h1>
      <ol>
        <li>
          Make sure you view the{" "}
          <Link to="../installation">installation guide</Link> first to get the
          required programs and extensions installed.
        </li>
        <li>
          Watch through the <Link to="../videos">videos</Link> to get up to
          speed on HTML/CSS/Javascript and D3.
        </li>
        <li>
          The <Link to="../wrangling">wrangling guide</Link> will show you how
          to do some wrangling operations in Javascript and using D3.
        </li>
        <li>
          Try out the <Link to="../barchartExample">bar chart example</Link> to
          learn how we make plots.
        </li>
      </ol>
    </Page>
  );
};

export default Guides;
