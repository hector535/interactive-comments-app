import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10;
  background-color: hsl(0, 0%, 0%, 0.5);
  backdrop-filter: blur(2px);
`;

export const Container = styled.div`
  padding: 1.5rem 1.75rem;
  background-color: #fff;
  color: #67727e;

  position: fixed;
  inset: 0;
  z-index: 100;

  width: 21.4rem;
  height: min-content;
  margin: auto;

  border-radius: 8px;

  @media (min-width: 75em) {
    width: 25rem;
  }
`;
