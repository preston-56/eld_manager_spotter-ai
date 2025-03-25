import { Search } from "lucide-react";
import Notifications from "@/components/Notifications";
import UserProfile from "@/components/userProfile";
import { Input } from "@/components/ui/input";

const TopBar = () => {
  return (
    <div className="bg-white p-2 shadow-md flex justify-between items-center rounded-lg w-full mb-4">
      {/* Search Bar */}
      <div className="relative w-full ml-4 sm:w-1/3 md:w-1.5xs">
        <Input
          type="text"
          placeholder="Search vehicle or driver"
          className="pl-10 w-full"
        />
        <Search className="absolute left-3 top-2 text-gray-500 w-5 h-5" />
      </div>

      {/* Right Side Components */}
      <div className="flex items-center space-x-4 mr-4">
        <Notifications />
        <UserProfile />
      </div>
    </div>
  );
};

export default TopBar;
