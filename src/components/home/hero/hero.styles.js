import { createUseStyles } from "react-jss";

export const useHeroStyles = createUseStyles((theme) => ({
  imageContainer: {
    marginTop: theme.spacing * 2,
    position: "relative",
    width: "100%",
    display: "flex",
    overflow: "hidden",
    borderRadius: theme.spacing * 0.5,
    "&:hover $imageOverlay": {
      opacity: 0.85,
    },
  },
  image: {
    width: "100%",
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
  button: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    border: `${theme.spacing * 0.5}px solid ${theme.palette.white}`,
    borderRadius: theme.spacing * 0.5,
    padding: `${theme.spacing * 1}px ${theme.spacing * 1.5}px`,
    color: theme.palette.white,
    background: "transparent",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    "&:hover": {
      background: theme.palette.white,
      color: theme.palette.black,
    },
  },
  buttonText: {
    margin: 0,
    fontSize: theme.spacing * 2.25,
    fontWeight: theme.fontWeights.medium,
  },
  arrowRightIcon: {
    height: theme.spacing * 2.25,
    marginLeft: theme.spacing * 1.75,
  },
  [theme.breakpoints.sm]: {
    imageContainer: {
      paddingTop: 0,
    },
    button: {
      padding: `${theme.spacing * 1.75}px ${theme.spacing * 3}px`,
    },
    buttonText: {
      fontSize: theme.spacing * 2.5,
    },
    arrowRightIcon: {
      height: theme.spacing * 2.5,
      marginLeft: theme.spacing * 2.5,
    },
  },
}));
