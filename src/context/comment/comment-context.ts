import { createContext } from "react";
import { CommentContextType } from "./comment-context.type";

export const CommentContext = createContext<CommentContextType | null>(null);
