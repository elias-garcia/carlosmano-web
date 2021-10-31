import React from "react";
import { graphql, Link } from "gatsby";
import clsx from "clsx";

import { Gallery } from "../../components/shared/gallery/gallery.component";
import { routes } from "../../routes";
import useWorkStyles from "./work.styles";
import SEO from "../../components/shared/seo/seo.component";

export default function Work({ data }) {
  const classes = useWorkStyles();
  const workRoute = routes.find((route) => route.name === "work");
  const allWorkRoutes = [
    { ...workRoute, label: "Todo" },
    ...workRoute.children,
  ];

  return (
    <>
      <SEO title="Obra" />
      <div>
        <nav className={classes.filtersWrapper}>
          <ul className={classes.filters}>
            {allWorkRoutes.map((route) => (
              <li
                key={route.name}
                className={clsx({
                  [classes.filter]: true,
                  [classes.activeFilter]:
                    route.path === window.location.pathname,
                })}
              >
                <Link to={route.path}>{route.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Gallery images={data.allFile.edges} />
      </div>
    </>
  );
}

export const query = graphql`
  query WorkImages($imagesPathRegex: String!) {
    allFile(filter: { absolutePath: { regex: $imagesPathRegex } }) {
      edges {
        node {
          dir
          name
          publicURL
        }
      }
    }
  }
`;
