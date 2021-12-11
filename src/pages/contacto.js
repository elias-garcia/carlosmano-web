import React from "react";

import SEO from "../components/shared/seo/seo.component";
import { ContactMethods } from "../components/contact/contact-methods/contact-methods.component";
import { ContactText } from "../components/contact/contact-text/contact-text.component";

const Contacto = () => {
  return (
    <>
      <SEO title="Contacto" />
      <div>
        <ContactText />
        <ContactMethods />
      </div>
    </>
  );
};

export default Contacto;
