import { Character } from "./Character";
import { Film } from "./Film";
import { Starship } from "./Starship";

export type NodesType = {
  character?: Character;
  film?: Film;
  starship?: Starship;
};

export type Node = {
  id: string;
  position: { x: number; y: number };
  data: NodesType;
  type: string;
};
