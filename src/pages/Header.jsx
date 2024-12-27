import { Link } from "react-router-dom";
import UserAvatar from "../features/authentication/UserAvatar";
import useUser from "../features/authentication/useUser";
import HeaderMenu from "../UI/HeaderMenu";
import { HiOutlineHome } from "react-icons/hi";

function Header() {
  const { isLoading } = useUser();
  return (
    <div className="flex items-center justify-between bg-secondary-0 py-4 px-8 border-b border-secondary-200">
      <div className="flex">
        <Link to={"/"}>
          <HiOutlineHome className="w-5 h-5 text-secondary-800 hover:text-primary-900 duration-300" />
        </Link>
      </div>
      <div
        className={`container xl:max-w-screen-lg flex items-center justify-end gap-8
          ${isLoading ? "blur-sm opacity-50" : ""}`}
      >
        <UserAvatar />
        <HeaderMenu />
      </div>
    </div>
  );
}

export default Header;
