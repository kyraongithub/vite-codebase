import { ComponentType, lazy } from "react";
import AdminLayout from "../components/layout/AdminLayout";
import { LayoutType } from "../types/Layout.type";

interface RouteInterface {
  path: string;
  component: ComponentType;
  layout?: LayoutType;
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
