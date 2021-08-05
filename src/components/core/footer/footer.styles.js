import { createUseStyles } from "react-jss";

export const useFooterStyles = createUseStyles((theme) => ({
  footerContent: {
    display: "flex",
    justifyContent: "center",
  },
  copyright: {
    margin: 0,
    padding: `${theme.spacing * 2}px 0`,
  },
}));
