import { Starship } from "../../../models/Starship";
import { BaseCard } from "../../../styles/componentsStyles/BaseCard.styled";
import { DefaultCardTitle } from "../../../styles/componentsStyles/DefaultCardTitle.styled";
import millenniumFalcon from "../../../assets/images/millennium-falcon.jpg";

interface StarshipCardProps {
  starship: Starship;
}

export const StarshipCard = ({ starship }: StarshipCardProps) => {
  const { name } = starship;

  return (
    <BaseCard $backgroundImage={millenniumFalcon}>
      <DefaultCardTitle>{name}</DefaultCardTitle>
    </BaseCard>
  );
};
