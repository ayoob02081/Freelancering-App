import { HiCollection, HiHome } from "react-icons/hi";
import Sidebar from "../../pages/Sidebar";
import AppLayout from "../../UI/AppLayout";
import CustomeNavLink from "../../UI/CustomeNavLink";

function OwnerLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <CustomeNavLink to="/owner/dashboard">
          <HiHome />
          <span>داشبورد</span>
        </CustomeNavLink>
        <CustomeNavLink to="/owner/projects">
          <HiCollection />
          <span>پروژه‌ها</span>
        </CustomeNavLink>
      </Sidebar>
    </AppLayout>
  );
}

export default OwnerLayout;
