import React, { useEffect, useState } from "react";

const Posts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Posts</h1>
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
