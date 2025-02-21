import { AdminProps } from "./Admin.interface";

const SuperadminLayout = ({ children }: AdminProps) => {
  return (
    <div>
      layout superadmin
      {children}
    </div>
  );
};

export default SuperadminLayout as React.ComponentType;
