import axios from "axios";

const characterApi = axios.create({
  baseURL: "https://sw-api.starnavi.io/people",
});

const filmApi = axios.create({
  baseURL: "https://sw-api.starnavi.io/films",
});

const starshipApi = axios.create({
  baseURL: "https://sw-api.starnavi.io/starships",
});

export { filmApi, starshipApi, characterApi };
