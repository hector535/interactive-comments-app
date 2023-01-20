import { useReducer } from "react";
import { CommentContext } from "./comment-context";
import { commentReducer } from "./comment-reducer";
import { InitialState } from "./comment-provider.type";
import { CommentContextType } from "./comment-context.type";

import { FlatComments, Mode, SelectedComment, Vote } from "@/types";
import { currentUser } from "@/assets/data.json";
import { timeSince } from "@/utility";

type Props = {
  children: React.ReactNode;
};

const initialState: InitialState = {
  comments: {},
  selectedComment: null,
  mode: null,
};

export const CommentProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(commentReducer, initialState);

  const selectComment = (comment: SelectedComment) =>
    dispatch({ type: "[COMMENT] SELECT COMMENT", payload: comment });

  const setMode = (mode: Mode) =>
    dispatch({ type: "[COMMENT] SET MODE", payload: mode });

  const submitMessage = (message: string) => {
    const payload = {
      id: Date.now(),
      content: message,
      createdAt: Date.now(),
      score: 1,
      user: { ...currentUser },
      repliesIds: [],
    } as any;

    if (state.mode === "reply") {
      payload.replyingTo = state.selectedComment?.owner;
    }

    dispatch({ type: "[COMMENT] SUBMIT MESSAGE", payload });
  };

  const editMessage = (message: string) =>
    dispatch({ type: "[COMMENT] EDIT MESSAGE", payload: message });

  const deleteMessage = () => dispatch({ type: "[COMMENT] DELETE MESSAGE" });

  const vote = ({ id, type, username }: Vote) =>
    dispatch({ type: "[COMMENT] VOTE", payload: { id, type, username } });

  const loadComments = (comments: FlatComments) =>
    dispatch({ type: "[COMMENT] LOAD COMMENTS", payload: comments });

  return (
    <CommentContext.Provider
      value={
        {
          comments: state.comments,
          selectedComment: state.selectedComment,
          mode: state.mode,
          submitMessage,
          editMessage,
          deleteMessage,
          setMode,
          selectComment,
          vote,
          loadComments,
        } as CommentContextType
      }
    >
      {children}
    </CommentContext.Provider>
  );
};
