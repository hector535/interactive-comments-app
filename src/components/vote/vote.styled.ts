import styled from "styled-components";

type Props = {
  $currentVote?: "upvote" | "downvote";
};

export const Container = styled.div<Props>`
  padding: 0 1rem;
  width: 100px;
  height: 40px;
  background-color: #f5f6fa;
  border-radius: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .vote__btn {
    color: #c5c6ef;
    border: 0;
    background: 0;
    cursor: pointer;
  }

  .vote__count {
    color: #5357b6;
    font-weight: 500;
  }

  .vote__btn,
  .vote__count {
    > svg * {
      transition: fill 0.2s;
    }
  }

  .vote__btn--${(props) => props.$currentVote} {
    > svg * {
      fill: #5357b6;
    }
  }

  .vote__btn:hover,
  .vote__count:hover {
    > svg * {
      fill: #5357b6;
    }
  }
`;
