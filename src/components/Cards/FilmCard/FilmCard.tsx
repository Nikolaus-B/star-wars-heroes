import fightImage from "../../../assets/images/star-wars-fight.jpg";
import { DefaultCardTitle } from "../../../styles/componentsStyles/DefaultCardTitle.styled";
import { BaseCard } from "../../../styles/componentsStyles/BaseCard.styled";
// import { CardInfoField } from "../../CardInfoField/CardInfoField";

import { Film } from "../../../models/Film";

interface FilmCardProps {
  film: Film;
}

export const FilmCard = ({ film }: FilmCardProps) => {
  const { title } = film;

  return (
    <BaseCard $backgroundImage={fightImage}>
      <DefaultCardTitle>{title}</DefaultCardTitle>
    </BaseCard>
  );
};
