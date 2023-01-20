import { cloneComments } from "@/utility";
import { InitialState } from "./comment-provider.type";
import { ActionType } from "./comment-reducer.type";

export const commentReducer = (
  state: InitialState,
  action: ActionType
): InitialState => {
  switch (action.type) {
    case "[COMMENT] LOAD COMMENTS": {
      return { ...state, comments: { ...action.payload } };
    }

    case "[COMMENT] SET MODE": {
      return { ...state, mode: action.payload };
    }

    case "[COMMENT] SUBMIT MESSAGE": {
      const clonedComments = cloneComments(state.comments);
      clonedComments[action.payload.id] = { ...action.payload };

      if (state.mode === "reply") {
        clonedComments[state.selectedComment!.id].repliesIds.push(
          action.payload.id
        );
      }

      return { ...state, mode: null, comments: clonedComments };
    }

    case "[COMMENT] EDIT MESSAGE": {
      const clonedComments = cloneComments(state.comments);
      clonedComments[state.selectedComment!.id].content = action.payload;

      return { ...state, mode: null, comments: clonedComments };
    }

    case "[COMMENT] DELETE MESSAGE": {
      const clonedComments = cloneComments(state.comments);
      const idToDelete = state.selectedComment!.id;

      for (const key of Object.keys(clonedComments)) {
        if (clonedComments[key].repliesIds.includes(idToDelete)) {
          clonedComments[key].repliesIds = clonedComments[
            key
          ].repliesIds.filter((id) => id !== idToDelete);
          break;
        }
      }

      delete clonedComments[idToDelete];

      return { ...state, mode: null, comments: clonedComments };
    }

    case "[COMMENT] SELECT COMMENT": {
      const newSelectedComment = action.payload ? { ...action.payload } : null;
      return {
        ...state,
        selectedComment: newSelectedComment,
      };
    }

    case "[COMMENT] VOTE": {
      const clonedComments = cloneComments(state.comments);

      clonedComments[action.payload.id].score +=
        action.payload.type === "upvote" ? 1 : -1;

      clonedComments[action.payload.id].lastVote = {
        username: action.payload.username,
        type: action.payload.type,
      };

      return { ...state, mode: null, comments: clonedComments };
    }

    default:
      return state;
  }
};
