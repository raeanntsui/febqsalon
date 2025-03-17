"use client"; // must be ran client side due to vis.gl's design
import React from "react";
import { APIProvider, Map, Pin } from "@vis.gl/react-google-maps";

export default function GoogleMaps() {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  // console.log("googleMapsApiKey", googleMapsApiKey);
  return (
    <>
      <div className="font-extrabold text-red-500">
        <p>Hello this is my Google Maps component</p>
        <div>
          <APIProvider
            apiKey={googleMapsApiKey}
            onLoad={() => console.log("Google maps api loaded")}>
            <Map
              defaultZoom={13}
              defaultCenter={{ lat: 37.352291, lng: -122.012169 }}></Map>
          </APIProvider>
        </div>
      </div>
    </>
  );
}

// check if api is loading correctly
