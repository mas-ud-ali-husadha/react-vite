import { lazy } from "react";

const authRoute = [
  {
    key: "auth",
    path: "/auth/login",
    component: lazy(() => import("@/views/Auth/Login")),
    authority: [],
    setting: {
      layout: "blank",
      nopadding: true,
    },
  },
];

export default authRoute;
