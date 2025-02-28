import axios from "axios";

const apikey = import.meta.env.VITE_MOVIE_API_KEY;

const axiosInstance = axios.create({
  baseURL: `https://www.omdbapi.com`,
});

export default axiosInstance;
