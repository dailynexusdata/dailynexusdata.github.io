import React from "react";
import { MDXProvider } from "@mdx-js/react";

import Page from "../global/page";
import Code from "./code";

const shortcodes = { code: Code };

export default function Layout({ children }) {
  return (
    <Page>
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </Page>
  );
}
