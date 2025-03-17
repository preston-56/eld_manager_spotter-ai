const DriverAvailability = () => {
    const drivers = [
      { id: "#D001", name: "Amina Yusuf", assignment: "None", availability: "Unavailable", location: "Lagos" },
      { id: "#D002", name: "John Ayo", assignment: "Shipment #24680", availability: "Available", location: "Nairobi" },
    ];
  
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-3">Driver Availability</h2>
        <table className="w-full">
          <thead>
            <tr className="text-left bg-gray-100">
              <th className="p-2">Driver ID</th>
              <th className="p-2">Driver Name</th>
              <th className="p-2">Availability</th>
              <th className="p-2">Location</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((driver) => (
              <tr key={driver.id} className="border-t">
                <td className="p-2">{driver.id}</td>
                <td className="p-2">{driver.name}</td>
                <td className="p-2">{driver.availability}</td>
                <td className="p-2">{driver.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default DriverAvailability;
  