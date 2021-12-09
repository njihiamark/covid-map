import {useState} from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import locationsState from "../_state/atoms/locationsState";  
import selectedLocationState from "../_state/selectors/selectedLocationState";
import Location from "./Location";

function Locations() {
  const locations = useRecoilValue(locationsState);
  const setValue = useSetRecoilState(selectedLocationState());
  const [selected, setSelected] = useState('');
  
  const handleClick = (val) =>{
    setSelected(val);
    setValue(val); 
  }

  return (
      <div className="divide-y divide-blue-100">
        {locations.map((loc) => (
          <Location key={loc.uid} loc={loc} handleClick={() => handleClick(loc.uid)} selected={selected} />
        ))}
      </div> 
  );
}

export default Locations;
