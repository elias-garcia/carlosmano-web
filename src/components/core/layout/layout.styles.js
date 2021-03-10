import { createUseStyles } from "react-jss";

export const useLayoutStyles = createUseStyles({
  layout: {
    maxWidth: 1200,
    height: "100vh",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
  },
  main: {
    flex: "1 0 auto",
  },
});
