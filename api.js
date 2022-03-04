import axios from "axios";
const send = (data) =>
  new Promise((resolve) => setTimeout(() => resolve({ data: data }), 2000));

const digiaxios = axios.create({
  baseURL: "https://digimon-api.vercel.app/api/digimon/",
});

export default digiaxios;

export const GET_DIGIMON = (payload) => {
  return digiaxios
    .get(payload == "All" ? "" : `level/${payload}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response;
    });
};
