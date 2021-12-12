import { createUseStyles } from "react-jss";

export const useIndexStyles = createUseStyles({
  "@global": {
    body: {
      fontFamily: "Inter",
      fontSize: 17,
    },
    ".gslide-description": {
      display: "none",
    },
  },
});
