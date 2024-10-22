export interface Heroes {
  id: number;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: number[];
  species: number[];
  vehicles: number[];
  starships: number[];
  url: string;
}

export interface HeroesState {
  heroes: Heroes[];
}
