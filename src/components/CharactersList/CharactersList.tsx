import { Character } from "../../models/Character";
import {
  selectCharactersList,
  selectSearchedCharacters,
} from "../../store/character/characterSelectors";
import { fetchCharacters } from "../../store/character/operations";
import {
  selectCurrentPage,
  selectTotalPages,
} from "../../store/service/serviceSelectors";
import { setCurrentPage } from "../../store/service/serviceSlice";
import { appSelector, useAppDispatch } from "../../store/store";
import { CharacterCard } from "../Cards/CharacterCard/CharacterCard";
import {
  MoreCharactersButton,
  StyledCharacterList,
} from "./CharactersList.styled";

export const CharactersList = () => {
  const dispatch = useAppDispatch();

  const totalPages = appSelector(selectTotalPages);
  const currentPage = appSelector(selectCurrentPage);

  const characters = appSelector(selectCharactersList);
  const searchedCharacters = appSelector(selectSearchedCharacters);

  const handleAddCharacters = () => {
    if (currentPage < totalPages) {
      dispatch(fetchCharacters(currentPage + 1));
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <StyledCharacterList>
        {(searchedCharacters || characters).map((character: Character) => {
          return (
            <CharacterCard
              key={character.id}
              characterInfo={character}
              isInFlow={false}
            ></CharacterCard>
          );
        })}
      </StyledCharacterList>
      {!searchedCharacters && (
        <MoreCharactersButton
          onClick={handleAddCharacters}
          disabled={currentPage === totalPages}
        >
          More
        </MoreCharactersButton>
      )}
    </div>
  );
};
