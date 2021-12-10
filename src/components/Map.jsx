import { useRecoilValue, useSetRecoilState } from "recoil";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import millify from "millify";

import locationsState from "../_state/atoms/locationsState";
import setMapRefState from "../_state/atoms/mapRefState";


function Map() {
  const locations = useRecoilValue(locationsState);
  const slicedLocations = locations ? locations.slice(0, 100) : [];
  const refMap  = useSetRecoilState(setMapRefState);
 

  return (
    <MapContainer
      center={[37.1, -101.3]}
      zoom={5}
      scrollWheelZoom={true}
      whenReady={ (map) => {refMap(map.target);}}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {slicedLocations.map((loc) => (
        <Marker
          position={[parseFloat(loc.lat), parseFloat(loc.long)]}
          key={loc.uid}
        >
          <Tooltip direction="top" offset={[-15, 0]}>
            <span className="font-medium text-xl">{loc.provinceState} </span>
            <span>{loc.admin2}</span>
            <br />
            <span className="text-red-700">Confirmed cases </span>
            <span className="text-gray-500">{millify(loc.confirmed)} </span>
            <br />
            <span className="text-purple-700">Death cases </span>
            <span className="text-gray-500">{millify(loc.deaths)} </span>
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;
