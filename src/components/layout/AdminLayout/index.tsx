import { ComponentType, ReactNode } from "react";
import { AdminProps } from "./Admin.interface";

const AdminLayout = ({ children }: AdminProps) => {
  return (
    <div>
      layout admin
      {children}
    </div>
  );
};

export default AdminLayout as ComponentType<{ children: ReactNode }>;
