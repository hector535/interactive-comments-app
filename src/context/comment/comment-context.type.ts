import { FlatComments, Mode, SelectedComment, Vote } from "@/types";

export type CommentContextType = {
  comments: FlatComments;
  selectedComment: SelectedComment;
  mode: Mode;
  setMode: (mode: Mode) => void;
  deleteMessage: () => void;
  selectComment: (obj: SelectedComment) => void;
  submitMessage: (m: string) => void;
  editMessage: (m: string) => void;
  vote: (vote: Vote) => void;
  loadComments: (comments: FlatComments) => void;
};
