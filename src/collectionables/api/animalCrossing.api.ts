import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const AnimalCrossingApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "X-API-KEY": API_KEY,
  },
});
