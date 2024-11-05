import styled from "styled-components";

export const SearchCharacterContainer = styled.div`
  position: relative;
  max-width: 596px;
`;

export const SearchCharacterInput = styled.input`
  position: relative;
  width: 100%;
  padding: 20px 10px 10px;
  background: transparent;
  outline: none;
  box-shadow: none;
  border: none;
  color: #23242a;
  font-size: 1em;
  letter-spacing: 0.05em;
  transition: 0.5s;
  z-index: 10;

  &:valid ~ span,
  &:focus ~ span {
    color: linear-gradient(
      90deg,
      rgba(75, 100, 202, 1) 0%,
      rgba(140, 74, 173, 1) 98.51%
    );
    transform: translateX(-10px) translateY(-34px);
    font-size: 0.75em;
  }

  &:valid ~ i,
  &:focus ~ i {
    height: 44px;
  }
`;

export const SearchCharacterTitle = styled.span`
  position: absolute;
  left: 0;
  padding: 20px 10px 10px;
  font-size: 1em;
  color: #8f8f8f;
  letter-spacing: 0.05em;
  transition: 0.5s;
  pointer-events: none;
`;

export const ClearButton = styled.button`
  position: absolute;
  right: 10px;
  top: 55%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: white;
  font-size: 1.2em;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  z-index: 20;

  transition: 0.5s;
  &:hover {
    color: #45f3ff;
  }
`;

export const SearchCharacterUnderline = styled.i`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    rgba(75, 100, 202, 1) 0%,
    rgba(140, 74, 173, 1) 98.51%
  );
  border-radius: 4px;
  transition: 0.5s;
  pointer-events: none;
  z-index: 9;
`;
