import { useTheme } from "../contexts/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <FaSun className="text-yellow-400 text-lg transition-all duration-300" />
      ) : (
        <FaMoon className="text-slate-600 text-lg transition-all duration-300" />
      )}
    </button>
  );
};

export default ThemeToggle;
