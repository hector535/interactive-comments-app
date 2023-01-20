import { useContext } from "react";
import { CommentContext } from "@/context/comment/comment-context";
import { CommentContextType } from "@/context/comment/comment-context.type";

export const useComments = () => {
  return useContext(CommentContext) as CommentContextType;
};
