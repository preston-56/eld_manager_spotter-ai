const AlertsNotifications = () => {
    const alerts = [
      { id: 1, type: "High-Priority", message: "Shipment #67890 needs attention", time: "1 min ago", color: "text-red-600" },
      { id: 2, type: "Delay Alert", message: "Shipment #67890 overdue", time: "3 min ago", color: "text-yellow-600" },
      { id: 3, type: "Vehicle Breakdown", message: "Shipment #67890 issue", time: "3 min ago", color: "text-gray-600" },
      { id: 4, type: "Low Fuel Alert", message: "Fuel low warning", time: "Yesterday, 10 AM", color: "text-gray-600" },
    ];
  
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-3">Alerts & Notifications</h2>
        <ul className="space-y-2">
          {alerts.map((alert) => (
            <li key={alert.id} className={`flex justify-between ${alert.color}`}>
              <span>{alert.type}</span>
              <span className="text-sm text-gray-500">{alert.time}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default AlertsNotifications;
  