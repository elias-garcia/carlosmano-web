import React from "react";

import { useFooterStyles } from "./footer.styles";
import { Container } from "../../shared/container/container.component";

export const Footer = () => {
  const classes = useFooterStyles();

  return (
    <footer className={classes.footerWrapper}>
      <Container>
        <div className={classes.footerContent}>
          <p className={classes.copyright}>© Carlos Maño - 2021</p>
        </div>
      </Container>
    </footer>
  );
};
