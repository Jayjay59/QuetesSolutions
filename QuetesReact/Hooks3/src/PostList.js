import React from "react";

const PostList = ({ posts }) => {
  return (
    <ul>
      {posts.slice(0, 5).map((post) => {
        return <li key={post.title}>{post.title}</li>;
      })}
    </ul>
  );
};

export default PostList;
