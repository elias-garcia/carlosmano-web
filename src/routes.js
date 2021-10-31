export const routes = [
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
    name: "bio",
    label: "Biografía",
    path: "/biografia",
  },
  {
    name: "contact",
    label: "Contacto",
    path: "/contacto",
  },
];
