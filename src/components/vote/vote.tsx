import { ReactComponent as PlusIcon } from "@/assets/images/icon-plus.svg";
import { ReactComponent as MinusIcon } from "@/assets/images/icon-minus.svg";
import * as s from "./vote.styled";

type Props = {
  onVote: (type: "upvote" | "downvote") => void;
  currentVote?: "upvote" | "downvote";
  votes: number;
};

export const Vote = ({ onVote, votes, currentVote }: Props) => {
  return (
    <s.Container $currentVote={currentVote}>
      <button
        className="vote__btn vote__btn--upvote"
        onClick={() => onVote("upvote")}
      >
        <PlusIcon />
      </button>
      <p className="vote__count">{votes}</p>
      <button
        className="vote__btn vote__btn--downvote"
        onClick={() => onVote("downvote")}
      >
        <MinusIcon />
      </button>
    </s.Container>
  );
};
