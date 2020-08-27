import React, { useState } from "react";
import store from "../store";

const Posts = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const post = {
      title: title,
      body: description,
    };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        store.dispatch({ type: "ADD_BOOL" });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Submit Post</h1>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Title"
        />
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="Description"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Posts;
