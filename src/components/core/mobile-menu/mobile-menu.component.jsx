import { Link } from "gatsby";
import React from "react";
import { routes } from "../../../routes";

export const MobileMenu = () => {
  return (
    <div>
      <nav>
        <ul>
          {routes.map((route) => (
            <li>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
