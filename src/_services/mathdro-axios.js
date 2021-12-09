import axios from "axios";
// Create instance called instance
const instance = axios.create({
  baseURL: "https://covid19.mathdro.id/api",
  headers: {
    "content-type": "application/json",
  },
});
const mathdroAxios = {
  getData: (query) =>
    instance({
      method: "GET",
      url: `/${query}`,
    }),
};

export default mathdroAxios;
