import { useEffect, useRef } from "react";
import { Comment } from "./comment/comment";
import { IComment } from "@/types";
import * as s from "./comment-list.styled";

type Props = {
  comments: IComment[];
  isReply?: boolean;
};

const RecursiveComments = ({ comments, isReply = false }: Props) => {
  return (
    <>
      {comments.map((comment) => {
        return (
          <s.Container $isReply={isReply} key={comment.id}>
            <Comment comment={comment} />
            <CommentList comments={comment.replies} isReply={true} />
          </s.Container>
        );
      })}
    </>
  );
};

export const CommentList = ({ comments, isReply = false }: Props) => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!divRef.current) return;
    divRef.current.scrollTop = divRef.current.scrollHeight;
  }, [comments.length]);

  return (
    <div ref={divRef}>
      <RecursiveComments comments={comments} isReply={isReply} />
    </div>
  );
};
