import React from "react";

import { useLayoutStyles } from "./layout.styles";
import { Header } from "../header/header.component";
import { Footer } from "../footer/footer.component";

export const Layout = ({ children }) => {
  const classes = useLayoutStyles();

  return (
    <div className={classes.layout}>
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
    </div>
  );
};
