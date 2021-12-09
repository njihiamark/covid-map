import { useRecoilValue } from "recoil";

import locationState from "../_state/atoms/locationState";

function Header() {
  const location = useRecoilValue(locationState);
  return (
    <div
      className="p-3 border border-l-0 border-r-0 border-t-0 border-gray-100 bg-gray-100"
      data-testid="header-nav"
    >
      {location ? (
        <>
          <span className="font-medium text-2xl">{location.provinceState} </span>
          <span>{location.admin2}</span>
        </>
      ) : (
        <p className="font-medium">Select a location</p>
      )}
    </div>
  );
}

export default Header;
