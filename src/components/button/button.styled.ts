import styled from "styled-components";

type Props = {
  $type: "delete" | "reply" | "edit";
};

export const IconButton = styled.button<Props>`
  color: ${(props) =>
    props.$type === "reply" || props.$type === "edit" ? "#5357b6" : "#ED6368"};
  border: 0;
  background: 0;

  font-weight: 500;

  display: flex;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
  transition: color 0.2s;

  > svg * {
    transition: fill 0.2s;
  }

  &:hover {
    color: ${(props) =>
      props.$type === "reply" || props.$type === "edit"
        ? "#C5C6EF"
        : "#FFB8BB"};

    > svg * {
      fill: ${(props) =>
        props.$type === "reply" || props.$type === "edit"
          ? "#C5C6EF"
          : "#FFB8BB"};
    }
  }
`;
