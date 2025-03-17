import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import TripPage from "./pages/TripPage";
import TrackingTable from "./components/TrackingTable";
import DriverAvailability from "./components/DriverAvailability";
import MapView from "./components/MapComponent";
import ELDLogDrawer from "./components/ELDLogDrawer";
import Sidebar from "./components/Sidebar";
import HelpPage from "./pages/HelpPage";

export default function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6 mt-16">
          <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/trip-planner" element={<TripPage />} />
            <Route path="/tracking" element={<TrackingTable />} />
            <Route path="/driver-availability" element={<DriverAvailability />} />
            <Route path="/map" element={<MapView />} />
            <Route path="/eld-log" element={<ELDLogDrawer />} />
            <Route path="/help" element={<HelpPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
