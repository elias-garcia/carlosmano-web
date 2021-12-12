import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import { useGalleryImageStyles } from "./gallery-image.styles";

export const GalleryImage = ({ img, src, title, year, onView }) => {
  const classes = useGalleryImageStyles();

  return (
    <div
      className={classes.imageContainer}
      role="button"
      tabIndex="0"
      onClick={onView}
    >
      <a href={src} className="glightbox">
        <GatsbyImage image={img} alt={title} className={classes.image} />
      </a>
      <div className={classes.imageOverlay}>
        <div className={classes.info}>
          <p className={classes.title}>{title}</p>
          <p className={classes.subtitle}>{year}</p>
        </div>
      </div>
    </div>
  );
};
