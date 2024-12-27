import { HiOutlineUser } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import LogOut from "../features/authentication/LogOut";
import useUser from "../features/authentication/useUser";

function HeaderMenu() {
  const navigate = useNavigate();
  const { user } = useUser();
  const userRole = user.role.toLowerCase();

  if (userRole === user) return navigate("/complete-profile");

  return (
    <ul className="flex gap-4 items-center">
      <li className="flex">
        <Link to={`/${userRole}/dashboard`}>
          <HiOutlineUser className="w-5 h-5 text-secondary-800 hover:text-primary-900 duration-300" />
        </Link>
      </li>
      <li className="flex">
        <DarkModeToggle />
      </li>
      <li className="flex">
        <LogOut />
      </li>
    </ul>
  );
}

export default HeaderMenu;
