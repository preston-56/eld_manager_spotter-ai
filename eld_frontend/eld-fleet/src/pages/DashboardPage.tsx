import Dashboard from "../components/Dashboard";

const DashboardPage = () => {
  return (
    <div className="flex h-screen">
      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Dashboard Content */}
        <Dashboard />
      </div>
    </div>
  );
};

export default DashboardPage;
