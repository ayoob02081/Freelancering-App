import { HiCollection, HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-secondary-0 row-start-1 row-span-2 border-l border-gray-200 p-4">
      <ul className="flex flex-col gap-4">
        <li>
          <CustomeNavLink to="/owner/dashboard">
            <HiHome />
            <span>خانه</span>
          </CustomeNavLink>
        </li>
        <li>
          <CustomeNavLink to="/owner/projects">
            <HiCollection />
            <span>پروژه‌ها</span>
          </CustomeNavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

function CustomeNavLink({ children, to }) {
  const navLinkClass =
    "flex items-center gap-2 hover:bg-primary-100/50 hover:text-primary-900 py-1.5 rounded-lg transition-all duration-300";
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `${navLinkClass} bg-primary-100/50 text-primary-900`
          : `${navLinkClass} text-secondary-600`
      }
    >
      {children}
    </NavLink>
  );
}
