import styled from "styled-components";

type Props = {
  $isReply: boolean;
};

export const Container = styled.section<Props>`
  display: grid;
  gap: 1.5rem;

  padding-left: ${(props) => `${props.$isReply ? "1rem" : "0"}`};
  border-left: ${(props) => `${props.$isReply ? "1px solid #e9ebf0" : "0"}`};

  @media (min-width: 75em) {
    margin-left: ${(props) => `${props.$isReply ? "3rem" : "0"}`};
    padding-left: ${(props) => `${props.$isReply ? "3rem" : "0"}`};
    border-left: ${(props) => `${props.$isReply ? "1px solid #e9ebf0" : "0"}`};
  }
`;
