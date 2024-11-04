import {
  SearchCharacterContainer,
  SearchCharacterInput,
  SearchCharacterTitle,
  SearchCharacterUnderline,
} from "./SearchCharacter.styled";

export const SearchCharacter = () => {
  return (
    <SearchCharacterContainer>
      <SearchCharacterInput type="text" required />
      <SearchCharacterTitle>Find character</SearchCharacterTitle>
      <SearchCharacterUnderline />
    </SearchCharacterContainer>
  );
};
