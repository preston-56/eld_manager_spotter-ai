import { useState } from "react";
import { Link } from "react-router-dom";
import { LogOut, Menu } from "lucide-react";
import { RxDashboard } from "react-icons/rx";
import { PiMapPinAreaThin } from "react-icons/pi";
import { IoIosPeople } from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";
import { LuLogs } from "react-icons/lu";
import { RiUserLocationFill } from "react-icons/ri";
import SpotterLogo from "../assets/spotter.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle sidebar state
  const toggleSidebar = () => setIsOpen(!isOpen);

  // Close sidebar when clicking a menu item
  const closeSidebar = () => setIsOpen(false);

  return (
    <div>
      {/* Mobile: Hamburger Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50 mt-2">
        <button
          className="p-3 bg-gray-900 text-white rounded-md"
          onClick={toggleSidebar}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Sidebar & Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex lg:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={toggleSidebar}
          ></div>

          {/* Sidebar */}
          <div className="relative w-64 h-full bg-gray-900 text-white p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out">
            {/* Spotter logo in Mobile Sidebar */}
            <div className="flex items-center gap-3 mb-4 ml-10">
              <img
                src={SpotterLogo}
                alt="Spotter Logo"
                className="w-12 h-12 object-contain"
              />
              <h2 className="text-sm font-bold text-cyan-400">
                Spotter AI Fleet
              </h2>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col space-y-1">
              <Link
                to="/dashboard"
                className="flex items-center gap-1 p-2 hover:bg-gray-700 rounded"
                onClick={closeSidebar}
              >
                <RxDashboard size={18} /> <span>Dashboard</span>
              </Link>
              <Link
                to="/trips"
                className="flex items-center gap-1 p-2 hover:bg-gray-700 rounded"
                onClick={closeSidebar}
              >
                <RiUserLocationFill size={18} /> <span>Trip Planner</span>
              </Link>
              <Link
                to="/tracking"
                className="flex items-center gap-1 p-2 hover:bg-gray-700 rounded"
                onClick={closeSidebar}
              >
                <PiMapPinAreaThin size={18} /> <span>Tracking</span>
              </Link>
              <Link
                to="/drivers"
                className="flex items-center gap-1 p-2 hover:bg-gray-700 rounded"
                onClick={closeSidebar}
              >
                <IoIosPeople size={18} /> <span>Drivers</span>
              </Link>
              <Link
                to="/logs"
                className="flex items-center gap-1 p-2 hover:bg-gray-700 rounded"
                onClick={closeSidebar}
              >
                <LuLogs size={18} /> <span>ELD Logs</span>
              </Link>
            </div>

            {/* Help & Support */}
            <div className="mt-auto">
              <Link
                to="/help"
                className="flex items-center gap-2 p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded"
                onClick={closeSidebar}
              >
                <CiCircleQuestion size={20} /> <span>Help & Support</span>
              </Link>
            </div>

            {/* Logout Button */}
            <div className="mt-auto">
              <button
                className="flex items-center gap-1 p-2 bg-red-600 hover:bg-red-700 w-full rounded mt-2"
                onClick={closeSidebar}
              >
                <LogOut size={18} /> <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar (Always Visible) */}
      <div className="hidden lg:flex flex-col w-64 h-screen bg-gray-900 text-white p-6">
        {/* Logo in Desktop Sidebar */}
        <div className="flex items-center gap-3 mb-4">
          <img
            src={SpotterLogo}
            alt="Spotter Logo"
            className="w-12 h-12 object-contain"
          />
          <h2 className="text-lg font-bold text-cyan-400">Spotter AI Fleet</h2>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-1">
          <Link
            to="/dashboard"
            className="flex items-center gap-1 p-2 hover:bg-gray-700 rounded"
          >
            <RxDashboard size={18} /> <span>Dashboard</span>
          </Link>
          <Link
            to="/trips"
            className="flex items-center gap-1 p-2 hover:bg-gray-700 rounded"
          >
            <RiUserLocationFill size={18} /> <span>Trip Planner</span>
          </Link>
          <Link
            to="/tracking"
            className="flex items-center gap-1 p-2 hover:bg-gray-700 rounded"
          >
            <PiMapPinAreaThin size={18} /> <span>Tracking</span>
          </Link>
          <Link
            to="/drivers"
            className="flex items-center gap-1 p-2 hover:bg-gray-700 rounded"
          >
            <IoIosPeople size={18} /> <span>Drivers</span>
          </Link>
          <Link
            to="/logs"
            className="flex items-center gap-1 p-2 hover:bg-gray-700 rounded"
          >
            <LuLogs size={18} /> <span>ELD Logs</span>
          </Link>
        </div>

        {/* Help & Support */}
        <div className="mt-auto">
          <Link
            to="/help"
            className="flex items-center gap-2 p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded"
          >
            <CiCircleQuestion size={20} /> <span>Help & Support</span>
          </Link>
        </div>

        {/* Logout Button */}
        <div className="mt-auto">
          <button className="flex items-center gap-1 p-2 bg-red-600 hover:bg-red-700 w-full rounded mt-2">
            <LogOut size={18} /> <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
