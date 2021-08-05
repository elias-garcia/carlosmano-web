import { createUseStyles } from "react-jss";

export const useIndexStyles = createUseStyles(() => ({
  "@global": {
    body: {
      fontFamily: "Work Sans",
      fontSize: 17,
    },
    ".glightbox-open .glightbox-header-fix": {
      marginRight: 15,
    },
    ".gslide-description": {
      display: "none",
    },
  },
}));
