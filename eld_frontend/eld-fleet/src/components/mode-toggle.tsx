import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

interface ModeToggleProps {
  onClick: () => void;
  currentTheme: "light" | "dark"; 
}

const ModeToggle = ({ onClick, currentTheme }: ModeToggleProps) => {
  return (
    <div className="flex items-center">
      {currentTheme === "dark" ? (
        <Button
          variant="outline"
          size="icon"
          onClick={onClick}
          className="text-gray-950"
        >
          <Sun className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Light Mode</span>
        </Button>
      ) : (
        <Button
          variant="outline"
          size="icon"
          onClick={onClick}
          className="text-gray-950"
        >
          <Moon className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Dark Mode</span>
        </Button>
      )}
    </div>
  );
};

export default ModeToggle;
