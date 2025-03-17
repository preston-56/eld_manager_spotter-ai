const TrackingTable = () => {
    const trackingData = [
      { id: "#12345", status: "In Transit", origin: "Lagos", destination: "Accra", priority: "High", travelType: "Perishable", estDelivery: "12 Dec 2024" },
      { id: "#67890", status: "Delayed", origin: "Nairobi", destination: "Kampala", priority: "Low", travelType: "Electronics", estDelivery: "14 Dec 2024" },
    ];
  
    return (
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-3">Tracking</h2>
        <table className="w-full">
          <thead>
            <tr className="text-left bg-gray-100">
              <th className="p-2">Journey ID</th>
              <th className="p-2">Status</th>
              <th className="p-2">Origin</th>
              <th className="p-2">Destination</th>
              <th className="p-2">Est. Delivery</th>
            </tr>
          </thead>
          <tbody>
            {trackingData.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-2">{item.id}</td>
                <td className="p-2">{item.status}</td>
                <td className="p-2">{item.origin}</td>
                <td className="p-2">{item.destination}</td>
                <td className="p-2">{item.estDelivery}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default TrackingTable;
  