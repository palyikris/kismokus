import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function MapsPage(props) {
  let { lat, long } = props;
  const libraries = ["places"];
  const mapContainerStyle = {
    width: "40vw",
    height: "50vh",
    margin: "5vmin 0 0 0",
    borderRadius: "5px",
    boxShadow: "0 0 12px 3px rgba(218, 160, 109, 0.9)"
  };
  const location = { lat: lat, lng: long }; // default latitude // default longitude

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAIsknUp6IPNxetPWhKddYnJ2Mpu--o1i4",
    libraries
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={location}
      >
        <Marker position={location} />
      </GoogleMap>
    </div>
  );
}
