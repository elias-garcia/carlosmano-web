const { theme } = require("./src/styles/theme.js");

module.exports = {
  siteMetadata: {
    title: "Carlos Maño",
    defaultTitle: "Carlos Maño",
    titleTemplate: "Carlos Maño | %s",
    siteUrl: `https://carlosmano.com`,
    description: "Página web del artista gallego Carlos Maño",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
        backgroundColor: theme.palette.white,
        theme_color: theme.palette.black,
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["inter:300,400,500,700"],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-jss",
      options: { theme },
    },
  ],
};
