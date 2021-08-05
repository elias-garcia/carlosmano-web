import React from "react";
import { graphql, Link } from "gatsby";

import { Gallery } from "../../components/shared/gallery/gallery.component";
import { routes } from "../../routes";

export default function Work({ data }) {
  const workRoutes = routes.find((route) => route.name === "work");

  return (
    <div>
      <nav>
        <ul>
          {workRoutes.children.map((route) => (
            <li>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Gallery images={data.allFile.edges} />
    </div>
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
