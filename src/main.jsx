import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Post from "./Post";
import postData from "./post-data.json";

ReactDOM.render(
  <React.StrictMode>
    <Post data={postData} />
  </React.StrictMode>,
  document.getElementById("root")
);
