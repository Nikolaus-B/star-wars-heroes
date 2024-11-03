import { Character } from "../../models/Character";
import { selectCharactersList } from "../../store/character/characterSelectors";
import { appSelector } from "../../store/store";
import { CharacterCard } from "../Cards/CharacterCard/CharacterCard";

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
              isInFlow={false}
            ></CharacterCard>
          );
        })}
      </ul>
    </section>
  );
};
