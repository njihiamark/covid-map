import { selectorFamily} from "recoil";
import locationsState from "../atoms/locationsState";
import locationState from "../atoms/locationState";

const selectedLocationState = selectorFamily({ 
  key: "selectedLocationState",
  get: () => () => {
    
    },
  set: () =>({set, get}, newValue) => {
    const list = get(locationsState);
    const filtered = list.filter((item) => item.uid === newValue)
    set(locationState, filtered[0])
    }
});

export default selectedLocationState;

