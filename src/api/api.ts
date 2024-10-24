import axios from "axios";

const characterApi = axios.create({
  baseURL: "https://sw-api.starnavi.io/people",
});

const episodeApi = axios.create({
  baseURL: "https://sw-api.starnavi.io/episodes",
});

const starshipApi = axios.create({
  baseURL: "https://sw-api.starnavi.io/starships",
});

export { episodeApi, starshipApi, characterApi };
