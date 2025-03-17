import { useState } from "react";

const TripPlanner = () => {
  const [trip, setTrip] = useState({
    currentLocation: "",
    pickupLocation: "",
    dropoffLocation: "",
    cycleUsed: "",
  });

  return (
    <div className="p-6">
      <h2 className="text-lg font-bold mb-4">Plan a Trip</h2>
      <form className="grid gap-4">
        <input
          type="text"
          placeholder="Current Location"
          className="border p-2"
          onChange={(e) => setTrip({ ...trip, currentLocation: e.target.value })}
        />
        <input
          type="text"
          placeholder="Pickup Location"
          className="border p-2"
          onChange={(e) => setTrip({ ...trip, pickupLocation: e.target.value })}
        />
        <input
          type="text"
          placeholder="Dropoff Location"
          className="border p-2"
          onChange={(e) => setTrip({ ...trip, dropoffLocation: e.target.value })}
        />
        <input
          type="text"
          placeholder="Current Cycle Used (Hrs)"
          className="border p-2"
          onChange={(e) => setTrip({ ...trip, cycleUsed: e.target.value })}
        />
        <button className="bg-green-500 text-white p-2">Plan Trip</button>
      </form>
    </div>
  );
};

export default TripPlanner;
