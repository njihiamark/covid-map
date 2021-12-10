import {useState} from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import locationsState from "../_state/atoms/locationsState";  
import mapRefState from "../_state/atoms/mapRefState";
import selectedLocationState from "../_state/selectors/selectedLocationState";
import Location from "./Location";

function Locations() {
  const locations = useRecoilValue(locationsState);
  const mapRef = useRecoilValue(mapRefState);
  const setValue = useSetRecoilState(selectedLocationState());
  const [selected, setSelected] = useState('');

  const handleClick = (val) =>{
    setSelected(val.uid);
    setValue(val.uid); 
    mapRef.flyTo([parseFloat(val.lat), parseFloat(val.long)], 13);
  }

  return (
      <div className="divide-y divide-blue-100">
        {locations.map((loc) => (
          <Location key={loc.uid} loc={loc} handleClick={() => handleClick(loc)} selected={selected} />
        ))}
      </div> 
  );
}

export default Locations;
