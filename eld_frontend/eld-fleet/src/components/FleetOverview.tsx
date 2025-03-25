const FleetOverview = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
      <div className="p-4 bg-green-300 rounded-lg">
        <h2 className="text-sm sm:text-sm font-semibold">Active Vehicles</h2>
        <p className="text-2xs font-bold">4,425</p>
      </div>
      <div className="p-4 bg-purple-300 rounded-lg">
        <h2 className="text-sm sm:text-sm font-semibold">Idle Vehicles</h2>
        <p className="text-2xs font-bold">134</p>
      </div>
      <div className="p-4 bg-blue-300 rounded-lg">
        <h2 className="text-sm sm:text-sm font-semibold">Under Maintenance</h2>
        <p className="text-2xs font-bold">2,562</p>
      </div>
    </div>
  );
};

export default FleetOverview;
