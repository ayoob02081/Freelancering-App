import {
  HiCollection,
  HiHome,
  HiOutlineViewGrid,
  HiUser,
} from "react-icons/hi";
import Sidebar from "../../pages/Sidebar";
import AppLayout from "../../UI/AppLayout";
import CustomeNavLink from "../../UI/CustomeNavLink";

function AdminLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <CustomeNavLink to="dashboard">
          <HiHome />
          <span>داشبورد</span>
        </CustomeNavLink>
        <CustomeNavLink to="users">
          <HiUser />
          <span>کاربران</span>
        </CustomeNavLink>
        <CustomeNavLink to="projects">
          <HiOutlineViewGrid />
          <span>پروژه‌ها</span>
        </CustomeNavLink>
        <CustomeNavLink to="proposals">
          <HiCollection />
          <span>درخواست‌ها</span>
        </CustomeNavLink>
      </Sidebar>
    </AppLayout>
  );
}

export default AdminLayout;
