import React from "react";

import { useFooterStyles } from "./footer.styles";

export const Footer = () => {
  const classes = useFooterStyles();

  return (
    <footer className={classes.footer}>
      <p>© Carlos Maño - 2020</p>
    </footer>
  );
};
