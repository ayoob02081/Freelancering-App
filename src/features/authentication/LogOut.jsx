import { HiLogout } from "react-icons/hi";
import useLogOut from "./useLogOut";
import Loading from "../../UI/Loading";

function LogOut() {
  const { isPending, logOut } = useLogOut();

  return isPending ? (
    <Loading />
  ) : (
    <button onClick={logOut}>
      <HiLogout className="w-5 h-5 text-secondary-600 hover:text-error duration-300" />
    </button>
  );
}

export default LogOut;
