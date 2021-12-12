import React from "react";

import { useGalleryStyles } from "./gallery.styles";
import { GalleryImage } from "../gallery-image/gallery-image.component";
import { getImage } from "gatsby-plugin-image";

export const Gallery = ({ images }) => {
  const classes = useGalleryStyles();
  const [gallery, setGallery] = React.useState();
  const parsedImages = images
    .map((image) => {
      const src = image.node.publicURL;
      const img = getImage(image.node);
      const title = image.node.name.replace("/_/g", " ");
      const year = image.node.dir.substr(image.node.dir.lastIndexOf("/") + 1);

      return { src, img, title, year };
    })
    .sort((a, b) => b.year - a.year);

  React.useEffect(() => {
    async function importLightbox() {
      const GLightbox = (await import("glightbox")).default;

      setGallery(GLightbox({}));
    }

    if (typeof window !== undefined) {
      importLightbox();
    }
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
            img={image.img}
            title={image.title}
            year={image.year}
            onView={() => handleViewImage(i)}
          />
        </div>
      ))}
    </div>
  );
};
