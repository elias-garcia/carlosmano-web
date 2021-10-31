import { Link } from "gatsby";
import React from "react";

import { routes } from "../../../routes";
import { Container } from "../../shared/container/container.component";
import useMobileMenuStyles from "./mobile-menu.styles";

export const MobileMenu = ({ onClose }) => {
  const classes = useMobileMenuStyles();

  return (
    <Container>
      <nav>
        <ul className={classes.routes}>
          {routes.map((route) => (
            <li key={route.name} className={classes.route}>
              <Link
                to={route.path}
                className={classes.routeLink}
                activeClassName={classes.routeLinkActive}
                onClick={onClose}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
};
