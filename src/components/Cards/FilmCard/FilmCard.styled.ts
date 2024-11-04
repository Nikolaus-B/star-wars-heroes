import styled from "styled-components";
import { BaseCard } from "../../../styles/componentsStyles/BaseCard.styled";
import { DefaultCardTitle } from "../../../styles/componentsStyles/DefaultCardTitle.styled";

export const StyledFilmCard = styled(BaseCard)`
  display: flex;
  flex-direction: row;
  gap: 40px;

  width: 750px;
  padding: 0px;
`;

export const FilmContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin: 20px 25px 20px 0px;
`;

export const FilmTitle = styled(DefaultCardTitle)``;

export const FilmDescription = styled.p`
  font-size: 17px;

  color: white;

  & span {
    color: #9c83a7;
  }
`;
