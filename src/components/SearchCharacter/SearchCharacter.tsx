import { useAppDispatch } from "../../store/store";
import {
  SearchCharacterContainer,
  SearchCharacterInput,
  SearchCharacterTitle,
  SearchCharacterUnderline,
  ClearButton,
} from "./SearchCharacter.styled";
import { fetchCharacterByName } from "../../store/character/operations";
import useDebouncedCallback from "../../hooks/useDebounceCallback";
import { useState } from "react";

export const SearchCharacter = () => {
  const dispatch = useAppDispatch();
  const [searchedCharacter, setSearchedCharacter] = useState("");

  const handleFindCharacter = useDebouncedCallback((name: string) => {
    dispatch(fetchCharacterByName(name));
  }, 1000);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchedCharacter(value);
    handleFindCharacter(value);
  };

  const handleClearInput = () => {
    setSearchedCharacter("");
    handleFindCharacter("");
  };

  return (
    <SearchCharacterContainer>
      <SearchCharacterInput
        onChange={handleChangeInput}
        type="text"
        value={searchedCharacter}
        required
      />
      {searchedCharacter && (
        <ClearButton onClick={handleClearInput}>&times;</ClearButton>
      )}
      <SearchCharacterTitle>Find character</SearchCharacterTitle>
      <SearchCharacterUnderline />
    </SearchCharacterContainer>
  );
};
