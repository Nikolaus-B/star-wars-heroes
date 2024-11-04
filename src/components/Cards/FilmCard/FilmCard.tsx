import fightImage from "../../../assets/images/star-wars-fight.jpg";
import { Film } from "../../../models/Film";
import {
  FilmContentContainer,
  FilmDescription,
  FilmTitle,
  StyledFilmCard,
} from "./FilmCard.styled";

interface FilmCardProps {
  film: Film;
}

export const FilmCard = ({ film }: FilmCardProps) => {
  const { title, director, opening_crawl, id } = film;

  return (
    <StyledFilmCard $backgroundImage={fightImage}>
      <img
        className=" h-[470px] rounded-lg"
        src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`}
        alt={title}
      />
      <FilmContentContainer>
        <FilmTitle>{title ? title : "Hidden in Shadows"}</FilmTitle>

        <FilmDescription>
          <span> Director:</span> {director}
        </FilmDescription>
        <FilmDescription>{opening_crawl}</FilmDescription>
      </FilmContentContainer>
    </StyledFilmCard>
  );
};
