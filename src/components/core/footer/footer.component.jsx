import React from "react";

import { useFooterStyles } from "./footer.styles";
import { Container } from "../../shared/container/container.component";

export const Footer = () => {
  const classes = useFooterStyles();

  return (
    <footer>
      <Container>
        <div className={classes.footerContent}>
          <p>© Carlos Maño - 2020</p>
        </div>
      </Container>
    </footer>
  );
};
