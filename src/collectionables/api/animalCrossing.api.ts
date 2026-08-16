import axios from "axios";

export const AnimalCrossingApi = axios.create({
  baseURL: "/api/nookipedia",
});
