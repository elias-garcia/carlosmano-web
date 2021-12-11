import { createUseStyles } from "react-jss";

export const useContactMethodsStyles = createUseStyles((theme) => ({
  contactMethods: {
    margin: 0,
    marginTop: theme.spacing * 4,
    paddingLeft: 0,
  },
  contactMethod: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing * 2,
  },
  contactMethodIcon: {
    width: theme.spacing * 3,
    marginRight: theme.spacing * 2,
  },
  contactMethodLink: {
    color: theme.palette.darkGrey,
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.black,
    },
  },
}));
