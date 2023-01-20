import { useEffect, useMemo } from "react";
import { AddMessage } from "./components/add-message/add-message";
import { CommentList } from "./components/comment-list/comment-list";
import { useComments } from "./hooks/useComments";
import { Modal } from "./components/modal/modal";
import * as s from "./App.styled";

import { flatComments, nestComments } from "./utility";
import { comments } from "./assets/data.json";

export default function App() {
  const {
    comments: flatedComments,
    mode,
    loadComments,
    setMode,
    deleteMessage,
  } = useComments();

  const nestedComments = useMemo(() => {
    return nestComments(flatedComments, flatedComments, []);
  }, [flatedComments]);

  useEffect(() => {
    const store = localStorage.getItem("comments");

    if (!store) {
      loadComments(flatComments(comments, {}));
      return;
    }

    loadComments(flatComments(JSON.parse(store), {}));
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(nestedComments));
  }, [nestedComments]);

  return (
    <s.Container>
      <CommentList comments={nestedComments} />
      <AddMessage />
      <Modal open={mode === "delete"} onClose={() => setMode("comment")}>
        <s.Title>Delete comment</s.Title>
        <s.Text>
          Are you sure you want to delete this comment? This will remove the
          comment and can’t be undone.
        </s.Text>
        <s.FlexContainer>
          <s.Button $bgColor="black" onClick={() => setMode("comment")}>
            no, cancel
          </s.Button>
          <s.Button $bgColor="red" onClick={deleteMessage}>
            yes, delete
          </s.Button>
        </s.FlexContainer>
      </Modal>
    </s.Container>
  );
}
