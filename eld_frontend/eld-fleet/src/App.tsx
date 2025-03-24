import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import TripPage from "./pages/TripPage";
import TrackingTable from "./components/TrackingTable";
import MapView from "./components/MapComponent";
import Sidebar from "./components/Sidebar";
import HelpPage from "./pages/HelpPage";
import LogsPage from "./pages/LogsPage";
import ServicesPage from "./pages/ServicesPage";
import DriversPage from "./pages/DriversPage";

export default function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6 mt-16">
          <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/trips" element={<TripPage />} />
            <Route path="/tracking" element={<TrackingTable />} />
            <Route path="/drivers" element={<DriversPage />} />
            <Route path="/map" element={<MapView />} />
            <Route path="/logs" element={<LogsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/help" element={<HelpPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
