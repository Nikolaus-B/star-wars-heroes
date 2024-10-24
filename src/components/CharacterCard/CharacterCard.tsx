import { Character } from "../../interfaces/Character";
import { CharacterCardInfoContainer } from "./CharacterCard.styled";
import r2d2C3POImage from "../../assets/images/r2d2-c3po-art.jpg";
import { DefaultCardTitle } from "../../styles/componentsStyles/DefaultCardTitle.styled";
import { BaseCard } from "../../styles/componentsStyles/BaseCard.styled";
import { CardInfoField } from "../CardInfoField/CardInfoField";

interface CharacterCardProps {
  characterInfo: Character;
}

export const CharacterCard = ({ characterInfo }: CharacterCardProps) => {
  const { name, height, mass, gender, hair_color, skin_color, birth_year } =
    characterInfo;

  return (
    <BaseCard $backgroundImage={r2d2C3POImage}>
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
