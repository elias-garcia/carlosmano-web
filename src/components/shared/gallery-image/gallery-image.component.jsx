import React from "react";

import { useGalleryImageStyles } from "./gallery-image.styles";

export const GalleryImage = ({ src, title, year, onView }) => {
  const classes = useGalleryImageStyles();

  return (
    <div
      className={classes.imageContainer}
      role="button"
      tabIndex="0"
      onClick={onView}
    >
      <img className={`glightbox ${classes.image}`} src={src} alt={title} />
      <div className={classes.imageOverlay}>
        <div className={classes.info}>
          <p className={classes.title}>{title}</p>
          <p className={classes.subtitle}>{year}</p>
        </div>
      </div>
    </div>
  );
};
