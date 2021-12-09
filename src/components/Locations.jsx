import { useRecoilValue } from "recoil";

import locationsState from "../_state/atoms/locationsState";
import React from "react";

function Locations() {
  const locations = useRecoilValue(locationsState);
  console.log(locations);

  return (
      <div className="divide-y divide-blue-100">
        {locations.map((loc) => (
          <div className="p-3 cursor-pointer hover:bg-gray-100" key={loc.uid}>
            {loc.admin2}, {loc.provinceState}
          </div>
        ))}
      </div> 
  );
}

export default Locations;
