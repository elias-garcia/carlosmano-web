import React from "react";

import { useContainerStyles } from "./container.styles";

export const Container = ({ children }) => {
  const classes = useContainerStyles();

  return (
    <div className={classes.containerWrapper}>
      <div className={classes.container}>{children}</div>
    </div>
  );
};
