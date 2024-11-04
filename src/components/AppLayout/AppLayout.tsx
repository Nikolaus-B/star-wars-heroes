import { useEffect } from "react";
import { selectSelectedCharacter } from "../../store/character/characterSelectors";
import { fetchCharacters } from "../../store/character/operations";
import {
  selectCurrentPage,
  selectIsLoading,
  selectTotalPages,
} from "../../store/service/serviceSelectors";
import { setCurrentPage } from "../../store/service/serviceSlice";
import { appSelector, useAppDispatch } from "../../store/store";
import CharacterFlow from "../CharacterFlow/CharacterFlow";
import { CharactersList } from "../CharactersList/CharactersList";
import Loader from "../Loader/Loader";
import { CharactersSection, MoreCharactersButton } from "./AppLayout.styled";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
import { SearchCharacter } from "../SearchCharacter/SearchCharacter";

export const AppLayout = () => {
  const dispatch = useAppDispatch();

  const isLoading = appSelector(selectIsLoading);
  const totalPages = appSelector(selectTotalPages);
  const currentPage = appSelector(selectCurrentPage);
  const selectedCharacter = appSelector(selectSelectedCharacter);

  useEffect(() => {
    dispatch(fetchCharacters(1));
  }, []);

  const handleAddCharacters = () => {
    dispatch(fetchCharacters(currentPage + 1));
    dispatch(setCurrentPage(currentPage + 1));
  };

  return (
    <main>
      {selectedCharacter ? (
        !isLoading && <CharacterFlow selectedCharacter={selectedCharacter} />
      ) : (
        <CharactersSection>
          <SearchCharacter />
          <CharactersList />
          <MoreCharactersButton
            onClick={handleAddCharacters}
            disabled={currentPage === totalPages}
          >
            More
          </MoreCharactersButton>
          <ScrollToTopButton />
        </CharactersSection>
      )}
      {isLoading && <Loader />}
    </main>
  );
};
