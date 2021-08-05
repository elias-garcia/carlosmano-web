export const routes = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "work",
    path: "/work",
    children: [
      {
        name: "paintings",
        path: "/work/paintings",
      },
      {
        name: "etchings",
        path: "/work/etchings",
      },
      {
        name: "drawings",
        path: "/work/drawings",
      },
    ],
  },
  {
    name: "contact",
    path: "/contact",
  },
];
