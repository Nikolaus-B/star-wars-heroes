import styled from "styled-components";

interface StyledBaseCardProps {
  $backgroundImage: string;
}

export const BaseCard = styled.li<StyledBaseCardProps>`
  display: flex;
  flex-direction: column;

  gap: 24px;

  width: 440px;
  /* height: 458px; */

  padding: 35px 40px;
  border-radius: 20px;

  background: linear-gradient(
      90deg,
      rgba(14, 23, 101, 0.9) 0%,
      rgba(53, 14, 88, 0.9) 98.51%
    ),
    url(${({ $backgroundImage }) => $backgroundImage}) no-repeat center center;

  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
