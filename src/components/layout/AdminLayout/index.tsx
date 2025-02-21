import { LayoutType } from "../../../types/Layout.type";
import { AdminProps } from "./Admin.interface";

const AdminLayout = (props: AdminProps) => {
  const { children } = props;

  return (
    <div>
      layout admin
      {children}
    </div>
  );
};

export default AdminLayout as LayoutType;
