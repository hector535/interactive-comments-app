import { useEffect, useRef, useState } from "react";
import { useComments } from "@/hooks/useComments";
import { Mode } from "@/types";
import * as s from "./add-message.styled";

type Props = {
  mode?: Mode;
  onAddMessage?: () => void;
};

export const AddMessage = ({ mode = "comment", onAddMessage }: Props) => {
  const { selectedComment, submitMessage, editMessage, setMode } =
    useComments();

  const [inputValue, setInputValue] = useState(
    mode === "edit" ? selectedComment!.message : ""
  );
  const [error, setError] = useState("");

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!inputValue.trim()) {
      setError("The field is required");
      return;
    }

    if (inputValue.trim().length < 5) {
      setError("Minimum length: 5 characters");
      return;
    }

    if (inputValue.trim().length > 255) {
      setError("Maximum length: 255 characters");
      return;
    }

    if (mode === "edit") editMessage(inputValue);
    else submitMessage(inputValue);

    setInputValue("");

    if (onAddMessage) onAddMessage();
  };

  useEffect(() => {
    if (!textareaRef.current) return;

    textareaRef.current.focus();
    textareaRef.current.selectionStart = textareaRef.current.value.length;
    textareaRef.current.selectionEnd = textareaRef.current.value.length;
    textareaRef.current.scrollTop = textareaRef.current.scrollHeight;

    if (mode !== "reply") return;
    if (!formRef.current) return;

    formRef.current.scrollIntoView();
  }, []);

  return (
    <s.Container $mode={mode} onSubmit={handleSubmit} ref={formRef}>
      {mode === "edit" || (
        <img
          className="avatar message__avatar"
          src="images/image-juliusomo.webp"
          alt=""
        />
      )}
      <div className="message__form-control">
        <textarea
          ref={textareaRef}
          className="message__input"
          placeholder="Add a comment..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {error && <p className="message__error">{error}</p>}
      </div>

      <button className="btn message__submit">
        {mode === "comment" ? "send" : mode}
      </button>
    </s.Container>
  );
};
