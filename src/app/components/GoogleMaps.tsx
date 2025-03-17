"use client";
import React from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

export default function GoogleMaps() {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!googleMapsApiKey) {
    throw new Error("No Google Maps API key exists");
  }

  return (
    <>
      <div className="font-extrabold text-red-500">
        <p>GOOGLE MAPS COMPONENT HERE</p>
        <div>
          <APIProvider
            apiKey={googleMapsApiKey}
            onLoad={() => console.log("Google Maps API loaded")}>
            <Map
              defaultZoom={13}
              defaultCenter={{ lat: 37.352291, lng: -122.012169 }}></Map>
          </APIProvider>
        </div>
      </div>
    </>
  );
}
