"use client"; // google maps api only works in browser -- must use client
import React from "react";
import {
  APIProvider,
  Map,
  Pin,
  AdvancedMarker,
} from "@vis.gl/react-google-maps";

export default function GoogleMaps() {
  const position = { lat: 37.352291, lng: -122.012169 };
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  // const marker = google.maps.LatLngLiteral;

  if (!API_KEY) {
    throw new Error("No Google Maps API key exists");
  }
  return (
    <APIProvider
      apiKey={API_KEY}
      onLoad={() => console.log("Google Maps API loaded")}>
      <div className="w-full h-screen">
        <Map
          defaultZoom={15}
          defaultCenter={position}
          gestureHandling={"cooperative"}
          disableDefaultUI={false}
          mapId="Q-Nine-Salon">
          <AdvancedMarker position={position}></AdvancedMarker>
        </Map>
      </div>
    </APIProvider>
  );
}
