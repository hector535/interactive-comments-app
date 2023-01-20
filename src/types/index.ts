export interface IComment {
  id: number;
  content: string;
  createdAt: number;
  lastVote: { username: string; type: "upvote" | "downvote" } | null;
  score: number;
  user: IUser;
  replies: IComment[];
  replyingTo?: string;
}

export interface IImage {
  png: string;
  webp: string;
}

export interface IUser {
  image: IImage;
  username: string;
}

export type SelectedComment = {
  id: number;
  owner: string;
  message: string;
} | null;

export type FlatComment = Omit<IComment, "replies"> & {
  repliesIds: number[];
};

export type FlatComments = Record<
  string,
  Omit<IComment, "replies"> & { repliesIds: number[] }
>;

export type Mode = "edit" | "comment" | "delete" | "reply" | null;

export type Vote = {
  id: number;
  type: "upvote" | "downvote";
  username: string;
};
