import styled from "styled-components";

export const StarshipDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  padding-top: 25px;
  border-top: 1px solid #d4ddd9;
`;

export const StarshipInfoText = styled.p`
  color: white;

  & span {
    color: #9c83a7;
  }
`;
