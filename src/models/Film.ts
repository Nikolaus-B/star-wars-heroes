import { CustomNode } from "./NodeTypes";

export interface Film {
  id: number;
  title: string;
  director: string;
  episode_id: number;
  opening_crawl: string;
  producer: string;
  release_date: string;
  planets: number[];
  species: number[];
  starships: number[];
  vehicles: number[];
  url: string;
  created: string;
  edited: string;
}

export interface FilmState {
  films: Film[];
  filmNodes: CustomNode[] | null;
}
