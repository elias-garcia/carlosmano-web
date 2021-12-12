import { createUseStyles } from "react-jss";

export const useHeaderStyles = createUseStyles((theme) => ({
  header: {
    display: "flex",
    background: theme.palette.white,
    color: theme.palette.black,
    position: "fixed",
    left: 0,
    right: 0,
    zIndex: 1,
    height: theme.headerHeightSm,
  },
  headerContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    fontSize: theme.spacing * 3.5,
    fontWeight: theme.fontWeights.bold,
    margin: 0,
    "& a": {
      textDecoration: "none",
      color: "inherit",
    },
  },
  routesContainer: {
    display: "none",
    [theme.breakpoints.sm]: {
      display: "block",
    },
  },
  routes: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  route: {
    display: "flex",
  },
  routeLink: {
    fontWeight: theme.fontWeights.medium,
    fontSize: theme.spacing * 2.5,
    padding: `${theme.spacing}px ${theme.spacing * 2}px`,
    textTransform: "capitalize",
    textDecoration: "none",
    color: theme.palette.darkGrey,
    "&:hover": {
      color: theme.palette.black,
    },
  },
  routeLinkActive: {
    color: theme.palette.black,
  },
  mobileMenuButton: {
    display: "flex",
    appearance: "none",
    border: 0,
    padding: theme.spacing,
    background: "transparent",
    cursor: "pointer",
    [theme.breakpoints.sm]: {
      display: "none",
    },
  },
  mobileMenu: {
    position: "fixed",
    width: "100%",
    marginTop: theme.headerHeightSm,
    background: theme.palette.white,
    zIndex: 1,
  },
  [theme.breakpoints.sm]: {
    header: {
      height: theme.headerHeight,
    },
    mobileMenu: {
      marginTop: theme.headerHeight,
    },
  },
}));
