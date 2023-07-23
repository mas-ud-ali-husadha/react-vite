import { lazy } from "react";

export default [
  {
    key: "setting",
    path: "/",
    component: lazy(() => import("@/views/Setting/Users")),
    authority: [],
  },
 
];
