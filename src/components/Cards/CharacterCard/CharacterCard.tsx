import { Character } from "../../../models/Character";
import { CharacterCardInfoContainer } from "./CharacterCard.styled";
import r2d2C3POImage from "../../../assets/images/r2d2-c3po-art.jpg";
import { DefaultCardTitle } from "../../../styles/componentsStyles/DefaultCardTitle.styled";
import { BaseCard } from "../../../styles/componentsStyles/BaseCard.styled";
import { CardInfoField } from "../../CardInfoField/CardInfoField";
import { setSelectedCharacter } from "../../../store/character/characterSlice";
import { useAppDispatch } from "../../../store/store";
import { fetchFilmsByIds } from "../../../store/film/operations";
import findMatchingStarshipIds from "../../../helpers/findCharacterShipsInMovies";
import { fetchStarshipDetailsByFilm } from "../../../store/starship/operations";
import { setStarshipsInFilmsInfo } from "../../../store/starship/starshipSlice";

interface CharacterCardProps {
  characterInfo: Character;
  isInFlow: boolean;
}

export const CharacterCard = ({
  characterInfo,
  isInFlow,
}: CharacterCardProps) => {
  const { name, height, mass, gender, hair_color, skin_color, birth_year } =
    characterInfo;
  const dispatch = useAppDispatch();

  const handleCharacterSelect = async () => {
    if (isInFlow) return;

    // Set the selected character
    dispatch(setSelectedCharacter(characterInfo));

    // Fetch films in which the character appears
    await dispatch(fetchFilmsByIds(characterInfo.id)).then((result) => {
      if (fetchFilmsByIds.fulfilled.match(result)) {
        const matchingStarships = findMatchingStarshipIds(
          characterInfo.starships,
          result.payload
        );
        console.log("matchingStarships", matchingStarships);

        if (matchingStarships.length === 0) {
          dispatch(setStarshipsInFilmsInfo([]));
          return;
        }

        // Dispatch starship details based on matching IDs
        dispatch(fetchStarshipDetailsByFilm(matchingStarships));
      }
    });
  };

  return (
    <BaseCard
      onClick={() => handleCharacterSelect()}
      $backgroundImage={r2d2C3POImage}
    >
      <DefaultCardTitle>{name ? name : "Hidden in Shadows"}</DefaultCardTitle>
      <CharacterCardInfoContainer>
        <CardInfoField cardInfoLabel={"Height"} cardInfoValue={height} />
        <CardInfoField cardInfoLabel={"Mass"} cardInfoValue={mass} />
        <CardInfoField
          cardInfoLabel={"Birth year"}
          cardInfoValue={birth_year}
        />
        <CardInfoField cardInfoLabel={"Gender"} cardInfoValue={gender} />
        <CardInfoField
          cardInfoLabel={"Hair color"}
          cardInfoValue={hair_color}
        />
        <CardInfoField
          cardInfoLabel={"Skin color"}
          cardInfoValue={skin_color}
        />
      </CharacterCardInfoContainer>
    </BaseCard>
  );
};
