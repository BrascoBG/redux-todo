import React from "react";
import Posts from "./components/Posts";
import PostsForm from "./components/PostForm";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostsForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
