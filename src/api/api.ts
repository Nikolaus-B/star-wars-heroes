import axios from "axios";

const heroesApi = axios.create({
  baseURL: "https://sw-api.starnavi.io/people",
});

const episodesApi = axios.create({
  baseURL: "https://sw-api.starnavi.io/episodes",
});

const starshipsApi = axios.create({
  baseURL: "https://sw-api.starnavi.io/starships",
});

export { episodesApi, starshipsApi, heroesApi };
