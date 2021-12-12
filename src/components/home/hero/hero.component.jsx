import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { useHeroStyles } from "./hero.styles";
import ArrowRightIcon from "../../../images/icons/arrow-right.svg";
import { Link } from "gatsby";

export const Hero = () => {
  const classes = useHeroStyles();

  return (
    <div className={classes.imageContainer}>
      <StaticImage
        src="../images/hero.jpg"
        alt="Cuadro de portada"
        loading="eager"
        placeholder="none"
        className={classes.image}
      />
      <div className={classes.imageOverlay}>
        <Link to="/obra" className={classes.button}>
          <h2 className={classes.buttonText}>Ver obra</h2>
          <ArrowRightIcon className={classes.arrowRightIcon} />
        </Link>
      </div>
    </div>
  );
};
