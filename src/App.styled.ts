import styled from "styled-components";

type ButtonProps = {
  $bgColor: "black" | "red";
};

export const Container = styled.main`
  width: 90%;
  margin: 0 auto;
  padding: 2rem 0;
  height: 100vh;

  display: grid;
  grid-template-rows: 1fr auto;

  > div {
    overflow-y: auto;
  }

  @media (min-width: 48em) {
    width: 80%;
  }

  @media (min-width: 75em) {
    width: 70%;
    grid-template-rows: 1fr 9rem;
  }

  @media (min-width: 90em) {
    width: 60%;
  }

  @media (min-width: 115em) {
    width: 50%;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 20px;
  color: #334253;
  margin-bottom: 1rem;
`;

export const Text = styled.p`
  margin-bottom: 1rem;
`;

export const Button = styled.button<ButtonProps>`
  border: 0;
  background-color: ${(props) =>
    props.$bgColor === "black" ? "#67727e" : "#ED6368"};
  border-radius: 8px;
  color: #fff;
  font-weight: 500;

  padding: 0.75rem 1rem;
  text-transform: uppercase;

  cursor: pointer;
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: 0.875rem;

  > button {
    flex-basis: 100%;
  }
`;
