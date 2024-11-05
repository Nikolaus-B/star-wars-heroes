import { useEffect } from "react";
import { selectSelectedCharacter } from "../../store/character/characterSelectors";
import { fetchCharacters } from "../../store/character/operations";
import { selectIsLoading } from "../../store/service/serviceSelectors";

import { appSelector, useAppDispatch } from "../../store/store";
import CharacterFlow from "../CharacterFlow/CharacterFlow";
import { CharactersList } from "../CharactersList/CharactersList";
import Loader from "../Loader/Loader";
import { CharactersSection } from "./AppLayout.styled";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
import { SearchCharacter } from "../SearchCharacter/SearchCharacter";

export const AppLayout = () => {
  const dispatch = useAppDispatch();

  const isLoading = appSelector(selectIsLoading);
  const selectedCharacter = appSelector(selectSelectedCharacter);

  useEffect(() => {
    dispatch(fetchCharacters(1));
  }, []);

  return (
    <main>
      {selectedCharacter ? (
        !isLoading && <CharacterFlow selectedCharacter={selectedCharacter} />
      ) : (
        <CharactersSection>
          <SearchCharacter />
          <CharactersList />
          <ScrollToTopButton />
        </CharactersSection>
      )}
      {isLoading && <Loader />}
    </main>
  );
};
