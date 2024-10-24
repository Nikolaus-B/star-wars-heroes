import { Character } from "../../interfaces/Character";
import { selectCharactersList } from "../../store/character/characterSelectors";
import { appSelector } from "../../store/store";
import { CharacterCard } from "../CharacterCard/CharacterCard";

export const CharactersList = () => {
  const characters = appSelector(selectCharactersList);
  return (
    <section>
      <ul className=" flex gap-20 flex-wrap items-center justify-center mt-20">
        {characters.map((character: Character) => {
          return (
            <CharacterCard
              key={character.id}
              characterInfo={character}
            ></CharacterCard>
          );
        })}
      </ul>
    </section>
  );
};
