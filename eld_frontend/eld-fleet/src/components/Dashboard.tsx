import FleetOverview from "./FleetOverview";
import TrackingTable from "./TrackingTable";
import DriverAvailability from "./DriverAvailability";
import PerformanceMetrics from "./PerformanceMetrics";
import AlertsNotifications from "./AlertsNotifications";
import TopBar from "./TopBar";
const Dashboard = () => {
  return (
    <div className="p-4 md:p-6 grid gap-6">
      {/* Main Content */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="md:col-span-2 lg:col-span-3">
          <TopBar />
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-black">
            Dashboard
          </h1>
          <FleetOverview />
          <TrackingTable />
          <DriverAvailability />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <PerformanceMetrics />
        <AlertsNotifications />
      </div>
    </div>
  );
};

export default Dashboard;
