import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import SEO from "../components/shared/seo/seo.component";

const IndexPage = () => {
  return (
    <>
      <SEO />
      <StaticImage
        src="../images/hero.jpg"
        alt="Cuadro de portada"
        loading="eager"
        placeholder="none"
      />
    </>
  );
};

export default IndexPage;
