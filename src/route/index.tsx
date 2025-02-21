import { ComponentType } from "react";
import AdminLayout from "../components/layout/AdminLayout";
import pages from "../components/pages";

interface RouteInterface {
  path: string;
  component: any;
  layout?: ComponentType | null;
  isProtected?: boolean;
}

export const routes: RouteInterface[] = [
  {
    path: "/",
    component: pages.Homepage,
  },
  {
    path: "/login",
    component: pages.Login,
  },
  {
    path: "/dashboard",
    component: pages.Dashboard,
    layout: AdminLayout,
    isProtected: true,
  },
];
