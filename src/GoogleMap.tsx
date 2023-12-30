import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle: React.CSSProperties = {
  width: "100vw",
  height: "100vh",
};
const center = {
  lat: 7.2905715, // default latitude
  lng: 80.6337262, // default longitude
};
const keyApi: string = " AIzaSyA6zjB1UiCNDooRzVA-yoIVbFOnxKowwBw";
const GoogleMaps: React.FC = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: keyApi,
    libraries: libraries as any,
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
        zoom={10}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default GoogleMaps;
