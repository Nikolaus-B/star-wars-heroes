import styled from "styled-components";

export const SearchCharacterContainer = styled.div`
  position: relative;
  width: 596px;
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
    color: #45f3ff;
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

export const SearchCharacterUnderline = styled.i`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #45f3ff;
  border-radius: 4px;
  transition: 0.5s;
  pointer-events: none;
  z-index: 9;
`;
