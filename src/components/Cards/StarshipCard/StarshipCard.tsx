import { Starship } from "../../../models/Starship";
import { BaseCard } from "../../../styles/componentsStyles/BaseCard.styled";
import { DefaultCardTitle } from "../../../styles/componentsStyles/DefaultCardTitle.styled";
import millenniumFalcon from "../../../assets/images/millennium-falcon.jpg";
import {
  StarshipDetailsContainer,
  StarshipInfoText,
} from "./StarshipCard.styled";

interface StarshipCardProps {
  starship: Starship;
}

export const StarshipCard = ({ starship }: StarshipCardProps) => {
  const { name, model, length, hyperdrive_rating, cargo_capacity } = starship;

  return (
    <BaseCard $backgroundImage={millenniumFalcon}>
      <DefaultCardTitle>{name}</DefaultCardTitle>
      <StarshipDetailsContainer>
        <StarshipInfoText>
          <span>Length: </span>
          {length}
        </StarshipInfoText>
        <StarshipInfoText>
          <span>Cargo capacity: </span>
          {cargo_capacity}
        </StarshipInfoText>
        <StarshipInfoText>
          <span>Hyperdrive rating: </span>
          {hyperdrive_rating}
        </StarshipInfoText>
        <StarshipInfoText>
          <span>Model: </span>
          {model}
        </StarshipInfoText>
      </StarshipDetailsContainer>
    </BaseCard>
  );
};
