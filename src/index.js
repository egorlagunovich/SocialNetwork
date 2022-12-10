import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let messagesData = [
  { id: 1, message: "What is upp" },
  { id: 2, message: "How are you" },
  { id: 3, message: "Hi" },
  { id: 4, message: "Hello bro" },
  { id: 5, message: "Yo" },
  { id: 6, message: "Maksim" },
  { id: 7, message: "Anton" },
];

let dialogsData = [
  { id: 1, name: "Jurek" },
  { id: 2, name: "Misha" },
  { id: 3, name: "Hleb" },
  { id: 4, name: "Bogdan" },
  { id: 5, name: "Daniele" },
  { id: 6, name: "Maksim" },
  { id: 7, name: "Anton" },
];

let postsData = [
  { id: 1, message: "Like drink cola", likesCount: 12 },
  { id: 2, message: "How are you", likesCount: 22 },
  { id: 3, message: "Hi", likesCount: 222 },
  { id: 4, message: "Hello bro", likesCount: 2 },
  { id: 5, message: "Yo", likesCount: 35 },
];


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
