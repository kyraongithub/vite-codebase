import { Navigate, Outlet } from "react-router-dom";
import { RouteProps } from "./Route.interface";

const ProtectedRoute = ({ children, layout }: RouteProps) => {
  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return !!token;
  };
  const Layout = layout;

  if (isAuthenticated()) {
    return children ? <Layout>{children}</Layout> : <Outlet />;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;
