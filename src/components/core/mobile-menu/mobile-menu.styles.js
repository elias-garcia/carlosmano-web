import { createUseStyles } from "react-jss";

const useMobileMenuStyles = createUseStyles((theme) => ({
  routes: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  route: {
    display: "flex",
    width: "100%",
    "&:not(:first-child)": {
      borderTop: `2px solid ${theme.palette.grey}`,
    },
  },
  routeLink: {
    textDecoration: "none",
    color: theme.palette.darkGrey,
    padding: `${theme.spacing * 1.5}px 0`,
    width: "100%",
    textAlign: "center",
    "&:hover": {
      color: theme.palette.black,
    },
  },
  routeLinkActive: {
    color: theme.palette.black,
  },
}));

export default useMobileMenuStyles;
