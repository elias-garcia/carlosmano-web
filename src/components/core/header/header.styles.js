import { createUseStyles } from "react-jss";

export const useHeaderStyles = createUseStyles((theme) => ({
  header: {
    background: theme.palette.white,
    color: theme.palette.black,
    position: "fixed",
    left: 0,
    right: 0,
    zIndex: 1,
    height: theme.headerHeight,
  },
  headerContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: `${theme.spacing * 3}px 0`,
  },
  logo: {
    fontWeight: theme.fontWeights.medium,
    margin: 0,
  },
  mobileMenuIcon: {
    display: "block",
    [theme.breakpoints.md]: {
      display: "none",
    },
  },
  routesContainer: {
    display: "none",
    [theme.breakpoints.md]: {
      display: "block",
    },
  },
  routes: {
    display: "flex",
    listStyle: "none",
    margin: 0,
  },
  route: {
    display: "flex",
  },
  routeLink: {
    padding: `${theme.spacing}px ${theme.spacing * 2}px`,
    textTransform: "capitalize",
    textDecoration: "none",
    color: theme.palette.darkGrey,
  },
  routeLinkActive: {
    color: theme.palette.black,
  },
}));
