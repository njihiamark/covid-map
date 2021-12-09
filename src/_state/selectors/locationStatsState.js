import { selector } from "recoil";
import mathdroAxios from "../../_services/mathdro-axios";

const locationStatsState = selector({
  key: "locationStatsState",
  get: async () => {
      let data_array = [];
      const response = await mathdroAxios.getData("countries/USA");
      data_array.push(response.data);
      return data_array;
  },
});

export default locationStatsState;
