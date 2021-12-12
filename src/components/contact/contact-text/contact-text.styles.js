import { createUseStyles } from "react-jss";

export const useContactTextStyles = createUseStyles((theme) => ({
  contactText: {
    margin: 0,
    lineHeight: `${theme.spacing * 4}px`,
  },
}));
