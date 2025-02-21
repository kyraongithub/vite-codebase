import { Navigate, Outlet } from "react-router-dom";
import { ComponentType, ReactNode } from "react";

interface RouteProps {
  children?: ReactNode;
  layout?: ComponentType<{ children: ReactNode }>;
}

const ProtectedRoute = ({ children, layout }: RouteProps) => {
  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return !!token;
  };

  if (isAuthenticated()) {
    if (layout) {
      const LayoutComponent = layout;
      return <LayoutComponent>{children}</LayoutComponent>;
    }
    return children ? <>{children}</> : <Outlet />;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;
