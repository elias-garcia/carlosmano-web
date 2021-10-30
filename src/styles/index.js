import { createUseStyles } from "react-jss";

export const useIndexStyles = createUseStyles(() => ({
  "@global": {
    body: {
      fontFamily: "Work Sans",
      fontSize: 17,
    },
    ".gslide-description": {
      display: "none",
    },
  },
}));
