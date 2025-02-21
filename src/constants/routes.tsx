import { ComponentType, ReactNode } from "react";
import Homepage from "../components/pages/homepage";
import Dashboard from "../components/pages/dashboard";
import AdminLayout from "../components/layout/AdminLayout";
import Login from "../components/pages/login";

interface RouteInterface {
  path: string;
  component: ReactNode;
  layout?: ComponentType | null;
  isProtected?: boolean;
}

export const routes: RouteInterface[] = [
  {
    path: "/",
    component: <Homepage />,
  },
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/dashboard",
    component: <Dashboard />,
    layout: AdminLayout,
    isProtected: true,
  },
];
