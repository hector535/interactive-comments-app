import { AddMessage } from "@/components/add-message/add-message";
import { Vote } from "@/components/vote/vote";
import { IconButton } from "@/components/button/button";
import { useComments } from "@/hooks/useComments";
import { IComment, Mode } from "@/types";
import * as s from "./comment.styled";
import { timeSince } from "@/utility";

type Props = {
  comment: IComment;
};

const currentUser = "juliusomo";

export const Comment = ({ comment }: Props) => {
  const { mode, selectedComment, vote, selectComment, setMode } = useComments();

  const handleVote = (type: "upvote" | "downvote") => {
    if (
      comment.lastVote?.username === currentUser &&
      comment.lastVote?.type === type
    )
      return null;

    vote({ id: comment.id, type, username: currentUser });
  };

  const toggleMode = (newMode: Mode) => {
    setMode(newMode === mode ? null : newMode);
    selectComment(
      newMode === mode
        ? null
        : {
            id: comment.id,
            message: comment.content,
            owner: comment.user.username,
          }
    );
  };

  const isEditing = mode === "edit" && comment.id === selectedComment?.id;
  const isReplying = mode === "reply" && comment.id === selectedComment?.id;
  const isCommentOwner = comment.user.username === currentUser;

  return (
    <>
      <s.Container>
        <Vote
          votes={comment.score}
          onVote={handleVote}
          currentVote={comment.lastVote?.type}
        />

        {isCommentOwner ? (
          <>
            <IconButton
              text="Edit"
              type="edit"
              onClick={() => toggleMode("edit")}
            />
            <IconButton
              text="Delete"
              type="delete"
              onClick={() => toggleMode("delete")}
            />
          </>
        ) : (
          <IconButton
            text="Reply"
            type="reply"
            onClick={() => toggleMode("reply")}
          />
        )}

        <div className="comment__content">
          <div className="comment__header">
            <img className="avatar" src={comment.user.image.webp} alt="" />
            <p className="comment__author">
              {comment.user.username}
              {isCommentOwner && <span>you</span>}
            </p>
            <p className="comment__date">
              {timeSince(comment.createdAt as any)} ago
            </p>
          </div>
          {isEditing ? (
            <AddMessage mode="edit" />
          ) : (
            <p className="comment__description">
              {comment.replyingTo && <span>@{comment.replyingTo} </span>}
              {comment.content}
            </p>
          )}
        </div>
      </s.Container>
      {isReplying && (
        <AddMessage mode="reply" onAddMessage={() => toggleMode("reply")} />
      )}
    </>
  );
};
