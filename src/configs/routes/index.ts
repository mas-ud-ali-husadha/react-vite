import authRoute from "./authRoute";
import { RouteConfig } from "./interface";
import settingRoute from "./settingRoute";

export const protectedRoutes: RouteConfig[] = [...settingRoute];
export const publicRoutes: RouteConfig[] = [...authRoute];
