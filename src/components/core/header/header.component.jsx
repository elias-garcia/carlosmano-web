import React from "react";
import { Link } from "gatsby";

import { useHeaderStyles } from "./header.styles";
import { routes } from "../../../routes";
import { Container } from "../../shared/container/container.component";
import MobileMenuIcon from "../../../images/icons/menu.svg";

export const Header = () => {
  const classes = useHeaderStyles();

  return (
    <header className={`${classes.header} glightbox-header-fix`}>
      <Container>
        <div className={classes.headerContent}>
          <h1 className={classes.logo}>Carlos Maño</h1>
          <nav className={classes.routesContainer}>
            <ul className={classes.routes}>
              {routes.map((route, i) => (
                <li key={i} className={classes.route}>
                  <Link
                    className={classes.routeLink}
                    activeClassName={classes.routeLinkActive}
                    to={route.path}
                    partiallyActive={route.name === "work"}
                  >
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <MobileMenuIcon />
        </div>
      </Container>
    </header>
  );
};
