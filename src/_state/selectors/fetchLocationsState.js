import { selector } from "recoil";
import mathdroAxios from "../../_services/mathdro-axios";

const locationStatsState = selector({
  key: "fetchLocationsState",
  get: async () => {
      const response = await mathdroAxios.getData("countries/USA/confirmed");
      return response.data;
  },
});

export default locationStatsState;