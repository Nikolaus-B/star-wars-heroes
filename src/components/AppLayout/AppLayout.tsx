import { selectSelectedCharacter } from "../../store/character/characterSelectors";
import { appSelector } from "../../store/store";
import CharacterFlow from "../CharacterFlow/CharacterFlow";
import { CharactersList } from "../CharactersList/CharactersList";

export const AppLayout = () => {
  const selectedCharacter = appSelector(selectSelectedCharacter);
  return (
    <main>
      {selectedCharacter ? (
        <CharacterFlow selectedCharacter={selectedCharacter} />
      ) : (
        <CharactersList />
      )}
    </main>
  );
};
