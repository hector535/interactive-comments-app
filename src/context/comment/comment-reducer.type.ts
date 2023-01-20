import {
  FlatComments,
  FlatComment,
  SelectedComment,
  Mode,
  Vote,
} from "@/types";

export type ActionType =
  | { type: "[COMMENT] LOAD COMMENTS"; payload: FlatComments }
  | { type: "[COMMENT] SUBMIT MESSAGE"; payload: FlatComment }
  | { type: "[COMMENT] EDIT MESSAGE"; payload: string }
  | { type: "[COMMENT] SELECT COMMENT"; payload: SelectedComment }
  | { type: "[COMMENT] VOTE"; payload: Vote }
  | { type: "[COMMENT] SET MODE"; payload: Mode }
  | { type: "[COMMENT] DELETE MESSAGE" };
