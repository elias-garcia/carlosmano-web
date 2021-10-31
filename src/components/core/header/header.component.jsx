import React from "react";
import { Link } from "gatsby";

import { useHeaderStyles } from "./header.styles";
import { routes } from "../../../routes";
import { Container } from "../../shared/container/container.component";
import MobileMenuIcon from "../../../images/icons/menu.svg";
import { MobileMenu } from "../mobile-menu/mobile-menu.component";

export const Header = () => {
  const classes = useHeaderStyles();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <>
      <header className={classes.header}>
        <Container>
          <div className={classes.headerContent}>
            <h1 className={classes.logo}>
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                Carlos Maño
              </Link>
            </h1>
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
                      {route.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <button
              className={classes.mobileMenuButton}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <MobileMenuIcon />
            </button>
          </div>
        </Container>
      </header>
      <div className={classes.mobileMenu}>
        {isMobileMenuOpen && (
          <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
        )}
      </div>
    </>
  );
};
