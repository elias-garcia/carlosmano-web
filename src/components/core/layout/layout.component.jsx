import React from "react";

import { useLayoutStyles } from "./layout.styles";
import { Header } from "../header/header.component";
import { Footer } from "../footer/footer.component";
import { Container } from "../../shared/container/container.component";

export const Layout = ({ children }) => {
  const classes = useLayoutStyles();

  return (
    <section className={classes.layout}>
      <Header />
      <main className={classes.main}>
        <Container>{children}</Container>
      </main>
      <Footer />
    </section>
  );
};
