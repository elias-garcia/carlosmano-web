import { createUseStyles } from "react-jss";

export const useHeaderStyles = createUseStyles((theme) => ({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: `${theme.spacing * 3}px 0`,
  },
  logo: {
    margin: 0,
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
    textTransform: "uppercase",
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
  routeLinkActive: {
    color: theme.palette.primary.dark,
  },
}));
