import { createUseStyles } from "react-jss";

export const useContactTextStyles = createUseStyles((theme) => ({
  contactText: {
    lineHeight: `${theme.spacing * 4}px`,
  },
}));
