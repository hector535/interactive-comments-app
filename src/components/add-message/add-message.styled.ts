import styled from "styled-components";
import { Mode } from "@/types";

type Props = {
  $mode: Mode;
};

export const Container = styled.form<Props>`
  ${(props) =>
    props.$mode !== "edit" &&
    `padding: 1rem; 
     background-color: #ffffff; 
     border-radius: 8px;`}

  ${(props) =>
    props.$mode !== "edit" &&
    props.$mode !== "reply" &&
    `box-shadow: -1px -3px 9px 2px rgba(0, 0, 0, 0.16);
        -webkit-box-shadow: -1px -3px 9px 2px rgba(0, 0, 0, 0.16);
        -moz-box-shadow: -1px -3px 9px 2px rgba(0, 0, 0, 0.16);`}

  position:relative;
  z-index: 2;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);

  ${(props) =>
    props.$mode === "edit"
      ? "grid-template-rows: auto auto;"
      : "grid-template-rows: 6rem auto;"}

  .message__avatar {
    grid-row: 2 / 4;
    align-self: center;
  }

  .message__form-control {
    grid-column: 1 / -1;

    display: grid;
    ${(props) => props.$mode === "edit" && "grid-template-rows: 100px auto;"};
    gap: 0.25rem;
  }

  .message__input {
    border: 1px solid #e9ebf0;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    outline: none;
    resize: none;
    transition: border 0.2s;
  }

  .message__input:focus {
    border: 1px solid #5357b6;
  }

  .message__error {
    color: red;
    font-size: 0.75rem;
  }

  .message__submit {
    ${(props) => props.$mode === "edit" && "grid-column: 1 / -1"};
    grid-row: 2 / 4;
    transition: background-color 0.2s;
  }

  .message__submit:hover {
    background-color: #c5c6ef;
  }

  @media (min-width: 75em) {
    display: flex;
    align-items: start;
    justify-content: space-between;
    grid-template-columns: initial;

    .message__form-control {
      height: 100%;
      width: 100%;
    }

    .message__avatar {
      grid-row: initial;
      align-self: initial;
    }
  }
`;
