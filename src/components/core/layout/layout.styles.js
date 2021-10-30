import { createUseStyles } from "react-jss";

export const useLayoutStyles = createUseStyles((theme) => ({
  layout: {
    width: "100%",
    minHeight: "100vh",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
  },
  main: {
    marginTop: theme.headerHeight,
    flex: "1 0 auto",
    paddingTop: theme.spacing * 4,
    paddingBottom: theme.spacing * 5,
  },
}));
