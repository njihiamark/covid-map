import { useRecoilValue } from "recoil";

import locationState from "../_state/atoms/locationState";

function Map() {
  const location = useRecoilValue(locationState);
  console.log(location);
  return <div>I am a map</div>;
}

export default Map;
