import { Search, Bell } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-white p-4 shadow-md flex justify-between items-center">
      {/* Search Bar */}
      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Search vehicle or driver"
          className="w-full p-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <Search className="absolute left-3 top-2 text-gray-500 w-5 h-5" />
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <button className="relative p-2">
          <Bell className="text-gray-600 w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">3</span>
        </button>

        {/* User Profile */}
        <div className="flex items-center space-x-2">
          <img src="/profile.jpg" alt="User" className="w-8 h-8 rounded-full" />
          <span className="text-gray-700 font-medium">John Doe</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
