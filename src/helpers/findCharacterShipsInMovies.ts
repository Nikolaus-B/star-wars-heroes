import { Film } from "../models/Film";
import { MatchingStarships } from "../models/Starship";

export default function findMatchingStarshipIds(
  characterStarShipsIds: number[],
  films: Film[]
) {
  const matchingShips: MatchingStarships[] = [];

  films.forEach((film) => {
    const matches = characterStarShipsIds.filter((starshipId) =>
      film.starships.includes(starshipId)
    );

    if (matches.length > 0) {
      matchingShips.push({
        filmID: film.id,
        filmTitle: film.title,
        starshipIds: matches,
      });
    }
  });

  return matchingShips;
}
