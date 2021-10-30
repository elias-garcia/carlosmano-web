export const routes = [
  {
    name: "home",
    label: "Inicio",
    path: "/",
  },
  {
    name: "about",
    label: "Sobre mí",
    path: "/sobre-mi",
  },
  {
    name: "work",
    label: "Obra",
    path: "/obra",
    children: [
      {
        name: "paintings",
        label: "Pintura",
        path: "/obra/pintura",
      },
      {
        name: "etchings",
        label: "Grabados",
        path: "/obra/grabados",
      },
      {
        name: "drawings",
        label: "Dibujos",
        path: "/obra/dibujos",
      },
    ],
  },
  {
    name: "contact",
    label: "Contacto",
    path: "/contacto",
  },
];
