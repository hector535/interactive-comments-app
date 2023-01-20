import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CommentProvider } from "./context/comment/comment-provider";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  //   <React.StrictMode>
  //     <CommentProvider>
  //       <App />
  //     </CommentProvider>
  //   </React.StrictMode>
  <CommentProvider>
    <App />
  </CommentProvider>
);
