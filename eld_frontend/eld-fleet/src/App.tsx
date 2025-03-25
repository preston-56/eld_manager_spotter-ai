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
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./auth/AuthContext";
import ProtectedRoute from "./auth/ProtectedRoute";
import LandingPage from "./pages/LandingPage";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>

          {/*  Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Protected Routes */}

          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <div className="flex">
                  <Sidebar />
                  <div className="flex-1 p-6 mt-8">
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
               </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
