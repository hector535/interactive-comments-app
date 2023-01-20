import { IComment, FlatComments, FlatComment } from "@/types";

export const flatComments = (
  comments: IComment[],
  dictionary: FlatComments
) => {
  if (comments.length === 0) return dictionary;

  comments.forEach((comment) => {
    const { replies, ...rest } = comment;

    dictionary[rest.id] = {
      ...rest,
      repliesIds: replies.map((reply) => reply.id),
    };

    flatComments(replies, dictionary);
  });

  return dictionary;
};

export const nestComments = (
  allComments: FlatComments,
  currentComments: FlatComments,
  includedComments: number[]
) => {
  const result = [];

  for (const key of Object.keys(currentComments)) {
    const comment = { ...currentComments[key] } as FlatComment & {
      replies: IComment[];
    };

    if (includedComments.includes(comment.id)) continue;

    const replies = {} as Record<number, Omit<IComment, "replies">>;

    comment.repliesIds.forEach((replyId: number) => {
      replies[replyId] = { ...allComments[replyId] };
    });

    comment.replies = nestComments(
      allComments,
      replies as FlatComments,
      includedComments
    );

    const { repliesIds, ...rest } = comment;

    result.push(rest);
    includedComments.push(comment.id);
  }

  return result;
};

export const cloneComments = (state: FlatComments) => {
  const clonedState = {} as FlatComments;

  Object.keys(state).forEach((key: string) => {
    clonedState[key] = { ...state[key] };
    clonedState[key].repliesIds = [...clonedState[key].repliesIds];
  });

  return clonedState;
};

export const timeSince = (dateInMs: number) => {
  var seconds = Math.floor((Date.now() - dateInMs) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
};
