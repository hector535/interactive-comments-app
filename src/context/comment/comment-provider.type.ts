import { FlatComments, Mode, SelectedComment } from "@/types";

export interface InitialState {
  comments: FlatComments;
  selectedComment: SelectedComment;
  mode: Mode;
}
