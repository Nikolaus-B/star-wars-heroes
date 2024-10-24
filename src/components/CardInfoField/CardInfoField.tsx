import {
  FieldInfoContainer,
  CardInfoLabel,
  CardInfoValue,
} from "./CardInfoField.styled";

interface CardInfoFieldProps {
  cardInfoLabel: string;
  cardInfoValue: string;
}

export const CardInfoField = ({
  cardInfoLabel,
  cardInfoValue,
}: CardInfoFieldProps) => (
  <FieldInfoContainer>
    <CardInfoLabel>{cardInfoLabel}:</CardInfoLabel>
    <CardInfoValue>{cardInfoValue}</CardInfoValue>
  </FieldInfoContainer>
);
