import { createUseStyles } from "react-jss";

export const useGalleryStyles = createUseStyles((theme) => ({
  gallery: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridAutoRows: "1fr",
    gap: theme.spacing * 5,
  },
  galleryItem: {
    position: "relative",
    display: "block",
    paddingTop: "100%",
    borderRadius: theme.spacing * 0.5,
    overflow: "hidden",
  },
}));
