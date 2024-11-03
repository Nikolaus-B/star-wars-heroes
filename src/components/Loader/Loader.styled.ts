import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    stroke-dashoffset: 500;
    opacity: .5;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 1;
  }
`;

const flip = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(1080deg);
  }
`;

export const LoaderWrapper = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 99;
  @apply inline-block relative filter drop-shadow-[0_0_1px_yellow];
`;

export const LoaderSvg = styled.svg`
  width: 100px;
  height: 100px;
  animation: ${flip} 2s linear infinite;
`;

export const LoaderPath = styled.path`
  stroke: #39579e;
  stroke-width: 30;
  fill: transparent;
  stroke-dasharray: 100px 5px;
  animation: ${spin} 1s ease-in-out infinite alternate;
`;
