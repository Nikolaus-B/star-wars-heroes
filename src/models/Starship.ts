import { CustomNode } from "./NodeTypes";

export interface Starship {
  id: number;
  name: string;
  model: string;
  MGLT: string;
  crew: string;
  length: string;
  passengers: string;
  consumables: number;
  manufacturer: string;
  starship_class: number;
  cargo_capacity: string;
  cost_in_credits: string;
  hyperdrive_rating: string;
  max_atmosphering_speed: string;
  films: number[];
  pilots: [];
  url: string;
  created: string;
  edited: string;
}

export interface MatchingStarships {
  filmID: number;
  filmTitle: string;
  starshipIds: number[];
}

export interface StarshipsInFilmInfo {
  filmID: number;
  filmTitle: string;
  starships: Starship[];
}

export interface StarshipState {
  characterStarshipsInFilmsInfo: StarshipsInFilmInfo[];
  starshipsNodes: CustomNode[] | null;
}
