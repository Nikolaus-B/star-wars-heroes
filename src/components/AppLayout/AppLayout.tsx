import { selectSelectedCharacter } from "../../store/character/characterSelectors";
import { selectIsLoading } from "../../store/service/serviceSelectors";
import { appSelector } from "../../store/store";
import CharacterFlow from "../CharacterFlow/CharacterFlow";
import { CharactersList } from "../CharactersList/CharactersList";

export const AppLayout = () => {
  const selectedCharacter = appSelector(selectSelectedCharacter);
  const isLoading = appSelector(selectIsLoading);
  return (
    <main>
      {selectedCharacter ? (
        !isLoading && <CharacterFlow selectedCharacter={selectedCharacter} />
      ) : (
        <CharactersList />
      )}
    </main>
  );
};
