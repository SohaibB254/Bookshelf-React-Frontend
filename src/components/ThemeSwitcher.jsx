import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, Monitor } from "lucide-react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const options = [
    { name: "Light", value: "light", icon: <Sun size={16} /> },
    { name: "Dark", value: "dark", icon: <Moon size={16} /> },
  ];

  const handleSelect = (value) => {
    setTheme(value);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2      transition"
      >
        {theme === "dark" ? <Moon size={18} /> : theme === "light" ? <Sun size={18} /> : <Monitor size={18} />}

      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-slate-300 dark:border-gray-800 z-50">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => handleSelect(opt.value)}
              className={`flex items-center gap-2 w-full px-3 py-2 text-left text-sm  hover:bg-slate-100 dark:hover:bg-slate-700 ${
                theme === opt.value ? "font-semibold" : ""
              }`}
            >
              {opt.icon}
              {opt.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
