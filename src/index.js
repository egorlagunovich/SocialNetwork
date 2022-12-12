import "./index.css";
import store from "./redux/state";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

export let rerender = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          addPost={store.addPost.bind(store)}
          updateNewPostText={store.updateNewPostText.bind(store)}
          updateNewMessageText={store.updateNewMessageText.bind(store)}
          addMessage={store.addMessage.bind(store)}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};

rerender(store.getState());
store.subscribe(rerender);
