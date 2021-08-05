const path = require("path");

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  const workComponentPath = path.resolve(
    "./src/templates/work/work.component.jsx"
  );
  const workRoutes = [
    {
      name: "paintings",
      path: "/paintings",
    },
    {
      name: "drawings",
      path: "/drawings",
    },
    {
      name: "etchings",
      path: "/etchings",
    },
  ];

  createPage({
    path: `/work`,
    component: workComponentPath,
    context: { imagesPathRegex: "/work/" },
  });

  workRoutes.forEach((child) => {
    createPage({
      path: `/work/${child.name}`,
      component: workComponentPath,
      context: { imagesPathRegex: `/${child.name}/` },
    });
  });
};
