import { selectorFamily } from "recoil";
import locationsState from "../atoms/locationsState";
import fetchLocationsState from "./fetchLocationsState";

const filterLocationState = selectorFamily({
  key: "filterLocationState",
  get: () => () => {},
  set:
    () =>
    ({ set, get }, newValue) => { 
      const original = get(fetchLocationsState);
      const filtered = original.filter(
        (item) => item.admin2.toLowerCase() === newValue.toLowerCase() || item.provinceState.toLowerCase() === newValue.toLowerCase()
      );
      if (newValue) {
        set(locationsState, filtered);
      } else {
        set(locationsState, original);
      }
    },
});

export default filterLocationState;
