const PerformanceMetrics = () => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-3">Performance Metrics</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Delivery Success Rates</span>
            <span className="text-green-600 font-semibold">80%</span>
          </div>
          <div className="flex justify-between">
            <span>Average Time</span>
            <span className="text-gray-600">3.5 Days</span>
          </div>
          <div className="flex justify-between">
            <span>Fuel Efficiency Trends</span>
            <span className="text-gray-600">18 MPG</span>
          </div>
          <div className="flex justify-between">
            <span>Active</span>
            <span className="text-green-600 font-semibold">3.5 Days</span>
          </div>
          <div className="flex justify-between">
            <span>Delayed Shipments</span>
            <span className="text-red-600 font-semibold">3.5 Days</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default PerformanceMetrics;
  