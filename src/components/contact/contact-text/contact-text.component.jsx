import React from "react";

import { useContactTextStyles } from "./contact-text.styles";

export const ContactText = () => {
  const classes = useContactTextStyles();

  return (
    <p className={classes.contactText}>
      Si quieres ponerte en contacto conmigo, puedes hacerlo o bien a través de
      la red social Instagram o bien enviándome un correo electrónico. Intentaré
      responder tan rápido como me sea posible{" "}
      <span role="img" aria-label="smile emoji">
        😄
      </span>
    </p>
  );
};
