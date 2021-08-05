import React from "react";
import "normalize.css";
import "glightbox/dist/css/glightbox.css";

import { Layout } from "./src/components/core/layout/layout.component";
import { useIndexStyles } from "./src/styles/index";

const RootElement = ({ children }) => {
  useIndexStyles();

  return children;
};

export const wrapRootElement = ({ element }) => {
  return <RootElement>{element}</RootElement>;
};

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
