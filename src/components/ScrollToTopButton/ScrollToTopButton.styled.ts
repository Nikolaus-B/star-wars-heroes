import styled from "styled-components";

interface StyledScrollToTopButtonProps {
  $isVisible: boolean;
}

const getVisible = (props: StyledScrollToTopButtonProps) =>
  props.$isVisible ? 1 : 0;
const getEvents = (props: StyledScrollToTopButtonProps) =>
  props.$isVisible ? "auto" : "none";

export const Button = styled.button<StyledScrollToTopButtonProps>`
  position: fixed;

  right: 6px;
  bottom: 30%;

  padding: 10px 11px;

  z-index: 10;
  cursor: pointer;
  pointer-events: ${getEvents};
  opacity: ${getVisible};

  backdrop-filter: blur(6px);
  border: 1px solid var(--accent-green-300);
  background-color: transparent;
  border-radius: 50px;

  transition: opacity var(--transition-dur-and-func);

  @media screen and (min-width: 1541px) {
    right: 3%;
  }
`;
