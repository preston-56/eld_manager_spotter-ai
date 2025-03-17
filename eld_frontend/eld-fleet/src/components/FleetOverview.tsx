const FleetOverview = () => {
    return (
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-green-100 rounded-lg">
          <h2 className="text-lg font-semibold">Active Vehicles</h2>
          <p className="text-xl font-bold">4,425</p>
        </div>
        <div className="p-4 bg-purple-100 rounded-lg">
          <h2 className="text-lg font-semibold">Idle Vehicles</h2>
          <p className="text-xl font-bold">134</p>
        </div>
        <div className="p-4 bg-blue-100 rounded-lg">
          <h2 className="text-lg font-semibold">Under Maintenance</h2>
          <p className="text-xl font-bold">2,562</p>
        </div>
      </div>
    );
  };
  
  export default FleetOverview;
  