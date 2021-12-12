import { createUseStyles } from "react-jss";

export const useGalleryImageStyles = createUseStyles((theme) => ({
  imageContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    display: "flex",
    cursor: "pointer",
    "&:hover $image": {
      transform: "scale(1.1)",
    },
    "&:hover $imageOverlay": {
      opacity: 0.85,
    },
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.2s ease",
  },
  imageOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    background: theme.palette.black,
    color: theme.palette.white,
    transition: "opacity 0.2s ease",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    padding: `0 ${theme.spacing * 2}px`,
  },
  title: {
    fontSize: theme.spacing * 2.25,
    fontWeight: theme.fontWeights.medium,
    lineHeight: 1.4,
    textTransform: "uppercase",
    margin: 0,
    marginBottom: theme.spacing * 2,
  },
  subtitle: {
    margin: 0,
    fontWeight: theme.fontWeights.light,
  },
  [theme.breakpoints.sm]: {
    title: {
      fontSize: theme.spacing * 2.5,
    },
  },
}));
