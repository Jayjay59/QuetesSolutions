import React, { useEffect, useState } from "react";
import "./styles.css";
import BlogSection from "./BlogSection";
import Login from "./Login";

function App() {
  const [user, setUser] = useState("");

  const handleLogin = (userName) => {
    setUser(userName);
  };

  const handleLogout = () => {
    setUser("");
    console.log("Bye");
    console.log("L'utilisateur a changé !");
  };

  useEffect(() => {
    if (user !== "") {
      console.log("L'utilisateur a changé !");
    }
  }, [user]);

  return (
    <div className="App">
      {user ? (
        <BlogSection user={user} onLogout={handleLogout} />
      ) : (
        <>
          <Login onSubmit={handleLogin} />
        </>
      )}
    </div>
  );
}

export default App;
