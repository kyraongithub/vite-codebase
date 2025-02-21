import { LayoutType } from "../../../types/Layout.type";
import { AdminProps } from "./Admin.interface";

const SuperadminLayout = (props: AdminProps) => {
  const { children } = props;

  return (
    <div>
      layout superadmin
      {children}
    </div>
  );
};

export default SuperadminLayout as LayoutType;
