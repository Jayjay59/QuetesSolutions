import React, { useState, useEffect } from "react";
import PostList from "./PostList";

const BlogSection = ({ user, onLogout }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((posts) => setPosts(posts), setLoading(false));
  }, []);

  return (
    <div className="App">
      <h1>Welcome, {user}</h1>
      <h2>Here are you favorite articles</h2>
      {loading ? <h1>loading posts</h1> : <PostList posts={posts} />}

      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default BlogSection;
