import { createUseStyles } from "react-jss";

export const useContainerStyles = createUseStyles((theme) => ({
  containerWrapper: {
    width: "100%",
    maxWidth: 1200,
    margin: "auto",
  },
  container: {
    padding: `0 ${theme.spacing * 2}px`,
  },
}));
