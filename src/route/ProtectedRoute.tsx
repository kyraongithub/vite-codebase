import { Navigate, Outlet } from "react-router-dom";
import { ComponentType } from "react";

interface RouteProps {
  children?: React.ReactNode;
  layout?: ComponentType | null;
}

const ProtectedRoute = ({ children, layout }: RouteProps) => {
  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return !!token;
  };
  const Layout: any = layout;

  if (isAuthenticated()) {
    return children ? <Layout>{children}</Layout> : <Outlet />;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;
