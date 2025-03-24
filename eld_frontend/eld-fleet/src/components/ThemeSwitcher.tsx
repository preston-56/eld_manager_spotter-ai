import { useTheme } from "@/components/theme-provider";
import ModeToggle from "@/components/mode-toggle";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="absolute top-6 right-4">
      <ModeToggle onClick={toggleTheme} currentTheme={theme} />
    </div>
  );
};

export default ThemeSwitcher;
