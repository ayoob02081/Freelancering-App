import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDarkMode } from "../context/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? (
        <HiOutlineSun className="w-5 h-5 text-secondary-800 hover:text-yellow-500 duration-300" />
      ) : (
        <HiOutlineMoon className="w-5 h-5 text-secondary-800 hover:text-primary-900 duration-300" />
      )}
    </button>
  );
}

export default DarkModeToggle;
