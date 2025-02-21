import { ComponentType, lazy } from "react";
import AdminLayout from "../components/layout/AdminLayout";

interface RouteInterface {
  path: string;
  component: ComponentType;
  layout?: ComponentType;
  isProtected?: boolean;
}

export const routes: RouteInterface[] = [
  {
    path: "/",
    component: lazy(() => import("../components/pages/homepage")),
  },
  {
    path: "/login",
    component: lazy(() => import("../components/pages/login")),
  },
  {
    path: "/dashboard",
    component: lazy(() => import("../components/pages/dashboard")),
    layout: AdminLayout,
    isProtected: true,
  },
];
