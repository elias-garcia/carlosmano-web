import { createUseStyles } from "react-jss";

export const useFooterStyles = createUseStyles((theme) => ({
  footerWrapper: {
    background: theme.palette.grey,
  },
  footerContent: {
    display: "flex",
    justifyContent: "center",
    padding: `${theme.spacing * 3}px 0`,
  },
  copyright: {
    margin: 0,
  },
}));
