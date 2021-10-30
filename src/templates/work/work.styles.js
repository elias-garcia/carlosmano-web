import { createUseStyles } from "react-jss";

const useWorkStyles = createUseStyles((theme) => ({
  filtersWrapper: {
    marginBottom: theme.spacing * 4,
  },
  filters: {
    display: "flex",
    listStyle: "none",
    paddingLeft: 0,
    marginTop: 0,
  },
  filter: {
    display: "flex",
    textTransform: "capitalize",
    color: theme.palette.darkGrey,
    "& :not(:first-of-type)": {
      marginLeft: theme.spacing * 2,
    },
    "& a": {
      color: "inherit",
      textDecoration: "none",
      padding: `${theme.spacing}px ${theme.spacing * 1.5}px`,
    },
  },
  activeFilter: {
    background: theme.palette.grey,
    borderRadius: theme.spacing,
    color: theme.palette.black,
  },
}));

export default useWorkStyles;
