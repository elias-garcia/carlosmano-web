import React from "react";
import { Link } from "gatsby";

import { useHeaderStyles } from "./header.styles";
import { routes } from "../../../routes";

export const Header = () => {
  const classes = useHeaderStyles();

  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>Carlos Maño</h1>
      <nav>
        <ul className={classes.routes}>
          {routes.map((route, i) => (
            <li key={i} className={classes.route}>
              <Link
                className={classes.routeLink}
                activeClassName={classes.routeLinkActive}
                to={route.path}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
