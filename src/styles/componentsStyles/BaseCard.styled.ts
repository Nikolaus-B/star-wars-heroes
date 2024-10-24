import styled from "styled-components";

interface StyledBaseCardProps {
  $backgroundImage: string;
}

export const BaseCard = styled.li<StyledBaseCardProps>`
  display: flex;
  flex-direction: column;

  gap: 24px;

  width: 436px;
  height: 608px;

  padding: 40px 45px;
  border-radius: 20px;

  background: linear-gradient(
      90deg,
      rgba(14, 23, 101, 0.85) 0%,
      rgba(53, 14, 88, 0.85) 98.51%
    ),
    url(${({ $backgroundImage }) => $backgroundImage}) no-repeat center center;

  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
