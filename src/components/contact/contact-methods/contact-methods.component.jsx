import React from "react";

import { useContactMethodsStyles } from "./contact-methods.styles";
import InstagramIcon from "../../../images/icons/instagram.svg";
import EnvelopeIcon from "../../../images/icons/envelope.svg";

export const ContactMethods = () => {
  const classes = useContactMethodsStyles();

  return (
    <ul className={classes.contactMethods}>
      <li className={classes.contactMethod}>
        <InstagramIcon className={classes.contactMethodIcon} />
        <a
          href="https://instagram.com/carlosmano_"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.contactMethodLink}
        >
          @carlosmano_
        </a>
      </li>
      <li className={classes.contactMethod}>
        <EnvelopeIcon className={classes.contactMethodIcon} />
        <a
          href="mailto:carlosmano@carlosmano.com"
          className={classes.contactMethodLink}
        >
          carlosmano@carlosmano.com
        </a>
      </li>
    </ul>
  );
};
