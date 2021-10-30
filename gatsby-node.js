const path = require("path");

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  const workComponentPath = path.resolve(
    "./src/templates/work/work.component.jsx"
  );
  const workRoutes = [
    {
      name: "paintings",
      path: "/obra/pintura",
    },
    {
      name: "etchings",
      path: "/obra/grabados",
    },
    {
      name: "drawings",
      path: "/obra/dibujos",
    },
  ];

  createPage({
    path: `/obra`,
    component: workComponentPath,
    context: { imagesPathRegex: "/work/" },
  });

  workRoutes.forEach((child) => {
    createPage({
      path: child.path,
      component: workComponentPath,
      context: { imagesPathRegex: `/${child.name}/` },
    });
  });
};
