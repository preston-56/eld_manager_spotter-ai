import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet"; 
import "leaflet/dist/leaflet.css";

const center: LatLngExpression = [0, 0]; 

const MapView = () => {
  return (
    <div className="h-64 w-full">
      <MapContainer
        center={center} 
        zoom={5}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}>
          <Popup>Current Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapView;
