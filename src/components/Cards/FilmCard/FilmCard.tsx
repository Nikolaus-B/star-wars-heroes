import fightImage from "../../../assets/images/star-wars-fight.jpg";
import { DefaultCardTitle } from "../../../styles/componentsStyles/DefaultCardTitle.styled";
import { BaseCard } from "../../../styles/componentsStyles/BaseCard.styled";
// import { CardInfoField } from "../../CardInfoField/CardInfoField";

import { Film } from "../../../interfaces/Film";

interface FilmCardProps {
  film: Film;
}

export const FilmCard = ({ film }: FilmCardProps) => {
  const { title } = film;

  return (
    <BaseCard $backgroundImage={fightImage}>
      <DefaultCardTitle>{title}</DefaultCardTitle>
      {/* <div>
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
      </div> */}
    </BaseCard>
  );
};
