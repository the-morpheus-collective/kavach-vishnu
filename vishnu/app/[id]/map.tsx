'use client'

import React, { useRef, useEffect, useState } from 'react';
import "leaflet/dist/leaflet.css";

import L from "leaflet";


import { MaptilerLayer } from "@maptiler/leaflet-maptilersdk";

/**
const defaultIcon = new L.icon({
  iconUrl: require('../node_modules/leaflet/dist/images/marker-icon.png'), // your path may vary ...
  iconSize: [8, 8],
  iconAnchor: [2, 2],
  popupAnchor: [0, -2]
});
*/
var my_icon = L.icon({
    iconUrl: 'marker-icon.png',
    iconSize:     [48, 48],
})

var goal_icon = L.icon({
    iconUrl: 'goal-icon.png',
    iconSize:     [48, 48],
})

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const center = { lng: 75, lat: 52.507932 };
  const [zoom] = useState(12);

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new L.Map(mapContainer.current, {
      center: L.latLng(center.lat, center.lng),
      zoom: zoom
    });

    // Create a MapTiler Layer inside Leaflet
    L.marker([center.lat, center.lng], {icon: my_icon})
    .bindPopup("<b>Pranjal Rastogi</b><br>current location")
    .addTo(map.current);

    L.marker([center.lat+1, center.lng+1], {icon: goal_icon})
    .bindPopup("<b>Pranjal Rastogi's</b><br>destination is here")
    .addTo(map.current);

    const mtLayer = new MaptilerLayer({
      // Get your free API key at https://cloud.maptiler.com
      apiKey: "" ,
      style: L.MaptilerStyle.BACKDROP.POSITRON,
    }).addTo(map.current);

  }, [center.lng, center.lat, zoom]);

  return (
    <div className="w-96 h-96">
      <div ref={mapContainer} className="w-[100vw] h-[100vh]"/>
    </div>
  )
}

export default Map;