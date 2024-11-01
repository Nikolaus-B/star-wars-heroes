import { uid } from "uid";

import { Film } from "../models/Film";
import { CustomNode } from "../models/NodeTypes";
import { StarshipsInFilmInfo } from "../models/Starship";
import { Edge } from "@xyflow/react";

export const createFilmNodes = (films: Film[]) => {
  if (films.length === 0) return [];

  const filmNodes = films.map((film, index) => {
    const xPosition = window.innerWidth - 200;
    const yPosition = index * 150;
    return {
      id: `${uid()}`,
      type: "filmCard",
      data: { film: film },
      position: { x: xPosition, y: yPosition },
    };
  });

  return filmNodes;
};

export const createFilmEdges = (
  characterNodeId: string,
  filmNodes: CustomNode[]
) => {
  if (filmNodes.length === 0) return [];

  const filmEdges = filmNodes.map((filmNode) => ({
    id: `e${characterNodeId}-${filmNode.id}`,
    source: characterNodeId,
    target: filmNode.id,
  }));

  return filmEdges;
};

export const createStarshipNodes = (
  characterStarshipsInFilms: StarshipsInFilmInfo[]
) => {
  if (characterStarshipsInFilms.length === 0) return [];

  const uniqueStarshipIds = new Set<number>();
  const starshipNodes: CustomNode[] = [];

  characterStarshipsInFilms.forEach((characterStarshipsInFilm) => {
    characterStarshipsInFilm.starships.forEach((starship, index) => {
      const xPosition = window.innerWidth + 500;
      const yPosition = index * 200;

      if (!uniqueStarshipIds.has(starship.id)) {
        uniqueStarshipIds.add(starship.id);
        starshipNodes.push({
          id: `${uid()}`,
          type: "starshipCard",
          data: {
            characterStarshipInFilm: {
              starship: starship,
              filmsId: [characterStarshipsInFilm.filmID],
            },
          },
          position: { x: xPosition, y: yPosition },
        });
        return;
      }
      starshipNodes.forEach((starshipNode) => {
        starshipNode.data.characterStarshipInFilm?.filmsId.push(
          characterStarshipsInFilm.filmID
        );
      });
      return;
    });
  });

  return starshipNodes;
};

export const createStarshipEdges = (
  starshipNodes: CustomNode[],
  filmNodes: CustomNode[]
) => {
  const srarshipEdges: Edge[] = [];
  starshipNodes.forEach((starshipNode) => {
    filmNodes.forEach((filmNode) => {
      if (
        filmNode.data.film &&
        starshipNode.data.characterStarshipInFilm?.filmsId.includes(
          filmNode.data.film.id
        )
      ) {
        srarshipEdges.push({
          id: `e${filmNode.id}-${starshipNode.id}`,
          source: filmNode.id,
          target: starshipNode.id,
        });
        return;
      }
      return;
    });
  });

  return srarshipEdges;
};
