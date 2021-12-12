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
    marginTop: theme.headerHeightSm,
    flex: "1 0 auto",
    paddingTop: theme.spacing * 2,
    paddingBottom: theme.spacing * 6,
  },
  [theme.breakpoints.sm]: {
    main: {
      marginTop: theme.headerHeight,
      paddingTop: theme.spacing * 4,
    },
  },
}));
