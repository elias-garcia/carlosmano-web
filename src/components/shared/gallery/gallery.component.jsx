import React from "react";
import GLightbox from "glightbox";

import { useGalleryStyles } from "./gallery.styles";
import { GalleryImage } from "../gallery-image/gallery-image.component";

export const Gallery = ({ images }) => {
  const classes = useGalleryStyles();
  const [gallery, setGallery] = React.useState();
  const parsedImages = images
    .map((image) => {
      const src = image.node.publicURL;
      const title = image.node.name.replaceAll("_", " ");
      const year = image.node.dir.substr(image.node.dir.lastIndexOf("/") + 1);

      return { src, title, year };
    })
    .sort((a, b) => b.year - a.year);

  React.useEffect(() => {
    setGallery(GLightbox({}));
  }, []);

  function handleViewImage(i) {
    gallery.openAt(i);
  }

  return (
    <div className={classes.gallery}>
      {parsedImages.map((image, i) => (
        <div key={i} className={classes.galleryItem}>
          <GalleryImage
            src={image.src}
            title={image.title}
            year={image.year}
            onView={() => handleViewImage(i)}
          />
        </div>
      ))}
    </div>
  );
};
