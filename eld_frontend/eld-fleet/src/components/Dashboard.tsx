import FleetOverview from "./FleetOverview";
import TrackingTable from "./TrackingTable";
import DriverAvailability from "./DriverAvailability";
import PerformanceMetrics from "./PerformanceMetrics";
import AlertsNotifications from "./AlertsNotifications";

const Dashboard = () => {
  return (
    <div className="p-4 md:p-6 grid gap-6">
      {/* Main Content */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="md:col-span-2">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <FleetOverview />
          <TrackingTable />
          <DriverAvailability />
        </div>
      </div>

      {/* Right Panel */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <PerformanceMetrics />
        <AlertsNotifications />
      </div>
    </div>
  );
};

export default Dashboard;
