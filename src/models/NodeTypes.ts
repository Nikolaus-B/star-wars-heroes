import { Character } from "./Character";
import { Film } from "./Film";
import { Starship } from "./Starship";

export interface StarshipNodeType {
  filmsId: number[];
  starship: Starship;
}

export type NodesType = {
  character?: Character;
  film?: Film;
  characterStarshipInFilm?: StarshipNodeType;
};

export type CustomNode = {
  id: string;
  position: { x: number; y: number };
  data: NodesType;
  type: string;
};
