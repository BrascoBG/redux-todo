import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import store from "../store";

const Posts = () => {
  const [data, setData] = useState([]);
  const myData = useSelector((state) => state.reducer.body);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        store.dispatch({ type: "ADD_DATA", payload: data });
        setData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const mapStateToProps = (state) => {
    return {
      data: state.reducer,
    };
  };

  return (
    <div>
      <h1>Posts</h1>
      <h1>{myData}</h1>
      {data.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <h5>{post.body}</h5>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Posts;
