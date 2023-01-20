import { ReactComponent as ReplyIcon } from "@/assets/images/icon-reply.svg";
import { ReactComponent as EditIcon } from "@/assets/images/icon-edit.svg";
import { ReactComponent as DeleteIcon } from "@/assets/images/icon-delete.svg";

import * as s from "./button.styled";

type Props = {
  type: "edit" | "delete" | "reply";
  text: string;
  onClick: () => void;
};

export const IconButton = ({ type, text, onClick }: Props) => {
  const icon = {
    edit: <EditIcon />,
    delete: <DeleteIcon />,
    reply: <ReplyIcon />,
  };
  return (
    <s.IconButton $type={type} onClick={onClick}>
      {icon[type]}
      {text}
    </s.IconButton>
  );
};
